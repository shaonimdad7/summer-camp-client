import React from 'react';
import { Rating } from '@smastrom/react-rating'


const AllClassesShow = ({ singleClass }) => {
    const { name, image, importance, price, rating, availableSeat, instructorName } = singleClass;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <hr />
                    <h3 className='font-semibold text-orange-800'>InsTructor Name: <span className='text-black'>{instructorName}</span></h3>
                    <p>{importance}</p>
                    <div className="card-actions flex items-center justify-between">
                        <div>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                        <div className=''>
                            <p className=' price_custom'>$ {price}</p>
                        </div>
                    </div>
                    <h3 className='font-semibold text-orange-800'>Available Seats: <span className='text-black'>{availableSeat}</span></h3>
                    <button className="btn mt-5 btn_showClass">See All The Courses</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassesShow;