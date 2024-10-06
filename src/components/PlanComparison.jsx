import React from 'react';

const PlanComparison = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$100/month',
      coverage: '$10,000',
      features: [
        'Free doctor visits: 2/year',
        'Prescription coverage',
        'Emergency room visits',
      ],
    },
    {
      name: 'Standard Plan',
      price: '$200/month',
      coverage: '$50,000',
      features: [
        'Free doctor visits: 5/year',
        'Prescription coverage',
        'Dental care',
        'Vision care',
      ],
    },
    {
      name: 'Premium Plan',
      price: '$300/month',
      coverage: '$100,000',
      features: [
        'Unlimited doctor visits',
        'Prescription coverage',
        'Dental care',
        'Vision care',
        'Wellness check-ups',
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Compare Our Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">{plan.name}</h2>
            <p className="text-xl text-center text-gray-700 mb-4">{plan.price}</p>
            <p className="text-lg text-center text-gray-600 mb-2">
              Coverage: <span className="font-bold">{plan.coverage}</span>
            </p>
            <h3 className="text-lg font-semibold mb-2">Features:</h3>
            <ul className="list-disc list-inside mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 w-full">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanComparison;
