// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PlanDetails from './components/PlanDetails'; // Use the unified plan details component
import ContactPage from './components/ContactUs'; // Assume you have a Contact component
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="bg-dark-bg text-white min-h-screen font-sans">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <PlanDetails />
            </>
          } />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add other pages if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
