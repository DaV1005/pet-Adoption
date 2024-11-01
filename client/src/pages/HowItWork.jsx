// src/components/HowItWorks.jsx
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="bg-slate-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Browse Pets</h3>
            <p className="text-gray-600">Search for pets based on their breed, size, age, and more.</p>
          </div>
          <div>
            <div className="bg-slate-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Meet Your Match</h3>
            <p className="text-gray-600">Contact the shelter or pet owner to learn more about your potential pet.</p>
          </div>
          <div>
            <div className="bg-slate-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Adopt & Bring Home</h3>
            <p className="text-gray-600">Complete the adoption process and welcome your new family member home.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
