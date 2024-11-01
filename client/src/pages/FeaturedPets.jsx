// src/components/FeaturedPets.jsx
import React, { useState, useEffect } from 'react';
import PetCard from './PetCard';
import { getPets } from '../services/api';

const FeaturedPets = () => {
  const [pets, setPets] = useState([]); // State to store pets data
  const [loading, setLoading] = useState(true); // State to handle loading state

  useEffect(() => {
    // Fetch pets data from the backend when the component loads
    const fetchPets = async () => {
      try {
        const petData = await getPets(); // Fetch pets from backend
        setPets(petData.slice(0,3)); // Set the fetched pets data to state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error loading pets:', error);
        setLoading(false);
      }
    };

    fetchPets(); // Call the function to fetch pets
  }, []); // Empty dependency array means this effect runs only once on component mount

  if (loading) {
    return <div className="text-center py-16">Loading pets...</div>;
  }

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-slate-400">Featured Pets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map through pets and render a PetCard for each pet */}
          {pets.map((pet) => (
            <PetCard
              key={pet.id}
              id={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              age={pet.age}
              image={pet.photos[0]?.medium || '/images/default-pet.jpg'} // Use a default image if none is provided
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
