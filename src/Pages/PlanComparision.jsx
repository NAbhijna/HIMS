import React, { useState } from 'react';

const plans = [
  {
    name: 'Basic Plan',
    price: '$100/month',
    coverage: 'Hospitalization, Doctor Visits',
    benefits: 'Basic support, 24/7 assistance',
  },
  {
    name: 'Standard Plan',
    price: '$200/month',
    coverage: 'Hospitalization, Doctor Visits, Medicines',
    benefits: 'Extended support, Specialist visits',
  },
  {
    name: 'Premium Plan',
    price: '$300/month',
    coverage: 'Hospitalization, Doctor Visits, Medicines, Surgery',
    benefits: 'Full support, Premium customer care',
  },
];

const PlanComparison = () => {
  const [selectedPlans, setSelectedPlans] = useState([]);

  const handlePlanSelect = (plan) => {
    if (selectedPlans.includes(plan)) {
      setSelectedPlans(selectedPlans.filter((p) => p !== plan));
    } else if (selectedPlans.length < 3) {
      setSelectedPlans([...selectedPlans, plan]);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white py-10">
      <h2 className="text-center text-4xl font-bold mb-8">Compare Health Insurance Plans</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-glass-light backdrop-blur-lg p-6 rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105
              ${selectedPlans.includes(plan) ? 'border-2 border-blue-500' : ''}`}
            onClick={() => handlePlanSelect(plan)}
          >
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="text-lg mt-2">{plan.price}</p>
            <p className="text-md mt-2">{plan.coverage}</p>
            <p className="text-sm mt-2">{plan.benefits}</p>
          </div>
        ))}
      </div>

      <div className="container mx-auto bg-glass-dark backdrop-blur-md p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Plan Comparison</h3>
        <table className="table-auto w-full text-white">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Features</th>
              {selectedPlans.map((plan, index) => (
                <th key={index} className="px-4 py-2 text-left">{plan.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Price</td>
              {selectedPlans.map((plan, index) => (
                <td key={index} className="px-4 py-2">{plan.price}</td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2">Coverage</td>
              {selectedPlans.map((plan, index) => (
                <td key={index} className="px-4 py-2">{plan.coverage}</td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2">Benefits</td>
              {selectedPlans.map((plan, index) => (
                <td key={index} className="px-4 py-2">{plan.benefits}</td>
              ))}
            </tr>
          </tbody>
        </table>
        {selectedPlans.length === 0 && (
          <p className="text-center text-lg mt-4">Please select up to 3 plans to compare.</p>
        )}
      </div>
    </div>
  );
};

export default PlanComparison;
