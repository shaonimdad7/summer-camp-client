import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useClass from '../../../customhokk/useClass';
import { FaArrowRight, FaDollarSign, FaGripHorizontal, FaPaypal, FaRedoAlt, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './MyClass.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Link } from 'react-router-dom';

const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [cart, refetch] = useClass();
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        // Retrieve enrolled courses from local storage when the component mounts
        const storedEnrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses'));
        if (storedEnrolledCourses) {
            setEnrolledCourses(storedEnrolledCourses);
        }
    }, []);

    const handleAddToEnrolled = item => {
        console.log(item);
        if (user && user.email) {
            const enrolledItem = {
                itemId: item._id,
                name: item.name,
                image: item.image,
                importance: item.importance,
                price: item.price,
                rating: item.rating,
                availableSeat: item.availableSeat,
                instructorName: item.instructorName,
                email: user.email
            };
            fetch('http://localhost:5000/enrolled', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(enrolledItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'Your class Enrolled Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setEnrolledCourses((prevCourses) => [...prevCourses, item._id]);
                        localStorage.setItem('enrolledCourses', JSON.stringify([...enrolledCourses, item._id]));
                    }
                });
        }
    };

    const handleDelete = row => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${row._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                            // setEnrolledCourses((prevCourses) => [...prevCourses, row._id]);
                            // localStorage.setItem('enrolledCourses', JSON.stringify([...enrolledCourses, row._id]));
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>MyClasses </title>
            </Helmet>
            <div className='myCLass_header'>
                <h1>Hi <span className='text-orange-700'>{user.displayName}</span>! You have added
                    <span className='text-orange-700'> {cart.length}</span> Coureses here</h1>
                <p className='text-center'>Want to enroll? click the button below...</p>

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-[18px] text-orange-700 bg-base-200'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Instructor Name</th>
                            <th>Available Seat</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Enroll  </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row, index) => <tr key={row._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {row.name}
                                </td>
                                <td>{row.instructorName}</td>
                                <td>{row.availableSeat} Seats Only</td>
                                <td className='text-end'>$ {row.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(row)} className="btn btn-ghost  bg-red-600 text-white" >
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleAddToEnrolled(row)}
                                        disabled={enrolledCourses.includes(row._id)}
                                        className="btn bg-orange-500 text-black"
                                    >
                                        <FaGripHorizontal />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;
