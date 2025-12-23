// src/components/forms/InsertionOrderForm.jsx
import React, { useState } from 'react';
import { FormField } from '../shared/FormField';
import { FormSection } from '../shared/FormSection';
import { insertionOrderFields } from '../../data/fieldDefinitions';
import {
  statusOptions,
  ioTypeOptions,
  budgetTypeOptions,
  pacingTypeOptions,
  performanceGoalTypeOptions,
  frequencyPeriodOptions,
  bidStrategyTypeOptions
} from '../../data/dropdownOptions';

export const InsertionOrderForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    ioId: '',
    campaignId: '',
    name: '',
    status: 'ACTIVE',
    ioType: 'STANDARD',
    integrationCode: '',
    details: '',
    budgetType: 'INSERTION_ORDER',
    budgetAmount: '',
    pacingType: 'EVEN',
    pacingPeriod: 'DAILY',
    pacingRate: '',
    autoBudgetAllocation: false,
    performanceGoalType: '',
    performanceGoalValue: '',
    performanceGoalPercentage: '',
    frequencyCapEnabled: false,
    frequencyMaxExposures: '',
    frequencyTimePeriod: 'DAYS',
    frequencyTimeRange: '1',
    startDate: '',
    endDate: '',
    biddingStrategy: '',
    bidAmount: '',
    ...initialData
  });

  const handleFieldChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const getOptionsForField = (key) => {
    const optionsMap = {
      status: statusOptions,
      campaignId: [
        { value: 'camp1', label: 'Campaign 1 - Brand Awareness' },
        { value: 'camp2', label: 'Campaign 2 - Performance' }
      ],
      ioType: ioTypeOptions,
      budgetType: budgetTypeOptions,
      pacingType: pacingTypeOptions,
      pacingPeriod: frequencyPeriodOptions,
      performanceGoalType: performanceGoalTypeOptions,
      frequencyTimePeriod: frequencyPeriodOptions,
      biddingStrategy: bidStrategyTypeOptions,
    };
    return optionsMap[key] || [];
  };

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <FormSection title="Basic Information">
        <div className="grid grid-cols-2 gap-4">
          {insertionOrderFields.basic.slice(0, 6).map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
        <div className="col-span-2">
          <FormField
            field={insertionOrderFields.basic[6]}
            value={formData.details}
            onChange={handleFieldChange}
          />
        </div>
      </FormSection>

      {/* Budget & Pacing */}
      <FormSection title="Budget & Pacing">
        <div className="grid grid-cols-2 gap-4">
          {insertionOrderFields.budget.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-4">
          <p className="text-sm text-blue-800">
            <strong>Budget Amount:</strong> Enter in micros (e.g., 5000000000 = $5,000.00)
          </p>
          <p className="text-sm text-blue-800 mt-2">
            <strong>Pacing:</strong> Even pacing distributes spend evenly, ASAP spends as fast as possible, Front Loaded front-loads the budget.
          </p>
        </div>
      </FormSection>

      {/* Performance Goal */}
      <FormSection title="Performance Goal (KPI)">
        <div className="grid grid-cols-2 gap-4">
          {insertionOrderFields.performance.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded p-3 mt-4">
          <p className="text-sm text-green-800">
            <strong>Performance Goals:</strong> Set target KPIs for your insertion order. Leave blank to inherit from campaign.
          </p>
        </div>
      </FormSection>

      {/* Frequency Cap */}
      <FormSection title="Frequency Cap">
        <div className="space-y-4">
          <FormField
            field={insertionOrderFields.frequency[0]}
            value={formData.frequencyCapEnabled}
            onChange={handleFieldChange}
          />
          {formData.frequencyCapEnabled && (
            <div className="grid grid-cols-3 gap-4">
              {insertionOrderFields.frequency.slice(1).map((field) => (
                <FormField
                  key={field.key}
                  field={field}
                  value={formData[field.key]}
                  onChange={handleFieldChange}
                  options={getOptionsForField(field.key)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded p-3 mt-4">
          <p className="text-sm text-purple-800">
            Frequency caps help control how often users see your ads. Example: 5 exposures per 7 days.
          </p>
        </div>
      </FormSection>

      {/* Flight Dates */}
      <FormSection title="Flight Dates">
        <div className="grid grid-cols-2 gap-4">
          {insertionOrderFields.dates.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
            />
          ))}
        </div>
      </FormSection>

      {/* Bidding Strategy */}
      <FormSection title="Bidding Strategy" collapsible>
        <div className="grid grid-cols-2 gap-4">
          {insertionOrderFields.bidding.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-4">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Bidding strategy can be overridden at the line item level.
          </p>
        </div>
      </FormSection>

      {/* Summary Preview */}
      <FormSection title="Summary">
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-700">IO Name:</span>
              <p className="text-sm text-gray-900">{formData.name || 'Not set'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Type:</span>
              <p className="text-sm text-gray-900">
                {ioTypeOptions.find(o => o.value === formData.ioType)?.label || 'Standard'}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Budget:</span>
              <p className="text-sm text-gray-900">
                {formData.budgetAmount ? `$${(formData.budgetAmount / 1000000).toFixed(2)}` : 'Not set'}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Pacing:</span>
              <p className="text-sm text-gray-900">
                {pacingTypeOptions.find(o => o.value === formData.pacingType)?.label || 'Even'}
              </p>
            </div>
          </div>
        </div>
      </FormSection>
    </div>
  );
};
