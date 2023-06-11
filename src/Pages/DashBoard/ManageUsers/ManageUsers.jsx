import React from 'react';
import './ManageUsers.css'
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserCheck } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    const handleMakeInstractor = user => {
        fetch(`http://localhost:5000/users/instructo/${user._id}`, {
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
                        title: `${user.name} is an Instructor Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
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
                fetch(`http://localhost:5000/users/${user._id}`, {
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
                <title>ALL Users</title>
            </Helmet>
            <h1 className='manageUsers_header'>The Number Of Users using the EduCalm is <span className='text-orange-700'>{users.length}</span></h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role Instructor</th>
                            <th>Role Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'instructor' ? 'instructor' :
                                    <button onClick={() => handleMakeInstractor(user)} className='btn bg-orange-200'><FaUserCheck></FaUserCheck></button>

                                }</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className='btn bg-orange-200'><FaUserCheck></FaUserCheck></button>

                                }</td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn bg-red-800 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;