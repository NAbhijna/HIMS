// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header'; // Ensure this path is correct
import Hero from './pages/Hero';
import PlanDetails from './pages/PlanDetails';
import ContactPage from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Footer from './pages/Footer';
import Login from './pages/Login'; // Ensure this path is correct
import SignUp from './pages/SignUp';
import InsuranceForm from './pages/InsuranceForm'; // Ensure this path is correct
import FloatingGradient from './pages/FloatingGradient';

const App = () => {
  return (
    <Router>
      <div className="bg-dark-bg text-white min-h-screen font-sans relative">
        <FloatingGradient />
        <Header />
        <Routes>
          <Route path="/" element={<Login />} /> {/* Default route set to Login */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={
            <>
              <Hero />
              <PlanDetails />
            </>
          } />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/get-quote" element={<InsuranceForm />} /> {/* New Route for Get Quote */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;