
import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Application Submitted Successfully!</h1>
        <p className="text-gray-600 mb-6">Thank you for submitting your insurance application. We will review your information and contact you soon.</p>
        <Link to="/home" className="block text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;