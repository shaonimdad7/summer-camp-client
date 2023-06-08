import React from 'react';
import { useEffect, useState } from "react"
import ShowClass from '../Home/ShowClass/ShowClass';
import './PopularClasses.css'

const PopularClasses = () => {
    const [classes, setClasess] = useState([])

    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => {
                const popularClasses = data.filter(item => item.category === 'popularClass')
                setClasess(popularClasses)
            })
    }, [])
    return (
        <div className='popular_container'>
            <div >
                <h2 className='text-center header'>Here are some of our Popupar Classes...</h2>
                <hr />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    classes.map(item => <ShowClass
                        key={item._id}
                        item={item}
                    ></ShowClass>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;