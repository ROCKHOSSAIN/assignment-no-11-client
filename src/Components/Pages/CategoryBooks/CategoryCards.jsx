import { Link } from "react-router-dom";
import RatingDynamic from "./RatingDynamic";

const CategoryCards = ({categoryCards}) => {
    const {image,author,rating,category,_id,name}= categoryCards
    return (
        <div className="">
              <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 ">
            <img className=" h-[500px] w-[500px]" src={image} />
            <div className="px-6 py-4 bg-red-100 ">
                <div className="font-bold text-xl mb-2"></div>

                <p className="text-gray-700 text-xl font-poppins  mb-2"> {name}</p>
                <p className="text-gray-700 text-base mb-2"> {category}</p>
                <p className="text-gray-700 text-base mb-2">Author: {author}</p>
                <span className="text-gray-700 text-base mb-2"><RatingDynamic rating={rating}></RatingDynamic>  </span>
            </div>
            <div className="px-6 py-4 flex justify-center gap-4">
                <Link to={`/bookDetails/${_id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block">
                    Details
                </button>
                </Link>
                <Link to={`/updatebook/${_id}`}>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block">
                    Update
                </button>
                </Link>

            </div>
        </div>

        </div>
    );
};

export default CategoryCards;