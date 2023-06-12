import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import welcomeImg from '../../../assets/welcome.png'
import welcomeImg1 from '../../../assets/welcome2.png'
import './DasHome.css'

const DashHome = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className='img_div'>
                <img src={welcomeImg1} alt="" />
            </div>
            <div className='flex gap-2 main_info'>
                <div className='info_div'>
                    <h1>Hi <span className=' ml-2 dispalyname'> {user.displayName}</span>! </h1>
                    <p>Welcome to our community!  Whether you are <br /> a  new member or a returning visitor, <br /> we extend a warm greeting <br /> </p>
                    <h2> {user.email} </h2>
                </div>
                <div className='useDr_img mask rounded-full'>
                    <img className='rounded-lg' src={user.photoURL} alt="" />
                </div>
            </div>

        </div>
    );
};

export default DashHome;