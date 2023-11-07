import React from 'react';

const ShowAllBook = ({ allbook }) => {
    const { image,name,category,author } = allbook
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mt-10">
                <figure><img className='h-[500px]' src={image} alt="Shoes" /></figure>
                <div className="card-body w-3/4 mx-auto text-lg">
                    <h2 className="text-center">
                        {name}
                        
                    </h2>
                    <div className="  mt-5">
                        <div className="text-base"><span className='font-Fira text-xl font-'>Category</span>:{category}</div>
                        <div className="text-base"><span className='font-Fira text-xl font-'>Author</span>:{author}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowAllBook;