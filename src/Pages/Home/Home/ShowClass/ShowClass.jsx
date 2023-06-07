import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import './ShowClass.css'

const ShowClass = ({ item }) => {
    const { name, image, importance, price, rating, availableSeat } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
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
                <button className="btn mt-5 btn_showClass">See All The Courses</button>
            </div>
        </div>
    );
};

export default ShowClass;