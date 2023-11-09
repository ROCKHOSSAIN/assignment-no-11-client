import React from 'react';
import Swal from 'sweetalert';
import  { useState } from 'react';

const ShowBorrowBook = ({ data }) => {
    const { image, name, category, borrowDate, returnDate,orginalid,quantity,_id } = data
    console.log(quantity)
const [carts, setcarts] = useState(data)


    const handleReturn=(id)=>{


       fetch('http://localhost:5000/allbooks')
       .then(res=>res.json())
       .then(data=>{
        const returnbook= data?.find(data=>data._id===orginalid)
        
        console.log(returnbook.quantity)
        console.log(returnbook)
        //  const upquantity={
        //         quantity:returnbook.quantity+1 
        //     }
        //     const updatequantity=upquantity.quantity
        //     console.log(updatequantity)
 fetch(`http://localhost:5000/allbooks/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({quantity:returnbook.quantity+1 })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            fetch(`http://localhost:5000/borrowbook/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                        if (Array.isArray(carts)) {
                            const remainingUsers = carts.filter(user => user._id !== _id);
                            setcarts(remainingUsers);
                          }
                      
                    
                })

        })
        Swal({
            title: "Welcome!",
            text: "You have returned your borrowed date !",
            icon: "success",
            button: "Aww yesss!",
            
        });
       })
       
    }
    return (
        <div className='py-20'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-slate-300 py-2 ">
                <img className=" h-[500px] w-[500px]" src={image} />
                <div className="px-6 py-4 bg-red-100 ">
                    <div className="font-bold text-xl mb-2"></div>

                    <p className="text-gray-700 text-xl font-poppins  mb-2"> {name}</p>
                    <p className="text-gray-700 text-base mb-2"> {category}</p>
                </div>
                <div className="px-6 py-4 flex flex-col md:flex-row  gap-4">

                    <div className='flex '>
                        <span className='text-2xl  font-poppins'>Borrow Date:</span>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded block">
                            {borrowDate}
                        </button>
                    </div>
                    <div className='flex'>
                        <span className='text-2xl font-poppins'>Return Date:</span>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded block">
                            {returnDate}
                        </button>
                    </div>

                </div>
                <button 
                    onClick={() => handleReturn(orginalid)}
                    className='text-center mx-auto flex btn btn-success'>Return Book</button>
            </div>
        </div>
    );
};

export default ShowBorrowBook;