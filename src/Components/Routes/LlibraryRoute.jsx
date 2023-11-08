import {createBrowserRouter} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddBooks from "../Pages/AddBooks/AddBooks";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../Pages/CategoryBooks/BookDetails";
import BookRead from "../Pages/CategoryBooks/BookRead";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import AllBooks from "../Pages/AllBooks/allBooks";
import BorrowBook from "../Pages/BorrowBook/BorrowBook";
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
          loader:()=>fetch('http://localhost:5000/allbooks'),
          element:<PrivateRoute> <CategoryBooks></CategoryBooks> </PrivateRoute> 
        },
        {
          path: "/bookDetails/:id", 
          loader:()=>fetch('http://localhost:5000/allbooks'),
          element:<PrivateRoute> <BookDetails></BookDetails> </PrivateRoute> 
        },
        {
          path: "/bookRead/:id", 
          loader:()=>fetch('http://localhost:5000/allbooks'),
          element:<PrivateRoute> <BookRead></BookRead> </PrivateRoute> 
        },
        {
          path: "/allBooks", 
          loader:()=>fetch('http://localhost:5000/allbooks'),
          element:<PrivateRoute> <AllBooks></AllBooks> </PrivateRoute> 
        },
        {
          path: "/borrowedBooks", 
          loader:()=>fetch('http://localhost:5000/borrowbook'),
          element:<PrivateRoute> <BorrowBook></BorrowBook> </PrivateRoute> 
        },
        {
          path: "/updatebook/:id", 
          loader:({params})=>fetch(`http://localhost:5000/allbooks/${params.id}`),
          element:<PrivateRoute> <UpdateBook></UpdateBook> </PrivateRoute> 
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