// src/components/shared/FormField.jsx
import React from 'react';

export const FormField = ({ field, value, onChange, options = [] }) => {
  const handleChange = (e) => {
    const newValue = field.type === 'checkbox' ? e.target.checked : e.target.value;
    onChange(field.key, newValue);
  };

  const handleMultiSelectChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    onChange(field.key, selected);
  };

  const renderInput = () => {
    const baseClasses = "w-full border rounded px-3 py-2";
    const disabledClasses = field.disabled ? "bg-gray-50" : "";

    switch(field.type) {
      case 'text':
      case 'number':
      case 'date':
        return (
          <input
            type={field.type}
            className={`${baseClasses} ${disabledClasses}`}
            value={value || ''}
            onChange={handleChange}
            disabled={field.disabled}
            placeholder={field.placeholder}
            maxLength={field.maxLength}
            step={field.step}
            required={field.required}
          />
        );

      case 'select':
        return (
          <select
            className={`${baseClasses} ${disabledClasses}`}
            value={value || ''}
            onChange={handleChange}
            disabled={field.disabled}
            required={field.required}
          >
            <option value="">Select {field.name}</option>
            {options.map((opt, idx) => (
              <option key={idx} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );

      case 'multiselect':
        return (
          <select
            multiple
            size={Math.min(options.length, 6)}
            className={`${baseClasses} ${disabledClasses}`}
            value={value || []}
            onChange={handleMultiSelectChange}
            disabled={field.disabled}
          >
            {options.map((opt, idx) => (
              <option key={idx} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );

      case 'textarea':
        return (
          <textarea
            className={`${baseClasses} ${disabledClasses}`}
            value={value || ''}
            onChange={handleChange}
            disabled={field.disabled}
            placeholder={field.placeholder}
            rows={field.rows || 4}
            required={field.required}
          />
        );

      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={value || false}
              onChange={handleChange}
              disabled={field.disabled}
            />
            <label className="text-sm">{field.label || field.name}</label>
          </div>
        );

      default:
        return (
          <input
            type="text"
            className={`${baseClasses} ${disabledClasses}`}
            value={value || ''}
            onChange={handleChange}
            disabled={field.disabled}
            placeholder={field.placeholder}
          />
        );
    }
  };

  return (
    <div className="mb-4">
      {field.type !== 'checkbox' && (
        <label className="block text-sm font-medium mb-1">
          {field.name}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {renderInput()}
      {field.helpText && (
        <p className="text-xs text-gray-500 mt-1">{field.helpText}</p>
      )}
    </div>
  );
};
