import React, { useState, useEffect } from 'react';
import Breadcrumb from '../Components/Breadcum';
import { useLoaderData } from "react-router-dom";
import Course from "../Components/Course";
import Cart from '../Components/Cart';
const AllCourses = () => {

  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([])

  const fetchedData = useLoaderData();
  useEffect(() => {
    setCourses(fetchedData);
  }, []);
  // console.log(courses);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }
  
  const handleRemoveFromCart = (productId) => {
    // Implement the logic to remove the product from the cart
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);


    
  };




  return (
    <div className="bg-slate-100">
      {/* ==== page Header ====*/}
      <div className='page-header'>
        <div className='center container flex-col gap-7'>
          <h1 className='page-header-title'> All Courses </h1>
        <div><Breadcrumb></Breadcrumb></div>
        </div>
      </div>
      {/* ================= */}

        <h1 className="text-3xl text-center my-5"> Here are All {courses.length} Courses </h1>

        <div className='flex container gap-4'>

       <div className='flex gap-5 container'>
        
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  container my-16">



{
  courses.map(data => <Course
  key={data.id}
  data={data}
  handleAddToCart={handleAddToCart}

  >
  </Course> )
}

</div>

<Cart cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
></Cart>

       </div>
      </div>

    </div>
  );
};

export default AllCourses;
