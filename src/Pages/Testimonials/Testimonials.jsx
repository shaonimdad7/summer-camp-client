import React from 'react';
import './Testimonilas.css'
import imgside from '../../assets/whatSay.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react"

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='testiHeader'>Here are Some of Our students</h1>
            <div className='mb-28 tesiti_container'>

                <div className='img_side_container'>
                    <div className='background'></div>
                    <div className='img'>
                        <img src={imgside} alt="" />
                    </div>
                </div>

                <div className='slider_section'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}
                            >
                                <div className='silder_container'>
                                    <h3>TESTIMONIALS</h3>
                                    <h1 className=''>What they Say</h1>
                                    <hr />
                                    <h5>{review.details}</h5>
                                    <h4 className='name'>{review.name}</h4>
                                    <p>Student</p>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;