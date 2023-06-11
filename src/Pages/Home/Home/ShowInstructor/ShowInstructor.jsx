import React from 'react';
import './ShowInstructor.css'
import { Rating } from '@smastrom/react-rating';

const ShowInstructor = ({ item }) => {
    const { courseName, importance, image, instructorName, experience, price, courseTime, rating, availableSeat } = item;
    return (
        <div className="card class_width w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{instructorName}</h2>
                <hr />
                <p>{importance}</p>
                <p className='font-semibold'>Instructor Of <span className='font-serif'>{courseName}</span>
                </p>
                <div className="card-actions flex items-center justify-between">
                    <div>
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <div className=''>
                        <p className='courseTime_custom'>Course Time: {courseTime}</p>
                    </div>
                </div>
                <button className="btn mt-5 btn_showClass">See All The Courses</button>
            </div>
        </div>
    );
};

export default ShowInstructor;