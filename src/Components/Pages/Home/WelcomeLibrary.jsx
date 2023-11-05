import React from 'react';
import { TbBook2 } from "react-icons/tb";
import { TiGift } from "react-icons/ti";
import { LuFileAudio2 } from "react-icons/lu";
import { MdContentCopy } from "react-icons/md";
const WelcomeLibrary = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold font-poppins'>Welcome To The BookKeepers Hub</h1>
                <p className='mt-3'>Welcome To The Most Popular Library Today</p>
                <TbBook2 className=' mx-auto text-2xl'></TbBook2>
                <div>
                    <div className='flex flex-col md:flex-row mx-auto justify-center gap-20'>
                       
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                               <TiGift className='text-5xl'></TiGift>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">EBOOKS!</h2>
                                <p> The digital library offers a vast collection of immersive eBooks for all reading enthusiasts to enhance knowledge.</p>
                                <h2>Read More</h2>
                                <hr className='w-1/6 border-black'/>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                               <LuFileAudio2 className='text-5xl'></LuFileAudio2>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">AUDIOBOOKS!</h2>
                                <p> Audiobooks bring stories to life, making literature accessible for everyone, anytime, anywhere</p>
                                <h2>Read More</h2>
                                <hr className='w-1/6 border-black'/>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                               <MdContentCopy className='text-5xl'></MdContentCopy>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">MAGAZINES!</h2>
                                <p> Explore diverse topics through vibrant magazines, providing insights and entertainment for curious minds.</p>
                                <h2>Read More</h2>
                                <hr className='w-1/6 border-black'/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeLibrary;