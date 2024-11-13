
import About from "../components/About/About";
import Home from "../components/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import {createBrowserRouter} from "react-router-dom";

  
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
        }
      ]
    },
  ]);

  export default router;