import React from 'react';
import './Footer.css';
import logo from '../../../../../assets/logoo.png'

const Footer = () => {
    return (
        <div className='relative'>
            <footer className="footer p-10  text-base-content footer_container">
                <div className='w-[120px]'>
                    <img src={logo} alt="" />
                    <p className='text-2xl text-white -mt-2 ml-4 custom_name'>EduClam</p>
                </div>
                <div className='text-white'>
                    <h2 className="footer_services">Services</h2>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='text-white'>
                    <h2 className="footer_services">More</h2>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='text-white'>
                    <h2 className="footer_services">Legal</h2>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content last_footer">
                <div>
                    <p className='text-white'>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;