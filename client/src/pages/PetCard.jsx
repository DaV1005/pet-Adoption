// src/components/PetCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ id, name, breed, age, image }) => {
  return (
    <div className="max-w-xs mx-9 bg-gray-300 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Pet Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />

      {/* Pet Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{breed}</p>
        <p className="text-gray-500 text-sm">Age: {age}</p>

        {/* View Details Link */}
        <Link
          to={`/pet/${id}`}
          className="block mt-4 text-center bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
