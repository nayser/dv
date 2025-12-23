import React, { useState } from 'react';

const FormSection = ({ title, description, children, defaultExpanded = true, icon }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white mb-4">
      {/* Section Header */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-3">
          {icon && <span className="text-xl">{icon}</span>}
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {description && (
              <p className="text-sm text-gray-500 mt-1">{description}</p>
            )}
          </div>
        </div>
        <span className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Section Content */}
      {isExpanded && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
};

export default FormSection;
