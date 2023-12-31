import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaHome, FaListAlt, FaMale, FaUser, FaSignInAlt } from 'react-icons/fa';
import useClass from '../customhokk/useClass';
import { AuthContext } from '../Providers/AuthProviders';

const DasBoard = () => {
    const [cart] = useClass();
    const { user } = useContext(AuthContext);
    const [isAdmin, setAdmin] = useState(false);
    const [isInstructor, setInstructor] = useState(false);




    useEffect(() => {
        fetch(`http://localhost:5000/users/admin/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAdmin(data.admin);
            });

    }, [user]);
    useEffect(() => {
        fetch(`http://localhost:5000/users/instructo/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setInstructor(data.admin);
                // setInstructor(data.instructor);
            })

    }, [user]);


    return (
        <div className="drawer lg:drawer-open drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-black">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className='daboardHeader'>
                    <h2 className=''>EduClam</h2>
                    <p>An language Institute</p>
                </div>
                <ul className="menu p-4 w-80 h-full text-base-content">
                    {
                        isAdmin ? (
                            <>
                                <li><NavLink to="/dashboard/dashhome"><FaHome></FaHome>DashHome Home</NavLink></li>
                                <li><NavLink to="/dashboard/manageclasses"><FaWallet></FaWallet> Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers"><FaWallet></FaWallet> Manage Users</NavLink></li>
                            </>
                        ) : isInstructor ? (
                            <>
                                <li><NavLink to="/dashboard/dashhome"><FaHome></FaHome>DashHome Home</NavLink></li>
                                <li><NavLink to="/dashboard/additem"><FaWallet></FaWallet> Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/myclasses"><FaWallet></FaWallet> My Classes</NavLink></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to="/dashboard/dashhome"><FaHome></FaHome>DashHome Home</NavLink></li>
                                <li><NavLink to="/dashboard/enrollclass"><FaHome></FaHome> My Enrolled Courses</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/myclass">
                                        <FaShoppingCart></FaShoppingCart> My Courses
                                        <span className='badge bg-orange-600 p-4 text-[16px] text-white border-0 -ml-6'>+ {cart?.length || 0}</span>
                                    </NavLink>
                                </li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment</NavLink></li>
                            </>
                        )
                    }

                    <div className='divider'></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/instractor"><FaUser></FaUser> Instructors</NavLink></li>
                    <li><NavLink to="/classes"><FaSignInAlt></FaSignInAlt> Classes</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DasBoard;