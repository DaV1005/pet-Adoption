import React from 'react'
import Hero from './Hero'
import HowItWorks from './HowItWork';
import FeaturedPets from './FeaturedPets';
import About from './About'; // Import the About component


const HomePage = () => {
  return (
    <>
        <Hero />
        <FeaturedPets />
        <HowItWorks />
        <About /> 
    </>
    )
}

export default HomePage
