import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PlanOverview from './components/PlanOverview';
import PlanComparison from './components/PlanComparison';
import ContactUs from './components/ContactUs'; // Import Contact Us component
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="bg-dark-bg text-white min-h-screen font-sans">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <PlanOverview />
              </>
            } 
          /> {/* Home page */}
          <Route path="/plan-comparison" element={<PlanComparison />} /> {/* Plan Comparison page */}
          <Route path="/contact" element={<ContactUs />} /> {/* Contact Us page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
