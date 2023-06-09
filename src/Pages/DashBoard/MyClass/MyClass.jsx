import React from 'react';
import { Helmet } from 'react-helmet-async';
import useClass from '../../../customhokk/useClass';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyClass = () => {
    const [cart, refetch] = useClass();
    const total = cart.reduce((sum, item) => item.price + sum, 0)

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
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>MyClasses</title>
            </Helmet>
            <div>
                <h1>my classes {cart.length}</h1>
                <h1>Total price {total}</h1>

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
                                    <button onClick={() => handleDelete(row)} className="btn btn-ghost  bg-red-800 text-white"><FaTrashAlt></FaTrashAlt></button>
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