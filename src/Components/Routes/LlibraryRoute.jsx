import {createBrowserRouter} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks";
const LlibraryRoute = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: "/booktype/:booktype", 
          element:<CategoryBooks></CategoryBooks>
        }
      ]
    },
  ]);
export default LlibraryRoute;