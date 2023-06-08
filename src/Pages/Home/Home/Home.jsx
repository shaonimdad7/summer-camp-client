import React from 'react';
import './Home.css'
import Banner from './Shared/Banner/Banner';
import WhyUs from '../../../WhyUs/WhyUs';
import PopularClasses from '../PopularClasses/PopularClasses';
import { Helmet } from 'react-helmet-async';
import PopularInstractor from './PopularInstractor/PopularInstractor';
import Testimonials from '../../Testimonials/Testimonials';


const Home = () => {
    <Helmet>
        <title>Home</title>
    </Helmet>
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstractor></PopularInstractor>
            <Testimonials></Testimonials>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;