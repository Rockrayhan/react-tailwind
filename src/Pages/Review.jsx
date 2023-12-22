import React, {useState } from 'react'
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

const Review = () => {
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();


    const handleSubmit = (e)=> {
        e.preventDefault();
        userInsert();
       
    }
    const handleChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo((val)=>({...val, [name]:value}));
    }


    const userInsert = ()=>{
        axios.post("http://localhost/tailwind-react/api/reviewInsert.php", {data:userInfo}).then(res=>{
            alert(res.data.msg);
            return navigate('/review');
        })
       
    }

console.log(userInfo);



    return (
        <div>
            <h1> Enter Your Review </h1>
        <form onSubmit={handleSubmit} >
            <input type="text" name='name' onChange={handleChange} placeholder='Enter your name' /><br />
            <input type="text" name='role' onChange={handleChange} placeholder='Enter Your Role' /><br />
            <textarea name="comment" id="" cols="30" rows="5" onChange={handleChange}  ></textarea> <br />
            <input type="submit" name='submit' value="SUBMIT" /><br />
        </form>
        </div>
    );
};

export default Review;