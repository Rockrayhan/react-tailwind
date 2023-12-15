import React from 'react';
import AboutBanner from '../Components/About/AboutBanner';
import TopInstructors from '../Components/About/TopInstructors';
import AboutCounter from '../Components/aboutCounter';
import Testimonial from '../Components/Testimonial';

const About = () => {
  return (
    <div className=''>
        {/* ==== page Header ====*/}
        <div className='page-header'>
          <div className='center container'>
            <h1 className='page-header-title'> About US </h1>
          </div>
        </div>
        {/* ================= */}
        <div className='container'>

        <AboutBanner></AboutBanner>
        <TopInstructors></TopInstructors>
<div className='mt-32'><AboutCounter></AboutCounter></div>
        <Testimonial></Testimonial>

        </div>
    </div>
  );
};

export default About;