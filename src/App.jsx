// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PlanDetails from './components/PlanDetails'; // Use the unified plan details component
import ContactPage from './components/ContactUs'; // Assume you have a Contact component
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import Footer from './components/Footer';
import FloatingGradient from './components/FloatingGradient'; // Import the Floating Gradient

const App = () => {
  return (
    <Router>
      <div className="bg-dark-bg text-white min-h-screen font-sans relative">
        <FloatingGradient /> {/* Add the Floating Gradient */}
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <PlanDetails />
              </>
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUs />} /> {/* Add AboutUs route */}
          {/* Add other pages if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
