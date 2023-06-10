import React from 'react';
import './MyClassInstra.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';

const MyClassInstra = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClass] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/class/email/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyClass(data));
    }, [user]);
    return (

        <div>
            <div className='insta_container'>
                <h2 className='text-2xl mb-2'> Hi there! You have added <span className='text-orange-700'>{myClasses.length} </span>classes</h2>
                <span className='text-[18px]'>Soon We will let you know about your Classes</span>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-[17px] text-orange-700 bg-base-200'>
                            <th>#</th>
                            <th>Courses Image</th>
                            <th>Courses Name</th>
                            <th>Price</th>
                            <th>Availabe Seats</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((myClass, index) => <tr key={myClass._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myClass.name}
                                </td>
                                <td>{myClass.price}</td>
                                <td className='text-end'>{myClass.availableSeat}</td>
                                <td>
                                    <button className="btn btn-sm bg-orange-200">{myClass.status}</button>
                                </td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClassInstra;