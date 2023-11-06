import React, { useState } from "react";

const AddBooks = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    return (
        <div className="container mx-auto py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5 px-2">
                <div className="flex flex-col">
                    <label className="block mb-2" htmlFor="image">
                        Image:
                    </label>
                    <input
                        className="border border-gray-300 p-2"
                        type="file"
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
                        id="category"
                        name="category"
                    >
                        <option value="novel">Novel</option>
                        <option value="thriller">Thriller</option>
                        <option value="history">History</option>
                        <option value="sci-fi">Sci-Fi</option>
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
                        value={rating}
                        onChange={handleRatingChange}
                        step="0.1"
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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add
                </button>
            </div>
        </div>
    );
};

export default AddBooks;
