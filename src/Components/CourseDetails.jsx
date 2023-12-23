import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Lottie from 'lottie-react';
import walking from '../walking.json';

const CourseDetails = () => {
    const myCourse = useLoaderData();
    console.log(myCourse[0].course);
    return (
        <div className='container'>

            <div className='grid grid-cols-3 gap-6 mt-5'>
                <div className='col-span-2 flex flex-col gap-6'>
                    <h1 className='text-4xl text-orange-900 font-bold'> Course Name: {myCourse[0].course} </h1>

                    <h1 className='text-2xl font-semibold border-b-2 border-red-800 bg-red-300 p-5'> OverView </h1>

                    <div className=' bg-orange-200 rounded-xl py-10 p-5'>
                        <h6 className='text-2xl font-bold my-4'> Course Description :  </h6>
                        <p className='text-gray-600'>{myCourse[0].desc}</p>

                        <div>
                            <h6 className='text-xl font-bold my-4 '> What You’ll get From US </h6>
                            <ul class="list-disc space-y-2 text-gray-600 p-6">
                                <li className="">
                                    Rapid and Efficient Styling with Utility Classes
                                </li>
                                <li className="">
                                    Responsive Design Made Easy
                                </li>
                                <li className="">
                                    Consistent and Predictable Styling
                                </li>
                                <li className="">
                                    Extensive Library of Pre-built Components
                                </li>
                                <li className="">
                                    Streamlined Workflow for Faster Development
                                </li>
                            </ul>

                        </div>

                        <div>
                            <h6 className='text-xl font-bold my-4'>Cirtification</h6>
                            <p className='text-gray-600'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, impedit corporis sunt odio pariatur doloremque debitis, iste, rem accusamus fuga ut dicta voluptatibus officiis non ipsum neque ullam. Quos, quae.
                            </p>
                        </div>
                    </div>

                </div>

<div className='col-span-1 mt-16 '>
    <div className='border-2 rounded-lg p-6 flex flex-col'>
   <div className='bg-yellow-400 rounded-xl'> <Lottie animationData={walking}></Lottie></div>

    <form action="">

        <input type="text" value={myCourse[0].course} disabled  />
    </form>
    <button className='py-4 px-6 mt-6 bg-red-600 hover:bg-orange-500 text-white  font-bold rounded-md'> Enroll Now </button>
    </div>

</div>
            </div>
        </div>
    );
};

export default CourseDetails;