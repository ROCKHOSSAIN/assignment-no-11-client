import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateBooks = () => {
    const BookUpdate = useLoaderData();
    const { name, image, quantity, author, category, rating, description,_id } = BookUpdate
    const handleUpdateBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;
        // console.log(name, image, quantity, author, category, rating, description);
        const UpdateBook = {
            name, image, quantity, author, category, rating, description
        }
        console.log(UpdateBook)
        fetch(`http://localhost:5000/allbooks/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(UpdateBook)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.matchedCount===1){
                Swal.fire({
                    title: "Well Done!",
                    text: "You have updated book info!!",
                    icon: "success"
                  });
            }
        })
      };
    return (
        <div className="container mx-auto py-20">
            <div className='font-poppins flex items-center justify-center mb-4 md:mb-10'>
                <span className='border-2 border-green-400 p-2'>
                    <h1 className='text-center text-lg md:text-3xl'>
                        Update <span className='text-purple-500'>Book</span> Info
                    </h1>
                </span>
            </div>

            <form onSubmit={handleUpdateBook}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5 px-2">
                    <div className="flex flex-col">
                        <label className="block mb-2" htmlFor="image">
                            Image:
                        </label>
                        <input
                            className="border border-gray-300 p-2"
                           placeholder="https://"
                            id="image"
                            name="image"
                            defaultValue={image}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block mb-2" htmlFor="name">
                            Name:
                        </label>
                        <input
                            className="border border-gray-300 p-2"
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={name}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block mb-2" htmlFor="quantity">
                            Quantity:
                        </label>
                        <input
                            className="border border-gray-300 p-2"
                            type="number"
                            id="quantity"
                            name="quantity"
                            defaultValue={quantity}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block mb-2" htmlFor="author">
                            Author Name:
                        </label>
                        <input
                            className="border border-gray-300 p-2"
                            type="text"
                            id="author"
                            name="author"
                            defaultValue={author}

                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block mb-2" htmlFor="category">
                            Category:
                        </label>
                        <select
                            className="border border-gray-300 p-2"
                           
                            name="category"
                            defaultValue={category}

                        >   
                            <option value="">Select Brand</option>
                            <option value="Novel">Novel</option>
                            <option value="Mystery">Mystry</option>
                            <option value="History">History</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="block mb-2" htmlFor="rating">
                            Rating:
                        </label>
                        <input
                            className="border border-gray-300 p-2"
                            type="number"
                            id="rating"
                            name="rating"

                            defaultValue={rating}
                            
                            min="1"
                            max="5"
                            required
                        />

                    </div>
                </div>
                <div className="flex flex-col mb-5 px-2">
                    <label className="block mb-2" htmlFor="description">
                        Short Description:
                    </label>
                    <textarea
                        className="border border-gray-300 p-2"
                        id="description"
                        name="description"
                        defaultValue={description}

                    ></textarea>
                </div>
                <div className="flex flex-col px-2">
                    <button className="bg-error hover:bg-error text-white text-xl py-2 px-4 rounded">
                        Update Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBooks;
