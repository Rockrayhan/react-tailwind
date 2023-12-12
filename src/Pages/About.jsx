import React from 'react';
import AboutBanner from '../Components/About/AboutBanner';
import TopInstructors from '../Components/About/TopInstructors';

const About = () => {
  return (
    <div className='bg-slate-100'>
        {/* ==== page Header ====*/}
        <div className='page-header'>
          <div className='center container'>
            <h1 className='page-header-title'> About page </h1>
          </div>
        </div>
        {/* ================= */}
        <div className='container'>

        <AboutBanner></AboutBanner>
        <TopInstructors></TopInstructors>
        </div>
    </div>
  );
};

export default About;