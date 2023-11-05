import React from 'react';

const Services = () => {
    return (
        <div className='container mx-auto py-10'>
            <h1 className='text-center font-semibold text-[#cc7045] text-3xl font-poppins'>Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 mx-auto'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/0fd49nL/F8-EFC97195-B4071-C7-E481448-B5-1623237019500.jpg" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Silent Reading</h2>
                        <p> One needs silence to read books or to study, our library has special arrangements for the silence zone.</p>
                        <button className='bg-[#BA7B57] text-white rounded-3xl p-3'>Enquire Now</button>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/MMZSK5j/57919-A33-FACDCCF411961-EE48-E-1623237220366.jpg" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Book Rentals</h2>
                        <p>Apart from reading inside the library, we also provide facility to rent and return the books in time</p>
                        <button className='bg-[#BA7B57] text-white rounded-3xl p-3'>Enquire Now</button>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/K2wW9cT/2-F1-D2-F7-E0-DE9507-FE3027-F8-EE6-1623237277191.jpg" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ambience and Infrustructure</h2>
                        <p> Modern infrustructure,air-conditioned, sound-proof, state-of-the-art classrooms that foster learning</p>
                        <button className='bg-[#BA7B57] text-white rounded-3xl p-3'>Enquire Now</button>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/6sWwPmR/9-F667-E93872-C449-B54-B71-FE0-B8-1623237347898.jpg" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Categorized Book Collection</h2>
                        <p> We have excellent collection of books categorized under children, fiction, cookbooks etc for easy access</p>
                        <button className='bg-[#BA7B57] text-white rounded-3xl p-3'>Enquire Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;