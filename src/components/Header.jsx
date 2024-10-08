// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-white dark:bg-glass-dark backdrop-blur-md text-gray-800 dark:text-white p-4 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Health Insurance Management</h1>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li> {/* Add About Us link */}
            <li><a href="#plans" className="hover:text-blue-500">Plans</a></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
