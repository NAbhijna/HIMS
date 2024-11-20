import React, { useState } from 'react';
import InsuranceFormStep1 from './InsuranceFormStep1';
import InsuranceFormStep2 from './InsuranceFormStep2';
import InsuranceFormStep3 from './InsuranceFormStep3';

const InsuranceFormContainer = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      occupation: '',
      incomeRange: '',
      status: 'active'  // Add status field
    },
    address: {
      street: '',
      city: '',
      state: '',
      pinCode: ''
    },
    healthInfo: {
      height: '',
      weight: '',
      hasExistingConditions: false,
      existingConditions: '',
      smokingStatus: '',
      familyHistory: '',
      exerciseFrequency: '',
      alcoholConsumption: '',
      takingMedications: false,
      medications: ''
    },
    coverage: {
      planType: '',
      coverageAmount: '',
      paymentMethod: '',
      paymentFrequency: '',
      additionalBenefits: [],
      familyMembers: []
    }
  });

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
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