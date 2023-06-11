import React from 'react';
import './Login.css'
import { FaRegEyeSlash } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import Socilalogin from '../SocialLogin/Socilalogin';
const Login = () => {

    const { signIn, loading } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'You have logged In successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    }
    return (
        <>
            <Helmet>
                <title>LogIn</title>
            </Helmet>

            <div className=''>
                <div className="hero min-h-screen bg-base-200  ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem <br /> quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogIn} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" />
                                    <p onClick={() => setShow(!show)} className='password_visibility absolute'><small>
                                        {
                                            show ? <span>  <FaRegEye /></span> : <span><FaRegEyeSlash /></span>
                                        }
                                    </small></p>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn_login">Login</button>
                                </div>
                            </form>
                            <p className='mt-2 text-center mb-2'>Are you new Here? <Link className='text-[#f6520a] font-bold' to="/signup">Sing Up</Link> </p>
                            <Socilalogin></Socilalogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;