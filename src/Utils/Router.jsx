
import About from "../components/About/About";
import Home from "../components/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import {createBrowserRouter} from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>,
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;