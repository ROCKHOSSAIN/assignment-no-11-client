import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAllBook from './ShowAllBook';

const AllBooks = () => {
    const loaderAll = useLoaderData()
    
    return (
        <div className='grid grid-cols1 md:grid-cols-4 container mx-auto py-10'>
            {
                loaderAll?.map(allbook=><ShowAllBook key={allbook._id} allbook={allbook}>
                </ShowAllBook>)
            }
        </div>
    );
};

export default AllBooks;