import React from 'react';
import Marquee from "react-fast-marquee";
import './Banner.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../../assets/home-bg-1-1.jpg'
import img2 from '../../../../../assets/home-bg-4-1.jpg'
import img3 from '../../../../../assets/home-bg-6.jpg'
import img4 from '../../../../../assets/home-bg-7.jpg'
const Banner = () => {
    return (
        <div className='banner_sections'>
            <Carousel>
                <div className='relative '>
                    <img src={img1} />
                    <div className='detials_container_banner text-start text-white'>
                        <p>Teaching Turning <br />
                            Today’s Learners Into <br />
                            Tomorrow’s Leaders.....
                        </p>
                        <button className='btn banner_btn '>Sign Up Now</button>
                    </div>
                </div>
                <div>
                    <img src={img2} />
                    <div className='detials_container_banner text-start text-white'>
                        <p>
                            To have another <br />
                            language is to possess <br />
                            a second soul.....
                        </p>
                        <button className='btn banner_btn '>Sign Up Now</button>
                    </div>
                </div>
                <div>
                    <img src={img3} />
                    <div className='detials_container_banner text-start text-white'>
                        <p>
                            Putting Children First. <br />
                            Preparing Children For <br />
                            Success In Life.....
                        </p>
                        <button className='btn banner_btn '>Sign Up Now</button>
                    </div>
                </div>
                <div>
                    <img src={img4} />
                    <div className='detials_container_banner text-start text-white'>
                        <p>Every student matters, <br />
                            every moment counts <br />
                            They are Future .....
                        </p>
                        <button className='btn banner_btn '>Sign Up Now</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;



