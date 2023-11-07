import React from 'react';
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
const RatingDynamic = ({rating}) => {
    const remaining = 5-rating;
    const stars = [];
    const remainingStars = [];
    for(let i=0;i<rating;i++){
        stars.push(<AiFillStar key={i} className='text-xl text-red-500'></AiFillStar>)
    }
    for(let i=0;i<remaining;i++){
        remainingStars.push(<AiOutlineStar key={i} className='text-xl'></AiOutlineStar>)
    }
    return (
        <div className='flex'>
            {stars}
            {remainingStars}
        </div>
    );
};

export default RatingDynamic;