import React from 'react';
import Breadcrumb from '../Components/Breadcum';


const Blog = () => {
  return (
    <div>
      {/* ==== page Header ====*/}
      <div className='page-header'>
        <div className='center container flex-col gap-7'>
          <h1 className='page-header-title'> Our Blogs </h1>
          <div><Breadcrumb></Breadcrumb></div>
        </div>
      </div>
      {/* ================= */}

      <div className='container text-center'>
      <p className='mt-6 text-3xl text-orange-600 font-semibold font-serif'>
          Exciting blogs are on the way! Stay tuned for valuable content.
        </p>
        <div className='mt-10'>
          <img
            src='https://img.freepik.com/free-vector/flat-coming-soon-background-with-megaphone_1017-33737.jpg'
            alt='Blogs Coming Soon'
            className='mx-auto w-2/6 rounded-2xl'
          />
        </div>

      </div>
    </div>
  );
};

export default Blog;
