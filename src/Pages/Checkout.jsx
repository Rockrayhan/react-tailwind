import axios from 'axios';
import React, { useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    

    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate();
    const location = useLocation();
    const { cart } = navigate.state || {};

    console.log(cart);


    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("submitted");
        userInsert();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo(val => ({ ...val, [name]: value }));
    }

    const userInsert = () => {
        axios.post("http://localhost/wdpf55_react/react-app-3/API/userInsert.php", 
        { data:userInfo }).then(res => {
            // alert(" Something returned ") ;
            alert(res.data.msg);
            navigate("/checkout");
        })
    }

    console.log(userInfo);

    return (
        <div>
            <h1> Confirm Your Order !! </h1>

            <form action="">
                
            </form>
        </div>
    );
};

export default Checkout;