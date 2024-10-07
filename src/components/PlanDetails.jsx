// src/components/PlanDetails.jsx

import React from 'react';

// Define your plans and comparison data here
const plans = [
  {
    name: 'Basic Plan',
    description: 'Basic coverage with essential health benefits.',
    price: '$100/month',
    comparison: [
      { feature: 'Doctor Visits', coverage: 'Limited', additionalInfo: 'Up to 10 visits/year' },
      { feature: 'Hospital Stay', coverage: 'Partial', additionalInfo: 'Covers 80% of costs' },
      { feature: 'Prescription Drugs', coverage: 'Basic', additionalInfo: 'Limited to generics' }
    ]
  },
  {
    name: 'Standard Plan',
    description: 'Comprehensive coverage with additional benefits.',
    price: '$200/month',
    comparison: [
      { feature: 'Doctor Visits', coverage: 'Full', additionalInfo: 'Unlimited visits' },
      { feature: 'Hospital Stay', coverage: 'Full', additionalInfo: 'Covers 100% of costs' },
      { feature: 'Prescription Drugs', coverage: 'Comprehensive', additionalInfo: 'Includes brand-name drugs' }
    ]
  },
  {
    name: 'Premium Plan',
    description: 'All-inclusive coverage with top-tier benefits.',
    price: '$300/month',
    comparison: [
      { feature: 'Doctor Visits', coverage: 'Full', additionalInfo: 'Priority appointments' },
      { feature: 'Hospital Stay', coverage: 'Full', additionalInfo: 'Private room coverage' },
      { feature: 'Prescription Drugs', coverage: 'Premium', additionalInfo: 'Includes all drugs, no co-pay' }
    ]
  },
];

const PlanDetails = () => {
  return (
    <section id="plans" className="py-20 bg-dark-bg">
      <h3 className="text-3xl font-bold text-center mb-8">Our Plans</h3>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-glass-light backdrop-blur-md p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
            <p className="mb-4">{plan.description}</p>
            <p className="font-bold text-lg mb-4">{plan.price}</p>
            <a href="#contact" className="mt-4 bg-glass-dark text-white px-4 py-2 rounded block text-center">Select Plan</a>

            {/* Comparison Table within the Card */}
            <div className="mt-6">
              <table className="min-w-full bg-transparent text-sm">
                <thead>
                  <tr>
                    <th className="py-1 text-left">Feature</th>
                    <th className="py-1 text-left">Coverage</th>
                    <th className="py-1 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.comparison.map((item, i) => (
                    <tr key={i}>
                      <td className="py-1 text-left">{item.feature}</td>
                      <td className="py-1 text-left">{item.coverage}</td>
                      <td className="py-1 text-left">{item.additionalInfo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlanDetails;
