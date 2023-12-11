import React from 'react';
import Banner from '../Components/Banner';
import Catagories from '../Components/Catagories';
import Types from '../Components/Types';
import Subscribe from '../Components/Subscribe';
import Courses from '../Components/Courses';
import Testimonial from '../Components/Testimonial';

const Home = () => {
    return (
    <div>

        <Banner></Banner>
        <Catagories></Catagories>
        <Types></Types>
        <Courses></Courses>
        <Testimonial></Testimonial>
        <Subscribe></Subscribe>

    </div>
    );
};

export default Home;