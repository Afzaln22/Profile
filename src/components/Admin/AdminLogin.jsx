import React, { useState } from 'react';
import { Lock, KeyRound, ArrowRight, ArrowLeft, ShieldAlert } from 'lucide-react';

export const AdminLogin = ({ onLoginSuccess, onBackToPortfolio }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Default PIN: admin or 1234
    if (pin === 'admin' || pin === '1234' || pin === 'afzal') {
      onLoginSuccess();
    } else {
      setError('Invalid PIN code. (Default PIN: admin or 1234)');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center p-6 text-gray-900 dark:text-white">
      {/* Back Button */}
      <div className="absolute top-8 left-8">
        <button
          onClick={onBackToPortfolio}
          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Live Portfolio</span>
        </button>
      </div>

      <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 flex items-center justify-center mx-auto shadow-md">
          <Lock size={30} />
        </div>

        <div>
          <h2 className="text-2xl font-bold font-display">Admin Portal</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Authenticate to update projects, work experience, and profile details
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-xl text-xs flex items-center space-x-2 text-left">
            <ShieldAlert size={16} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Enter Admin PIN / Passcode
            </label>
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="password"
                required
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError('');
                }}
                placeholder="Enter PIN (Default: admin or 1234)"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
          >
            <span>Unlock Admin Dashboard</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <div className="text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
          Quick Access: Default passcode is <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-primary-600 dark:text-primary-400">admin</code>
        </div>
      </div>
    </div>
  );
};

