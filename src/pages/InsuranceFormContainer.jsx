import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InsuranceFormStep1 from './InsuranceFormStep1';
import InsuranceFormStep2 from './InsuranceFormStep2';
import InsuranceFormStep3 from './InsuranceFormStep3';

const InsuranceFormContainer = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: { firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '', gender: '', occupation: '', incomeRange: '', status: 'active' },
    address: { street: '', city: '', state: '', pinCode: '' },
    healthInfo: { height: '', weight: '', hasExistingConditions: false, existingConditions: '', smokingStatus: '', familyHistory: '', exerciseFrequency: '', alcoholConsumption: '', takingMedications: false, medications: '' },
    coverage: { planType: '', coverageAmount: '', paymentMethod: '', paymentFrequency: '', additionalBenefits: [], familyMembers: [] },
  });

  // Pre-fill form data based on selected plan
  useEffect(() => {
    if (location.state?.selectedPlan) {
      const { id, name } = location.state.selectedPlan;
      setFormData((prev) => ({
        ...prev,
        coverage: {
          ...prev.coverage,
          planType: id, // Use the plan's ID (basic, standard, premium)
        },
      }));
    }
  }, [location.state]);

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-dark-bg text-gray-900 dark:text-white">
      {page === 1 && <InsuranceFormStep1 formData={formData} handleInputChange={handleInputChange} setPage={setPage} />}
      {page === 2 && <InsuranceFormStep2 formData={formData} handleInputChange={handleInputChange} setPage={setPage} />}
      {page === 3 && <InsuranceFormStep3 formData={formData} handleInputChange={handleInputChange} setPage={setPage} />}
    </div>
  );
};

export default InsuranceFormContainer;
