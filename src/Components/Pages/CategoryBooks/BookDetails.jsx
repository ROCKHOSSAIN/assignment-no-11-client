import React, { useState,useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
// import swal from 'sweetalert';

const BookDetails = () => {
    const {user} = useContext(AuthContext)
    console.log(user?.email)
    console.log(user?.displayName)
    const { id } = useParams();
    const details = useLoaderData();
    const showDetailsBook = details?.find((detail) => detail._id === id);
    const { image, category, _id,quantity } = showDetailsBook;
    console.log(showDetailsBook)
    const[bquantity,setbquantity] = useState(quantity)
    const [borrowDate, setBorrowDate] = useState('');
    const handleBorrow = () => {
        document.getElementById('my_modal_5').showModal(); // Show the modal when the button is clicked
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentEmail = user?.email
        const currentName = user?.displayName
        const updatedBQuantity = bquantity > 0 ? bquantity - 1 : 0; 
        const borrowBook = {
            id,
            currentEmail,
            currentName,
            borrowDate,
            quantity: updatedBQuantity,
        }
        const updatequantity={
            quantity
        }
        const existingBook = details.find((detail) => detail._id === id);
        console.log('exist',existingBook)
        if(!existingBook._id){

        fetch('http://localhost:5000/borrowbook',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(borrowBook)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {

                if (bquantity > 0) {
                    setbquantity(bquantity - 1);
                fetch(`http://localhost:5000/allbooks/${id}`,{
                    method:'PATCH',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(updatequantity)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })
                // swal({
                //     title: "Welcome!",
                //     text: "You have saved your borrowed date !",
                //     icon: "success",
                //     button: "Aww yesss!",
                // });
            }
        }

        })
    }else{
        alert('already booked')
    }

    };

    return (
        <div className='py-10'>
            <img className='md:w-[600px] md:h-[700px] mx-auto' src={image} alt='' />
            <p className='text-center text-3xl mt-5'>{category}</p>
            <p className='text-center text-3xl mt-5'>Available:{bquantity}</p>
            <div className='justify-center gap-10 md:gap-64 mt-5 flex mx-auto'>
            <Link>
            <button
                    onClick={() => handleBorrow(_id)}
                    disabled={bquantity === 0}
                    className='bg-success p-4 rounded-lg text-white text-xl'
                    >
                    Borrow
                </button>
                    </Link>
                <Link to={`/bookRead/${_id}`}>
                    <button className='bg-success p-4 rounded-lg text-white text-xl'>Read..</button>
                </Link>
            </div>

            {/* Modal */}
            <dialog id='my_modal_5' className='modal modal-bottom sm:modal-middle'>
                <div className='modal-box'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='date'
                            id='borrowDate'
                            value={borrowDate}
                            onChange={(e) => setBorrowDate(e.target.value)}
                            required
                        />
                        <button type='submit' className='btn'>
                            Submit
                        </button>
                    </form>
                    <div className='modal-action'>
                        <button className='btn' onClick={() => document.getElementById('my_modal_5').close()}>
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BookDetails;
