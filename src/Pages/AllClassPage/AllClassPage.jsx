import React from 'react';
import Marquee from "react-fast-marquee";
import './AllClassPage.css'
import { useEffect, useState } from "react"
import { Helmet } from 'react-helmet-async';
import AllClassesShow from '../AllClassesShow/AllClassesShow';

const AllClassPage = () => {
    const [allClasses, setAllClasess] = useState([])

    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => setAllClasess(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Classes</title>
            </Helmet>
            <div className='marquee_container'>
                <Marquee>
                    Learning a new language holds immense significance in todays interconnected world. It not only expands ones cultural horizons but also provides numerous cognitive, social, and professional benefits. Linguistic diversity allows individuals to engage with different cultures, fostering understanding, empathy, and global citizenship.
                </Marquee>
            </div>
            <h2 className='header text-center mt-24'>Choose Your Language
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    allClasses.map(singleClass => <AllClassesShow
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></AllClassesShow>)
                }
            </div>

        </div>
    );
};

export default AllClassPage;