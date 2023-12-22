import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const myCourse = useLoaderData();
    console.log(myCourse[0].course);
    return (
        <div>
            <h1> Course Details </h1>
            <h1> Course Name: {myCourse[0].course} </h1>
            <p> Description : {myCourse[0].desc} </p>
        </div>
    );
};

export default CourseDetails;