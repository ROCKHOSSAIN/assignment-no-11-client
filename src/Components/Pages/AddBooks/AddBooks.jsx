import swal from "sweetalert";

const AddBooks = () => {
    const handleAddProduct = (e) => {
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
        const newBook = {
            name, image, quantity, author, category, rating, description
        }
        console.log(newBook)
        fetch('http://localhost:5000/allbooks',{credentials:'include'},{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newBook)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                swal({
                    title: "Good job!",
                    text: "You have added this Book Info!",
                    icon: "success",
                    button: "Aww yesss!",
                });
            }
        })
      };
    return (
        <div className="container mx-auto py-20">
            <div className='font-poppins flex items-center justify-center mb-4 md:mb-10'>
                <span className='border-2 border-green-400 p-2'>
                    <h1 className='text-center text-lg md:text-3xl'>
                        Add <span className='text-purple-500'>Book</span> Info
                    </h1>
                </span>
            </div>

            <form onSubmit={handleAddProduct}>
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
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block mb-2" htmlFor="category">
                            Category:
                        </label>
                        <select
                            className="border border-gray-300 p-2"
                           
                            name="category"
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
                    ></textarea>
                </div>
                <div className="flex flex-col px-2">
                    <button className="bg-error hover:bg-error text-white text-xl py-2 px-4 rounded">
                        Add Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBooks;
