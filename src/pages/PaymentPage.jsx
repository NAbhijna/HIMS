
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      navigate('/success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Payment Details</h2>
        
        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-6">
          <p className="text-blue-800 dark:text-blue-200 font-medium">Amount to Pay: ₹5,000</p>
          <p className="text-sm text-blue-600 dark:text-blue-300">Insurance Premium</p>
        </div>

        <form onSubmit={handlePayment}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                  maxLength="3"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Card Holder Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full px-4 py-2 rounded-md text-white ${
              loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            } transition-colors duration-200`}
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;