import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import {useContext} from 'react'
import ShowBorrowBook from "./ShowBorrowBook";
const BorrowBook = () => {
    const {user} = useContext(AuthContext)
    const loadedBorrow = useLoaderData();
    const email = user?.email
    console.log(loadedBorrow)
    const filteremail = loadedBorrow?.filter((filteremail)=>filteremail.currentEmail===email);
    console.log(filteremail)
    // const {currentName} = filteremail
    // console.log(currentName)
    
  
    return (
        <div>
            
        {
            filteremail?.map((data)=><ShowBorrowBook key={data._id} data={data}></ShowBorrowBook>)
        }

        </div>
    );
};

export default BorrowBook;