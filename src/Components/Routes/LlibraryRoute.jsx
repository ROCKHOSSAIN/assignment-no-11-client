import {createBrowserRouter} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddBooks from "../Pages/AddBooks/AddBooks";
import PrivateRoute from "./PrivateRoute";
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
          element:<PrivateRoute> <CategoryBooks></CategoryBooks> </PrivateRoute> 
        },
        {
          path: "login", 
          element:<Login></Login>
        },
        {
          path: "register", 
          element:<Register></Register>
        },
        {
          path: "addBooks", 
          element:<PrivateRoute> <AddBooks></AddBooks> </PrivateRoute>
        },
      ]
    },
  ]);
export default LlibraryRoute;