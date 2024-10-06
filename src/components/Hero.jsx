import React from 'react';

const Hero = () => {
  return (
    <section className="bg-glass-dark backdrop-blur-md text-white text-center py-20">
      <h2 className="text-4xl font-bold mb-4">Get the Best Health Insurance Plans</h2>
      <p className="text-lg mb-8">Protect your health and your family with our comprehensive plans.</p>
      <a href="#plans" className="bg-glass-light text-white px-8 py-3 rounded-lg shadow-lg backdrop-blur-md transition-transform transform hover:scale-105">
        Get a Quote
      </a>
    </section>
  );
};

export default Hero;
