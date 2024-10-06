import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PlanOverview from './components/PlanOverview';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-dark-bg text-white min-h-screen font-sans">
      <Header />
      <Hero />
      <PlanOverview />
      <Footer />
    </div>
  );
};

export default App;
