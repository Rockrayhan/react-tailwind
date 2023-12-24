import React, { useEffect, useState } from "react";

const Courses = () => {
  const [course, setcourse] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/coursesall')
        .then(res => res.json())
        .then(data => setcourse(data)) ;
}, []);
  return (
    <div className="bg-slate-200 py-16 mt-10">

      <div className="catagories container text-center">
        <h1 className="text-4xl font-bold"> Out Popular Courses </h1>
        <p className="text-gray-600 mt-4">
          Discover Your Perfect Program In Our Courses.
        </p>
        <div className="center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-10">
            {/* card */}
            
            {
              course.slice(0,4).map( item => <div>
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                              <a href="#">
                                <img
                                  class="p-8 rounded-full w-4/6"
                                  src="https://cdn5.vectorstock.com/i/1000x1000/58/94/online-education-or-web-course-vector-25055894.jpg"
                                  alt="product image"
                                />
                              </a>
                              <div class="px-5 pb-5">
                                <a href="#">
                                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {item.course}
                                  </h5>
                                </a>
                                <div class="flex items-center justify-between">
                                  <span class="text-3xl font-bold text-gray-900 dark:text-white">
                                   {item.price}
                                  </span>
                                  <a
                                    href="#"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  >
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                </div>)
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
