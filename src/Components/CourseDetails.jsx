import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const myCourse = useLoaderData();
    console.log(myCourse[0].product);
    return (
        <div>
            <h1> Course Details </h1>
            <h1> Course Name: {myCourse[0].product} </h1>
        </div>
    );
};

export default CourseDetails;