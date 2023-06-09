import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaHome, FaListAlt, FaMale, FaUser, FaSignInAlt } from 'react-icons/fa';
import useClass from '../customhokk/useClass';

const DasBoard = () => {
    const [cart] = useClass();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
                    <li ><NavLink to="/dashboard/myclass"><FaShoppingCart></FaShoppingCart>My Classes
                        <span className='badge badge-secondary -ml-6'>+ {cart?.length || 0}</span>
                    </NavLink>

                    </li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>PayMent</NavLink></li>
                    <li><a>Sidebar Item 2</a></li>
                    <div className='divider'></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/instractor"><FaUser></FaUser> Instructors</NavLink></li>
                    <li><NavLink to="/classes"><FaSignInAlt></FaSignInAlt>Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DasBoard;