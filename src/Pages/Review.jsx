import React, {useState } from 'react'
import axios from 'axios';

const Review = () => {
    const [userInfo, setUserInfo] = useState({});



    const handleSubmit = (e)=> {
        // e.preventDefault();
        userInsert();
       
    }
    const handleChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo((val)=>({...val, [name]:value}));
    }


    const userInsert = ()=>{
        // axios.post("http://localhost/tailwind-react/api/reviewInsert.php", {data:userInfo}).then(res=>{ 
        axios.post("http://localhost/wdpf55_react/react-tailwind/api/reviewInsert.php", {data:userInfo}).then(res=>{
            alert(res.data.msg);
            // return navigate('/review');
        })
       
    }

console.log(userInfo);



    return (
        <div className='bg-slate-400'>
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Leave Your Review</h1>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-slate-300 p-8 rounded-lg">
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-black">
                    Your Name
                </label>
                <input
                    name='name'
                    type="text"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter Name"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="role" className="block mb-2 text-sm font-semibold text-black ">
                    Your Role
                </label>
                <input
                    name='role'
                    type="text"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter Your Role"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="comment" className="block mb-2 text-sm font-semibold text-black">
                    Your Comment
                </label>
                <textarea
                    name="comment"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-20 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter Your Comment"
                    onChange={handleChange}
                ></textarea>
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    </div>
    
    );
};

export default Review;