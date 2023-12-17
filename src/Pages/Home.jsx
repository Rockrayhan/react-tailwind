import React from 'react';
import Banner from '../Components/Banner';
import Catagories from '../Components/Catagories';
import Types from '../Components/Types';
import Subscribe from '../Components/Subscribe';
import Courses from '../Components/Courses';
import Testimonial from '../Components/Testimonial';
import AboutCounter from '../Components/aboutCounter';
import ChatApp from '../Components/ChatApp';

const Home = () => {
    return (
    <div>

        <Banner></Banner>
        <AboutCounter></AboutCounter>
        <Catagories></Catagories>
        <Types></Types>
        <Courses></Courses>
        <Testimonial></Testimonial>
        <Subscribe></Subscribe>
        <ChatApp></ChatApp>

    </div>
    );
};

export default Home;