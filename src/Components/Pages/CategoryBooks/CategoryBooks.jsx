import { useState,useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryCards from './CategoryCards';

const CategoryBooks = () => {
    const loader = useLoaderData();
    const[categorycard,setcategorycard]=useState([])
    // const [cardload,setcardload] = useState(loader)
    // const [noFound,setFound]=useState(null)
    const { booktype} = useParams();
    console.log(booktype)
    useEffect(()=>{
        const filterCategory = loader.filter(item=>item.category === booktype)
        console.log(filterCategory)
        setcategorycard(filterCategory)
        // if(filterCategory.length > 0){
        //     setcategorycard(filterCategory)
        // }
    },[booktype,loader])
    console.log(loader)
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 container mx-auto'>
            {
               
                    categorycard?.map(categoryCards=><CategoryCards key={categoryCards._id} categoryCards={categoryCards}></CategoryCards>)
                
            }
            
        </div>
    );
};

export default CategoryBooks;