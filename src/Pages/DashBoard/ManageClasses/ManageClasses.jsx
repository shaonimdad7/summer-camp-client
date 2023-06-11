import React from 'react';
import './ManageClasses.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaCheck, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const { data: manageAllClasses = [], refetch } = useQuery(['class'], async () => {
        const res = await fetch('http://localhost:5000/class')
        return res.json();
    })
    const handleApproved = manageAllClass => {
        fetch(`http://localhost:5000/class/approved/${manageAllClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: `${manageAllClass.name} is approvred!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDenied = manageAllClass => {
        fetch(`http://localhost:5000/class/denied/${manageAllClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: `${manageAllClass.name} is Denied!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDelete = manageAllClass => {
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
                fetch(`http://localhost:5000/class/${manageAllClass._id}`, {
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
        <div className='w-full'>
            <h2 className='text-center manageClasses_header'>All The Classes The Instructors Have added Is <span className='text-orange-700'>{manageAllClasses.length}</span></h2>
            <div className="overflow-x-auto my-12">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=' text-orange-700 bg-base-200'>
                            {/* <th>#</th> */}
                            <th>Courses Image</th>
                            <th>Courses <br /> <span className='mt-2'>Name</span></th>
                            <th>Instractor <br /> Name</th>
                            <th>Instractor <br /> Email</th>
                            <th>Price</th>
                            <th>Availabe <br /> Seats</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageAllClasses.map((manageAllClass, index) => <tr key={manageAllClass._id}>
                                {/* <td>{index + 1}</td> */}
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={manageAllClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {manageAllClass.name}
                                </td>
                                <td>{manageAllClass.instructorName}</td>
                                <td >{manageAllClass.email}</td>
                                <td className='text-end'>{manageAllClass.price}</td>
                                <td >{manageAllClass.availableSeat}</td>
                                <td className="text-orange-500 font-bold">
                                    {manageAllClass.status}
                                </td>
                                <td >
                                    {manageAllClass.status === 'approved' ? 'approved' :
                                        <button onClick={() => handleApproved(manageAllClass)} className="btn btn-ghost btn-sm bg-green-800 text-white"><FaCheck></FaCheck></button>

                                    }
                                    {manageAllClass.status === 'denied' ? 'denied' :
                                        <button onClick={() => handleDenied(manageAllClass)} className="btn mt-2 btn-ghost btn-sm bg-red-800 text-white"><FaTimes></FaTimes></button>

                                    }

                                </td>
                                <td>
                                    <button onClick={() => handleDelete(manageAllClass)} className="btn bg-red-800 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>


                            </tr>)
                        }
                    </tbody>


                </table>

            </div>
        </div>
    );
};

export default ManageClasses;