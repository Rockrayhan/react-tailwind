import React from 'react';
import AboutBanner from '../Components/About/AboutBanner';
import TopInstructors from '../Components/About/TopInstructors';
import AboutCounter from '../Components/aboutCounter';
import Testimonial from '../Components/Testimonial';
import Breadcrumb from '../Components/Breadcum';

const About = () => {
  return (
    <div className=''>
      {/* ==== page Header ====*/}
      <div className='page-header'>
        <div className='center container flex-col gap-7'>
          <h1 className='page-header-title'> About Us </h1>
        <div><Breadcrumb></Breadcrumb></div>
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