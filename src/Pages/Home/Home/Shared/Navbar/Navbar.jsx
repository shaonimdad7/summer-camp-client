import React from 'react';
import { Link } from "react-router-dom"
import './Navbar.css'
import img from '../../../../../assets/logoo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../../../Providers/AuthProviders';
import { FaShoppingCart } from 'react-icons/fa';
import useClass from '../../../../../customhokk/useClass';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useClass();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instractor">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li>
            <Link to="/dashboard/myclass">
                <button className='btn gap-1'>
                    <FaShoppingCart ></FaShoppingCart>
                    <div className='badge badge-secondary'>+{cart?.length || 0}</div>
                </button>

            </Link>
        </li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/secret">Secret</Link></li>
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
                    <div className='Containerinfo'>
                        {user && <div className='user_info'>
                            <div className="avatar">
                                <div className="w-28 rounded-full user_img">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <h3 className=' user_name'> {user?.displayName}</h3>
                            <p className=' user_name'> {user?.email}</p>
                            <button className='btn_nav mt-2' onClick={handleLogOut}>Log Out</button>
                        </div>}

                    </div>
                    {/* {
                        user ? <>
                            <li><Link to="/login">Login</Link></li>
                        </> : <>
                            <button onSubmit={handleLogOut} className='btn'>Log Out</button>
                        </>
                    } */}
                </div>
            </div>
        </>
    );
};

export default Navbar;