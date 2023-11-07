import {Link} from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";


const booktype = () => {
    const BooksCategory = [
        {   index:1,   
            booktype: "Novel",
            imageUrl: "https://i.ibb.co/xgGt6Sv/attachment-90784069.jpg"
        },
        {   index:2,
            booktype: "Mystery",
            imageUrl: "https://i.ibb.co/YLB4s19/mt-1519-home-img-9.jpg"
        },
        {   index:3,
            booktype: "Sci-Fi",
            imageUrl: "https://i.ibb.co/7QCzHw8/6a0befa2-e1c4-498d-8979-6e9f890aa4dd.jpg"
        },
        {   index:4,
            booktype: "History",
            imageUrl: "https://i.ibb.co/k93zZn2/canva-brown-scrapbook-clasic-project-history-cover-a4-document-n-LJ7-SF0-X-k.jpg"
        },
    ]
    return (
        <div className='py-20 container mx-auto'>
            <h1 className='text-center text-sky-400 text-4xl font-poppins mb-10'>Book Categories</h1>
        <div className="grid  grid-rows-1 md:grid-cols-4 gap-10 p-4">
            {BooksCategory.map((BooksCategory, index) => (
                <Link key={index} >
                    <div className="card shadow-xl">
                        <figure><img className='h-[400px] w-[500px]'  src={BooksCategory.imageUrl} alt="Shoes" /></figure>
                        <div className=" flex justify-between p-5 ">
                            <h2 className="card-title text-center font-poppins  text-sky-400 font-semibold">{BooksCategory.booktype}</h2>  
                            <Link key={index} to={`/booktype/${BooksCategory.booktype}`}>
                            
                            <button className='text-lg font-poppins flex items-center gap-2'>See Books<FiArrowRight></FiArrowRight></button>
                            </Link> 
                            
                        </div>
                    </div>
                </Link>


            ))}
        </div>

        </div>
    );
};

export default booktype;