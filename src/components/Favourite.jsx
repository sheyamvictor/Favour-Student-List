import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Favourite() {
  const location = useLocation();
  const [favouriteItems, setFavouriteItems] = useState(location.state || [])

  const handleRemove = (item) => {
    setFavouriteItems((prevItems) => prevItems.filter((existingItem) => existingItem !== item));
  };

  return (
    <div className="">
      <h1 className="text-3xl bg-rose-400 text-center">Favourite-List</h1>
      <div className="text-center mt-6 font-medium">
        <ol>
          {favouriteItems.map((item, index) => (
            <li className="flex justify-evenly p-5 text-2xl" key={index}>
              {item}
              <button
                className="bg-red-900 text-gray-200 border rounded-md w-60 text-center"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Favourite;
