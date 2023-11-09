import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAllBook from './ShowAllBook';

const AllBooks = () => {
  const loaderAll = useLoaderData();
  const [displayBooks, setDisplayBooks] = useState(loaderAll);
  const [showAvailable, setShowAvailable] = useState(false);

  const handleFilterChange = (event) => {
    if (event.target.value === 'all') {
      setDisplayBooks(loaderAll);
      setShowAvailable(false);
    } else if (event.target.value === 'available') {
      const availableBooks = loaderAll.filter((book) => book.quantity > 0);
      setDisplayBooks(availableBooks);
      setShowAvailable(true);
    }
  };

  return (
    <div>
      <select
        onChange={handleFilterChange}
        className='mt-10 flex justify-end p-4 bg-red-300'
        defaultValue='all'
      >
        <option value='all'>All Books</option>
        <option value='available'>Show Available Books</option>
      </select>
      <div className='grid grid-cols-1 md:grid-cols-4 container mx-auto py-10'>
        {displayBooks.map((book) => (
          <ShowAllBook key={book._id} allbook={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
