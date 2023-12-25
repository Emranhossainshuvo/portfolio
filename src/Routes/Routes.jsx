import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Resume from "../Pages/Resume/Resume";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/', 
            element: <Home></Home>
        }, 
        {
          path: '/about', 
          element: <About></About>
        }, 
        {
          path: '/projects', 
          element: <Projects></Projects>
        }, 
        {
          path: '/resume', 
          element: <Resume></Resume>
        }
      ]
    },
  ]);