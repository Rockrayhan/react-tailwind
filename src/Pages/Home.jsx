import React from 'react';
import Banner from '../Components/Banner';
import Catagories from '../Components/Catagories';
import Types from '../Components/Types';
import Subscribe from '../Components/Subscribe';

const Home = () => {
    return (
    <div>

        <Banner></Banner>
        <Catagories></Catagories>
        <Types></Types>
        <Subscribe></Subscribe>

    </div>
    );
};

export default Home;