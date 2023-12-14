import React from "react";

const AllCourses = () => {
  return (
    <div className="bg-slate-100">
      {/* ==== page Header ====*/}
      <div className="page-header">
        <div className="center container">
          <h1 className="page-header-title"> All Courses </h1>
        </div>
      </div>
      {/* ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  container my-16">
        {/* each course card */}
        <div className="col-span-1">
          <div className="p-5 flex flex-col gap-5 rounded-md border border-sky-950">
            <img src="https://www.creativeitinstitute.com/images/course/course_1662724358.jpg" alt="" />
            <h1 className="text-2xl font-semibold"> Digital Marketing </h1>
            <h6 className="text-gray-600"> Walter White </h6>
            <div className="flex gap-4">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p>20 Students</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
                <p> 5 courses</p>
              </div>
            </div>
          </div>
        </div>
        {/* each course card */}
        <div className="col-span-1">
          <div className="p-5 flex flex-col gap-5 rounded-md border border-sky-950">
            <img src="https://ict-trainings.com/storage/app/public/course/banner_5c88b115b33e8.jpg" alt="" />
            <h1 className="text-2xl font-semibold"> Block Chain </h1>
            <h6 className="text-gray-600"> Billy Butcher </h6>
            <div className="flex gap-4">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p>20 Students</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
                <p> 5 courses</p>
              </div>
            </div>
          </div>
        </div>
        {/* each course card */}
        <div className="col-span-1 ">
          <div className="p-5 flex flex-col gap-5 rounded-md border border-sky-950">
            <img src="https://elysiumacademy.org/wp-content/uploads/2018/12/aws.jpg" alt="" />
            <h1 className="text-2xl font-semibold"> Amazon Web Services </h1>
            <h6 className="text-gray-600"> Jessy Pinkman </h6>
            <div className="flex gap-4">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p>20 Students</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
                <p> 5 courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
