import React from 'react';

const plans = [
  { name: 'Basic Plan', description: 'Basic coverage with essential health benefits.', price: '$100/month' },
  { name: 'Standard Plan', description: 'Comprehensive coverage with additional benefits.', price: '$200/month' },
  { name: 'Premium Plan', description: 'All-inclusive coverage with top-tier benefits.', price: '$300/month' },
];

const PlanOverview = () => {
  return (
    <section id="plans" className="py-20 bg-dark-bg">
      <h3 className="text-3xl font-bold text-center mb-8">Our Plans</h3>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-glass-light backdrop-blur-md p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
            <p className="mb-4">{plan.description}</p>
            <p className="font-bold text-lg">{plan.price}</p>
            <a href="#contact" className="mt-4 bg-glass-dark text-white px-4 py-2 rounded block text-center">Select Plan</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlanOverview;
