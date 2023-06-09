import React from 'react';
import './SignUp.css'
import { FaRegEyeSlash } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { createUser, loading } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }
    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200  ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem <br /> quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
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
                                <p onClick={() => setShow(!show)} className='show_hide_password absolute'><small>
                                    {
                                        show ? <span>  <FaRegEye /></span> : <span><FaRegEyeSlash /></span>
                                    }
                                </small></p>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='mt-4 text-center mb-2'> Already Have An Account? <Link className='text-black font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;