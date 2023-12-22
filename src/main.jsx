import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from './Pages/Contact.jsx';
import AllCourses from './Pages/AllCourses.jsx';
import UserRagistration from './Pages/userRagistration.jsx';
import Course from './Components/Course.jsx';
import CourseDetails from './Components/CourseDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"blog",
        element: <Blog/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:"courses",
        element: <AllCourses/>,
        loader: () =>fetch('http://localhost:8080/coursesall')
      },
      // {
      //   path:"course",
      //   element: <Course/>
      // },
      {
        path:"course/:courseId",
        element: <CourseDetails/>,
        loader: ({params}) => fetch(`http://localhost:8080/course/${params.courseId}`)
      },
      {
        path:"userregister",
        element: <UserRagistration/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
