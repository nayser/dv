import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState('campaigns');
  
  const tabs = [
    { id: 'campaigns', label: 'Campaigns', icon: '📊' },
    { id: 'ios', label: 'Insertion Orders', icon: '📋' },
    { id: 'lineItems', label: 'Line Items', icon: '📝' },
    { id: 'adGroups', label: 'Ad Groups', icon: '👥' },
    { id: 'ads', label: 'Ads', icon: '🎯' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DV</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">DV360 Campaign Manager</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <span className="text-xl">⚙️</span>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <span className="text-xl">👤</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            DV360 Campaign Manager © 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
