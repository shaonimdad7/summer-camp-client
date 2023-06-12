import React from 'react';
import './SignUp.css'
import { FaRegEyeSlash } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import Socilalogin from '../SocialLogin/Socilalogin';

const SignUp = () => {
    const [show, setShow] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password, data.name)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser)

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // load user data 
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'middle',
                                        icon: 'success',
                                        title: 'You have Sign Up successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error));
            })
    };

    //  shaon@imdad.com
    // sam@brown.com
    // nithi@nithi.com
    // victoria@sin.com
    //  12A@as55
    // status pending
    // 543354335433shaon
    return (
        <>
            <Helmet>
                <title>SignUp</title>
            </Helmet>
            <div className=''>
                <div className="hero min-h-screen bg-base-200  ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem <br /> quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600 mt-2'>Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="photo" name='photo' {...register("photoURL", { required: true })} placeholder="Photo Url" className="input input-bordered" />
                                    {errors.photoURL && <span className='text-red-600 mt-2'>Photo is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-600 mt-2'>Email is required</span>}
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"} name='password' {...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$*])/
                                    })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className='text-red-600 mt-2'>Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-red-600 mt-2'>Password should be at least 6 characters</span>}
                                    {errors.password?.type === 'maxLength' && <span className='text-red-600 mt-2'>Password should be less than 20 characters</span>}
                                    {errors.password?.type === 'pattern' && <span className='text-red-600 mt-2'> one capital letter and one special character</span>}

                                    <p onClick={() => setShow(!show)} className='password_visibility absolute'><small>
                                        {
                                            show ? <span>  <FaRegEye /></span> : <span><FaRegEyeSlash /></span>
                                        }
                                    </small></p>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn_login ">Sign Up</button>
                                </div>
                            </form>
                            <p className='mt-2 text-center mb-2'> Already Have An Account? <Link className='text-[#f6520a] text-[18px] font-bold' to="/login">Login</Link> </p>
                            <Socilalogin></Socilalogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;