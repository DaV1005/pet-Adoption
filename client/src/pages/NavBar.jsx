import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Navbar Icon */}
                <div className="flex items-center">
                    <span className="text-2xl font-bold mr-4">🐾</span>
                    <RouterLink to="/" className="text-xl font-semibold">
                        Pet Adoption
                    </RouterLink>
                </div>

                {/* Navbar Links */}
                <div className="flex space-x-6">
                    <RouterLink to="/" className="hover:text-yellow-300">
                        Home
                    </RouterLink>
                    <ScrollLink to="about-section" smooth={true} duration={500} className="hover:text-yellow-300 cursor-pointer">
                        About
                    </ScrollLink>
                    <RouterLink to="/adoption" className="hover:text-yellow-300">
                        Adoption
                    </RouterLink>
                    <div className="flex items-center space-x-4">
                        <RouterLink to="/login" className="hover:text-yellow-300">
                            Login
                        </RouterLink>
                        <div className="border-l border-gray-500 h-6"></div> {/* Divider Line */}
                        <RouterLink to="/signup" className="hover:text-yellow-300">
                            Signup
                        </RouterLink>
                    </div>
                </div>
            </div>
        </nav>
        
    );
}

export default NavBar
