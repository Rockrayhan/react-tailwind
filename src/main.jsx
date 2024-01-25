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
import CourseDetails from './Components/CourseDetails.jsx';
import Review from './Pages/Review.jsx';
import Checkout from './Pages/Checkout.jsx';
import Courses from './Components/Courses.jsx';


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
        path:"/courses",
        element: <AllCourses/>,
        loader: () =>fetch('./fakedata.json')
      },
      {
        path:"/topCourses",
        element: <Courses/>,
        loader: () =>fetch('./fakedata.json')
      },
      // {
      //   path:"course",
      //   element: <Course/>
      // },
      {
        path:"review",
        element: <Review/>
      },
      {
        path:"checkout",
        element: <Checkout/>
      },
      {
        path:"/course/:id",
        element: <CourseDetails/>,
        loader: () => fetch(`./fakedata.json`)
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
