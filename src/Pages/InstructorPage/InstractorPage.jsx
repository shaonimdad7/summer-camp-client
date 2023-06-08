import React from 'react';
import './InstractorPage.css'
import { useEffect, useState } from "react"
import InsShow from '../InsShow/InsShow';


const InstractorPage = () => {
    const [Showinstructors, setShowInstructors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/instractor')
            .then(res => res.json())
            .then(data => setShowInstructors(data))
    }, [])
    return (

        <div>
            <h1 className='insPageHeader'>Here All Of Our Extraordinary Teachers</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    Showinstructors.map(item => <InsShow
                        key={item._id}
                        item={item}
                    ></InsShow>)
                }
            </div>
        </div>
    );
};

export default InstractorPage;