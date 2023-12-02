import React from 'react';

const Catagories = () => {
    return (
        <div className='bg-slate-300 h-screen'>
            <div className='catagories container text-center'>
                <h1 className='text-3xl font-bold'> Catagories You Want To Learn </h1>
                <p className='font-light'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam unde voluptate, . </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 '>

                    <div className="col-span-1 bg-orange-500 catagories-card">  
                        <div className='bg-white rounded-3xl'>
                            <img src="assets/img/icon1.png" alt="" />
                        </div>
                        <h1 className='text-white'> Data Science & Analytics </h1>
                    </div>

                    <div className="col-span-1"> </div>
                    <div className="col-span-1"> </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-1"></div>
                    <div className="col-span-1"></div>
                </div>

            </div>
        </div>
    );
};

export default Catagories;