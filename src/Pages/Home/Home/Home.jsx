import React from 'react';
import './Home.css'
import Banner from './Shared/Banner/Banner';
import WhyUs from '../../../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;