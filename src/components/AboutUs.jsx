// src/components/AboutUs.jsx

import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-20 bg-dark-bg">
      <h3 className="text-3xl font-bold text-center mb-8">About Us</h3>
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">
          Welcome to Health Insurance Management! We are dedicated to providing you and your family with the best health insurance plans that cater to your unique needs.
        </p>
        <p className="text-lg mb-4">
          Our mission is to ensure that everyone has access to affordable and quality healthcare. We believe in transparency, integrity, and exceptional customer service. 
        </p>
        <h4 className="text-2xl font-bold mb-4">Our Values</h4>
        <ul className="list-disc list-inside mb-8">
          <li>Customer Focus</li>
          <li>Integrity and Honesty</li>
          <li>Innovation</li>
          <li>Teamwork</li>
          <li>Respect for All</li>
        </ul>
        <h4 className="text-2xl font-bold mb-4">Meet Our Team</h4>
        <p className="text-lg mb-4">
          Our team consists of experienced professionals in the insurance and healthcare industry, dedicated to helping you make informed decisions about your health coverage.
        </p>
        <p className="text-lg">
          Together, we are committed to making a positive impact on the lives of our clients by offering personalized service and tailored insurance solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
