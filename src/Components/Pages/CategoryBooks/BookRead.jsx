import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookRead = () => {
    const {id} = useParams();
    const details = useLoaderData();
    const showDetailsBook = details.find(detail=>detail._id===id)
    const{description} = showDetailsBook
    console.log(showDetailsBook)
    return (
        <div className='md:w-1/3 mx-auto py-10'>
            <p className='font-bold text-2xl'>Book Description:</p>
            <p>{description}</p>
        </div>
    );
};

export default BookRead;