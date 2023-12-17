import React from 'react';
import Breadcrumb from '../Components/Breadcum';

const Blog = () => {
  return (
    <div>

      {/* ==== page Header ====*/}
      <div className='page-header'>
        <div className='center container'>
          <h1 className='page-header-title'> Our Blogs </h1>
          <div>
            <Breadcrumb></Breadcrumb>
          </div>
        </div>
      </div>
      {/* ================= */}

      <div className='container'>
        
      </div>

    </div>
  );
};

export default Blog;