// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/bg1.jpg'
const HeroSection = () => {
  return (
    <section className="bg-cover bg-slate-400 bg-center h-[70vh] flex items-center justify-center" 
    style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="text-center text-gray">
        <h1 className="text-5xl font-bold mb-4 text-slate-200	">Find Your Perfect Pet</h1>
        <p className="text-xl mb-6 text-slate-400">Adopt a loving pet and give them a forever home.</p>
        <Link to="/adoption" className="bg-slate-300 px-6 py-3 text-xl rounded hover:bg-slate-600 transition">
          View Pets
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
