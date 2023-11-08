import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import {useContext} from 'react'
const BorrowBook = () => {
    const {user} = useContext(AuthContext)
    const loadedBorrow = useLoaderData();
    
    console.log(loadedBorrow)
    // useEffect(()=>{
    //     console.log(user?.email)
        // console.log(loadedBorrow?.currentEmail)
    // },[])
    console.log(loadedBorrow[0]?.currentEmail)
    console.log(user?.email)
    return (
        <div>
            


        </div>
    );
};

export default BorrowBook;