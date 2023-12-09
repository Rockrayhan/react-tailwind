import React from 'react';
import Banner from '../Components/Banner';
import Catagories from '../Components/Catagories';
import Types from '../Components/Types';
import Subscribe from '../Components/Subscribe';
import Courses from '../Components/Courses';

const Home = () => {
    return (
    <div>

        <Banner></Banner>
        <Catagories></Catagories>
        <Types></Types>
        <Courses></Courses>
        <Subscribe></Subscribe>

    </div>
    );
};

export default Home;