import axios from 'axios';
import React, { useState } from 'react';

const UserRegistration = () => {
    const [formData, setFormData] = useState({});

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData((val) => ({ ...val, [name]: value }))
    }
console.log(formData);

const submitHandler = (e) =>{
    e.preventDefault();

    if( formData.password != formData.confirmpassword ){
        alert(" Password Doesn't Match ");
    } 
    else {
        axios.get("http://localhost:8080/register", formData).then(
            (res)=>{
                alert(res.data.name);
            }
        )
        .catch((error) => {
            console.error("Error:", error);
        });
    }
}

    return (
        <div className='bg-slate-400'>

            <form className="max-w-sm mx-auto bg-slate-300 p-8" onSubmit={submitHandler}>
                <div className="">
                    <label htmlFor="name" className="block mb-2 text-sm font-semibold text-black">
                        Your Name
                    </label>
                    <input
                        name='name'
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter Name"
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5 my-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-black">
                        Your email
                    </label>
                    <input
                        name='email'
                        type="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-semibold text-black ">
                        Your password
                    </label>
                    <input
                        name='password'
                        type="password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-semibold text-black ">
                        Repeat password
                    </label>
                    <input
                        name='confirmpassword'
                        type="password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        onChange={changeHandler}
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Register new account
                </button>
            </form>
        </div>
    );
};

export default UserRegistration;
