import React from 'react';
import { Link } from "react-router-dom"
import './Navbar.css'
import img from '../../../../../assets/logoo.png'

const Navbar = () => {
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
    </>
    return (
        <>
            <div className="navbar text-white fixed_header max-w-screen-xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className=" text-xl">
                        <div className='w-[100px] img_container'>
                            <img src={img} alt="" />
                        </div>
                        <p className='custom_name ml-3 text-white'>EduCalm</p>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;