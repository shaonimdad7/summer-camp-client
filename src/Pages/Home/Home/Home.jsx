import React from 'react';
import './Home.css'
import Banner from './Shared/Banner/Banner';
import WhyUs from '../../../WhyUs/WhyUs';
import PopularClasses from '../PopularClasses/PopularClasses';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    <Helmet>
        <title>Home</title>
    </Helmet>
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;