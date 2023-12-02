import React from 'react';

const Catagories = () => {
    return (
        <div className='bg-slate-300 py-10 mt-10'>
            <div className='catagories container text-center '>
                <h1 className='text-3xl font-bold '> Catagories You Want To Learn </h1>
                <p className='font-light mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam unde voluptate, . </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 mt-12 gap-6'>

                    {/* catagories card */}
                    <div className="col-span-1 bg-orange-500 catagories-card  center flex-col rounded-2xl text-white hover:bg-slate-400		 hover:text-black">  
                        <div className='bg-white rounded-full center p-5 w-2/4'>
                            <img className='w-3/5' src="assets/img/icon1.png" alt="" />
                        </div>
                        <h1 className=' text-xl font-semibold'> Data Science & Analytics </h1>
                    </div>

                    <div className="col-span-1 bg-orange-500 catagories-card  center flex-col rounded-2xl">  
                        <div className='bg-white rounded-full center p-5 w-2/4'>
                            <img className='w-3/5' src="assets/img/icon1.png" alt="" />
                        </div>
                        <h1 className='text-white text-xl font-semibold'> Data Science & Analytics </h1>
                    </div>

                    <div className="col-span-1 bg-orange-500 catagories-card  center flex-col rounded-2xl">  
                        <div className='bg-white rounded-full center p-5 w-2/4'>
                            <img className='w-3/5' src="assets/img/icon1.png" alt="" />
                        </div>
                        <h1 className='text-white text-xl font-semibold'> Data Science & Analytics </h1>
                    </div>

                    <div className="col-span-1 bg-orange-500 catagories-card  center flex-col rounded-2xl">  
                        <div className='bg-white rounded-full center p-5 w-2/4'>
                            <img className='w-3/5' src="assets/img/icon1.png" alt="" />
                        </div>
                        <h1 className='text-white text-xl font-semibold'> Data Science & Analytics </h1>
                    </div>

                    <div className="col-span-1 bg-orange-500 catagories-card  center flex-col rounded-2xl">  
                        <div className='bg-white rounded-full center p-5 w-2/4'>
                            <img className='w-3/5' src="assets/img/icon1.png" alt="" />
                        </div>
                        <h1 className='text-white text-xl font-semibold'> Data Science & Analytics </h1>
                    </div>
                    
                    <div className="col-span-1 bg-orange-500 catagories-card  center flex-col rounded-2xl">  
                        <div className='bg-white rounded-full center p-5 w-2/4'>
                            <img className='w-3/5' src="assets/img/icon1.png" alt="" />
                        </div>
                        <h1 className='text-white text-xl font-semibold'> Data Science & Analytics </h1>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Catagories;