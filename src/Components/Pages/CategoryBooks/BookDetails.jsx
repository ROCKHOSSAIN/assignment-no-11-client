import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const {id} = useParams();
    const details = useLoaderData();
    const showDetailsBook = details.find(detail=>detail._id===id)
    const{image,category,_id} = showDetailsBook
    console.log(showDetailsBook)
    return (
        <div className='py-10'>
            <img className='md:w-[600px] md:h-[700px] mx-auto' src={image} alt="" />
            <p className='text-center text-3xl mt-5'>{category}</p>
            <div className='justify-center gap-64 mt-5 flex mx-auto'>
                <button className='bg-success p-4 rounded-lg text-white text-xl'>Borrow</button>
                <Link to={`/bookRead/${_id}`}>
                
                <button className='bg-success p-4 rounded-lg text-white text-xl'>Read..</button>
                </Link>
            </div>
        </div>
    );
};

export default BookDetails;