import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import AddBooks from "../Pages/AddBooks/AddBooks";
import AllBooks from "../Pages/AllBooks/allBooks";
import BorrowBook from "../Pages/BorrowBook/BorrowBook";
import BookDetails from "../Pages/CategoryBooks/BookDetails";
import BookRead from "../Pages/CategoryBooks/BookRead";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
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
          loader:()=>fetch('https://assignment-no-11-server-snowy.vercel.app/allbooks'),
          element:<PrivateRoute> <CategoryBooks></CategoryBooks> </PrivateRoute> 
        },
        {
          path: "/bookDetails/:id", 
          loader:()=>fetch('https://assignment-no-11-server-snowy.vercel.app/allbooks'),
          element:<PrivateRoute> <BookDetails></BookDetails> </PrivateRoute> 
        },
        {
          path: "/bookRead/:id", 
          loader:()=>fetch('https://assignment-no-11-server-snowy.vercel.app/allbooks'),
          element:<PrivateRoute> <BookRead></BookRead> </PrivateRoute> 
        },
        {
          path: "/allBooks", 
          loader:()=>fetch('https://assignment-no-11-server-snowy.vercel.app/allbooks'),
          element:<PrivateRoute> <AllBooks></AllBooks> </PrivateRoute> 
        },
        {
          path: "/borrowedBooks", 
          loader:()=>fetch('https://assignment-no-11-server-snowy.vercel.app/borrowbook'),
          element:<PrivateRoute> <BorrowBook></BorrowBook> </PrivateRoute> 
        },
        {
          path: "/updatebook/:id", 
          loader:({params})=>fetch(`https://assignment-no-11-server-snowy.vercel.app/allbooks/${params.id}`),
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
          path: "contact", 
          element:<Contact></Contact>
        },
        {
          path: "addBooks", 
          element:<PrivateRoute> <AddBooks></AddBooks> </PrivateRoute>
        },
      ]
    },
  ]);
export default LlibraryRoute;