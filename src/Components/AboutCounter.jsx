import React, { useEffect }  from 'react';
import CountUp from 'react-countup';


const AboutCounter = () => {

    useEffect(() => {
        // This code will run when the component mounts
        // You can add logic here to trigger the count-up animation
      }, []);



    return (
        <div>
                   <div className='flex justify-center items-center about-counter'>
           <div className='text-white bg-teal-600 px-20 py-10  rounded-2xl	'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 justify-center'>
                <div className="col-span-1 lg:col-span-1">
                    <h1 className='text-5xl font-semibold'>
                    <CountUp start={0} end={1500} duration={2} />  +
                        </h1> 
                    <p> Students </p> </div>
                <div className="col-span-1 lg:col-span-1"><h1 className='text-5xl font-semibold'>30+</h1> <p> Courses </p></div>
                <div className="col-span-1 lg:col-span-1"><h1 className='text-5xl font-semibold'>900+</h1> <p> Finished Seasons </p> </div>
                <div className="col-span-1 lg:col-span-1"><h1 className='text-5xl font-semibold'>100%</h1> <p> Satisfaction Rate </p></div>
            </div>
            </div>
           </div>
        </div>
    );
};

export default AboutCounter;