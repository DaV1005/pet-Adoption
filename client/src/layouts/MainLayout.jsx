// src/layout/Layout.jsx
import React from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Main content area */}
      <main>{children}</main>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
