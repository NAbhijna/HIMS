import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-glass-dark backdrop-blur-md text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Health Insurance Management</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/plan-comparison" className="hover:underline">Plan Comparison</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li> {/* New link to Contact Us */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
