import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';

const Socilalogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleSignIn = () => {

        const from = location.state?.from?.pathname || "/";
        googleSignIn()
            .then(result => {
                const loggedInuser = result.user;
                console.log(loggedInuser);
                const saveUser = { name: loggedInuser.displayName, email: loggedInuser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });

                    })
            })
    }
    return (
        <div>
            <div className='divider'></div>
            <div className=' text-center  my-2'>
                <button onClick={handleGoogleSignIn} className='btn btn_login  w-[90%]'> Sign Up With <span className='ml-3'><FaGoogle /> </span></button>
            </div>
        </div>
    );
};

export default Socilalogin;