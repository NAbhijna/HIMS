import React from 'react';

const InsuranceFormStep1 = ({ formData, handleInputChange, setPage }) => {
  return (
    <section className="max-w-2xl mx-auto bg-white dark:bg-glass-light p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Tell us about yourself</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">First Name</label>
            <input
              type="text"
              value={formData.personalInfo.firstName}
              onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Last Name</label>
            <input
              type="text"
              value={formData.personalInfo.lastName}
              onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label>
            <input
              type="email"
              value={formData.personalInfo.email}
              onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Phone Number</label>
            <input
              type="tel"
              value={formData.personalInfo.phone}
              onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Enter your mobile number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Date of Birth</label>
            <input
              type="date"
              value={formData.personalInfo.dateOfBirth}
              onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Gender</label>
            <select
              value={formData.personalInfo.gender}
              onChange={(e) => handleInputChange('personalInfo', 'gender', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Add Occupation and Income Details */}
        <div className="space-y-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Occupation Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Occupation</label>
              <select
                value={formData.personalInfo.occupation}
                onChange={(e) => handleInputChange('personalInfo', 'occupation', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Occupation</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self Employed</option>
                <option value="business">Business Owner</option>
                <option value="student">Student</option>
                <option value="retired">Retired</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Annual Income</label>
              <select
                value={formData.personalInfo.incomeRange}
                onChange={(e) => handleInputChange('personalInfo', 'incomeRange', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Income Range</option>
                <option value="0-300000">Up to ₹3 Lakhs</option>
                <option value="300001-500000">₹3-5 Lakhs</option>
                <option value="500001-1000000">₹5-10 Lakhs</option>
                <option value="1000001-2000000">₹10-20 Lakhs</option>
                <option value="2000001+">Above ₹20 Lakhs</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Full Address</label>
            <textarea
              value={formData.address.street}
              onChange={(e) => handleInputChange('address', 'street', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="2"
              required
              placeholder="Enter your complete address"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">City</label>
              <input
                type="text"
                value={formData.address.city}
                onChange={(e) => handleInputChange('address', 'city', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">State</label>
              <input
                type="text"
                value={formData.address.state}
                onChange={(e) => handleInputChange('address', 'state', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">PIN Code</label>
              <input
                type="text"
                value={formData.address.pinCode}
                onChange={(e) => handleInputChange('address', 'pinCode', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                maxLength="6"
                pattern="[0-9]{6}"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button 
          type="button" 
          onClick={() => setPage(2)} 
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Continue →
        </button>
      </div>
    </section>
  );
};

export default InsuranceFormStep1;
