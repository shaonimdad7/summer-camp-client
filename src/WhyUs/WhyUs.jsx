import React from 'react';
import './WhyUs.css'
import aboutImg from '../assets/about.png'
import { FaQuoteLeft } from 'react-icons/fa';

const WhyUs = () => {
    return (
        <div className='box_shadow'>
            <div className=' why_contaier max-w-6xl mx-auto mb-20'>
                <div className='img_container'>
                    <img src={aboutImg} alt="" />
                </div>
                <div className='about_detalis_container'>
                    <h2 className='text-white'>Why Choose Us....</h2>
                    <div className='single_part'>
                        <div className='flex gap-4'>
                            <span className='mt-3 react_icon'><FaQuoteLeft /></span>
                            <h3>Online Classes </h3>
                        </div>
                        <p>Sample text. Click to select the text box. Click again or <br /> double click to start editing the text.</p>
                    </div>
                    <div className='single_part'>
                        <div className='flex gap-4'>
                            <span className='mt-3 react_icon'><FaQuoteLeft /></span>
                            <h3>Best Instructors </h3>
                        </div>
                        <p>Sample text. Click to select the text box. Click again or <br /> double click to start editing the text.

                        </p>
                    </div>
                    <div className='single_part'>
                        <div className='flex gap-4'>
                            <span className='mt-3 react_icon'><FaQuoteLeft /></span>
                            <h3>Advanced Skills </h3>
                        </div>
                        <p>Sample text. Click to select the text box. Click again or <br /> br double click to start editing the text.

                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyUs;