import React from 'react';
import './ManageClasses.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageClasses = () => {
    const [manageAllClasses, setManageAllClasess] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => setManageAllClasess(data))
    }, [])

    return (
        <div>
            <h2>all my classes {manageAllClasses.length}</h2>
            <div className="overflow-x-auto my-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-[16px] text-orange-700 bg-base-200'>
                            <th>#</th>
                            <th>Courses Image</th>
                            <th>Courses <br /> <span className='mt-2'>Name</span></th>
                            <th>Instractor <br /> Name</th>
                            <th>Instractor <br /> Email</th>
                            <th>Price</th>
                            <th>Availabe <br /> Seats</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageAllClasses.map((manageAllClass, index) => <tr key={manageAllClass._id}>
                                <td>
                                    {index + 1}
                                </td>
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
                                <td>
                                    <button className="btn btn-sm bg-orange-200">{manageAllClass.status}</button>
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