import React, { useContext, useEffect, useState } from 'react';
import './EnrollClass.css';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaGripHorizontal, FaTrashAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const EnrollClass = () => {
    const { user } = useContext(AuthContext);
    const [allClasses, setAllClasses] = useState([]);
    const total = allClasses.reduce((sum, item) => item.price + sum, 0).toFixed(2);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/enrolled/email/${user.email}`)
                .then((res) => res.json())
                .then((data) => setAllClasses(data));
        }
    }, [user]);
    const handleDelete = user => {
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
                fetch(`http://localhost:5000/enrolled/email/${user.email}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setAllClasses(prevClasses => prevClasses.filter(row => row._id !== user._id));
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            ).then(() => {
                                window.location.reload();
                            });
                        }
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Enrolled </title>
            </Helmet>
            <div className='myCLass_header'>
                <h1>Congratulations! <span className='text-orange-700'>{user.displayName}</span>, You have Enrolled
                    <span className='text-orange-700'> {allClasses.length}</span> Coureses here</h1>
                <h1>Your Total Amount Will be <span className='text-orange-700'> {total}</span></h1>
                <p className='text-center'>Want to Confirm? click the button below...</p>

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
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses.map((row, index) => <tr key={row._id}>
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
                                <td>$ {row.price}</td>
                                <td ><Link to="/dashboard/history" className='btn btn_pay'> <FaDollarSign></FaDollarSign></Link></td>
                                <td>
                                    <button onClick={() => handleDelete(user)}
                                        className="btn btn-ghost  bg-red-600 text-white">
                                        <FaTrashAlt></FaTrashAlt>
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

export default EnrollClass;