import React from 'react';
import './PopularInstructor.css'
import { useEffect, useState } from "react"
import ShowInstructor from '../ShowInstructor/ShowInstructor';

const PopularInstractor = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/instractor')
            .then(res => res.json())
            .then(data => {
                const popularInstructor = data.filter(instructor => instructor.category === 'popularInstructor')
                setInstructors(popularInstructor)
            })
    }, [])
    return (
        <div className='popular_container'>
            <div className='popular_ins_container'>
                <h2 className='text-center header'>Our Awesome Instructor</h2>
                <p className='text-center -mt-8 text-2xl mb-4'>
                    Rapid learning rapid authoring tools web based training informal <br /> learning virtual classroom, roi instructional designer big data
                </p>
                <hr />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    instructors.map(item => <ShowInstructor
                        key={item._id}
                        item={item}
                    ></ShowInstructor>)
                }
            </div>
        </div>
    );
};

export default PopularInstractor;