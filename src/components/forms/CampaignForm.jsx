import React, { useState } from 'react';
import FormSection from '../shared/FormSection';
import FormField from '../shared/FormField';

const CampaignForm = ({ onSubmit, initialData = null, onCancel }) => {
  const [formData, setFormData] = useState(initialData || {
    // Basic Information
    displayName: '',
    advertiserId: '',
    campaignGoal: 'CAMPAIGN_GOAL_TYPE_UNSPECIFIED',
    
    // Campaign Flight
    plannedSpendAmount: '',
    plannedSpendCurrency: 'USD',
    flightDateStart: '',
    flightDateEnd: '',
    
    // Performance Goal
    performanceGoalType: 'PERFORMANCE_GOAL_TYPE_UNSPECIFIED',
    performanceGoalAmount: '',
    performanceGoalPercentage: '',
    
    // Frequency Cap
    enableFrequencyCap: false,
    frequencyCapMaxImpressions: '',
    frequencyCapTimeUnit: 'TIME_UNIT_DAYS',
    frequencyCapTimeUnitCount: '1',
    frequencyCapUnlimited: false,
    
    // Campaign Budget
    budgetId: '',
    budgetUnit: 'BUDGET_UNIT_CURRENCY',
    automationType: 'INSERTION_ORDER_AUTOMATION_TYPE_NONE',
    budgetSegments: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <FormSection 
        title="Basic Information" 
        description="Enter the basic campaign details"
        icon="📝"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Display Name"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            required
            placeholder="Enter campaign name"
          />
          
          <FormField
            label="Advertiser ID"
            name="advertiserId"
            value={formData.advertiserId}
            onChange={handleChange}
            required
            placeholder="Enter advertiser ID"
          />
          
          <FormField
            label="Campaign Goal"
            name="campaignGoal"
            type="select"
            value={formData.campaignGoal}
            onChange={handleChange}
            options={[
              { value: 'CAMPAIGN_GOAL_TYPE_UNSPECIFIED', label: 'Unspecified' },
              { value: 'CAMPAIGN_GOAL_TYPE_APP_INSTALL', label: 'App Install' },
              { value: 'CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS', label: 'Brand Awareness' },
              { value: 'CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION', label: 'Offline Action' },
              { value: 'CAMPAIGN_GOAL_TYPE_ONLINE_ACTION', label: 'Online Action' }
            ]}
          />
        </div>
      </FormSection>

      {/* Campaign Flight */}
      <FormSection 
        title="Campaign Flight" 
        description="Set campaign duration and budget"
        icon="📅"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Planned Spend Amount"
            name="plannedSpendAmount"
            type="number"
            value={formData.plannedSpendAmount}
            onChange={handleChange}
            placeholder="0.00"
          />
          
          <FormField
            label="Currency"
            name="plannedSpendCurrency"
            type="select"
            value={formData.plannedSpendCurrency}
            onChange={handleChange}
            options={[
              { value: 'USD', label: 'USD' },
              { value: 'EUR', label: 'EUR' },
              { value: 'GBP', label: 'GBP' },
              { value: 'JPY', label: 'JPY' },
              { value: 'INR', label: 'INR' }
            ]}
          />
          
          <FormField
            label="Start Date"
            name="flightDateStart"
            type="date"
            value={formData.flightDateStart}
            onChange={handleChange}
            required
          />
          
          <FormField
            label="End Date"
            name="flightDateEnd"
            type="date"
            value={formData.flightDateEnd}
            onChange={handleChange}
            required
          />
        </div>
      </FormSection>

      {/* Performance Goal */}
      <FormSection 
        title="Performance Goal" 
        description="Configure performance objectives"
        icon="🎯"
        defaultExpanded={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Performance Goal Type"
            name="performanceGoalType"
            type="select"
            value={formData.performanceGoalType}
            onChange={handleChange}
            options={[
              { value: 'PERFORMANCE_GOAL_TYPE_UNSPECIFIED', label: 'Unspecified' },
              { value: 'PERFORMANCE_GOAL_TYPE_CPA', label: 'CPA' },
              { value: 'PERFORMANCE_GOAL_TYPE_CPC', label: 'CPC' },
              { value: 'PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM', label: 'vCPM' },
              { value: 'PERFORMANCE_GOAL_TYPE_CPM', label: 'CPM' },
              { value: 'PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO', label: 'Custom Algorithm' }
            ]}
          />
          
          <FormField
            label="Goal Amount (Micros)"
            name="performanceGoalAmount"
            type="number"
            value={formData.performanceGoalAmount}
            onChange={handleChange}
            placeholder="Enter amount in micros"
          />
          
          <FormField
            label="Goal Percentage"
            name="performanceGoalPercentage"
            type="number"
            value={formData.performanceGoalPercentage}
            onChange={handleChange}
            placeholder="Enter percentage (0-100)"
            min="0"
            max="100"
          />
        </div>
      </FormSection>

      {/* Frequency Cap */}
      <FormSection 
        title="Frequency Cap" 
        description="Control ad exposure frequency"
        icon="🔄"
        defaultExpanded={false}
      >
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="enableFrequencyCap"
              checked={formData.enableFrequencyCap}
              onChange={handleChange}
              className="mr-2 h-4 w-4 text-blue-600 rounded"
            />
            <label className="text-sm font-medium text-gray-700">
              Enable Frequency Cap
            </label>
          </div>
          
          {formData.enableFrequencyCap && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-6">
              <FormField
                label="Max Impressions"
                name="frequencyCapMaxImpressions"
                type="number"
                value={formData.frequencyCapMaxImpressions}
                onChange={handleChange}
                placeholder="Enter max impressions"
              />
              
              <FormField
                label="Time Unit"
                name="frequencyCapTimeUnit"
                type="select"
                value={formData.frequencyCapTimeUnit}
                onChange={handleChange}
                options={[
                  { value: 'TIME_UNIT_DAYS', label: 'Days' },
                  { value: 'TIME_UNIT_HOURS', label: 'Hours' },
                  { value: 'TIME_UNIT_MINUTES', label: 'Minutes' },
                  { value: 'TIME_UNIT_MONTHS', label: 'Months' },
                  { value: 'TIME_UNIT_WEEKS', label: 'Weeks' }
                ]}
              />
              
              <FormField
                label="Time Unit Count"
                name="frequencyCapTimeUnitCount"
                type="number"
                value={formData.frequencyCapTimeUnitCount}
                onChange={handleChange}
                min="1"
              />
              
              <div className="flex items-center col-span-full">
                <input
                  type="checkbox"
                  name="frequencyCapUnlimited"
                  checked={formData.frequencyCapUnlimited}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 text-blue-600 rounded"
                />
                <label className="text-sm font-medium text-gray-700">
                  Unlimited Frequency
                </label>
              </div>
            </div>
          )}
        </div>
      </FormSection>

      {/* Campaign Budget */}
      <FormSection 
        title="Campaign Budget" 
        description="Configure budget settings"
        icon="💰"
        defaultExpanded={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Budget ID"
            name="budgetId"
            value={formData.budgetId}
            onChange={handleChange}
            placeholder="Enter budget ID"
          />
          
          <FormField
            label="Budget Unit"
            name="budgetUnit"
            type="select"
            value={formData.budgetUnit}
            onChange={handleChange}
            options={[
              { value: 'BUDGET_UNIT_CURRENCY', label: 'Currency' },
              { value: 'BUDGET_UNIT_IMPRESSIONS', label: 'Impressions' }
            ]}
          />
          
          <FormField
            label="Automation Type"
            name="automationType"
            type="select"
            value={formData.automationType}
            onChange={handleChange}
            options={[
              { value: 'INSERTION_ORDER_AUTOMATION_TYPE_NONE', label: 'None' },
              { value: 'INSERTION_ORDER_AUTOMATION_TYPE_BUDGET', label: 'Budget' },
              { value: 'INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET', label: 'Bid & Budget' }
            ]}
          />
        </div>
      </FormSection>

      {/* Form Actions */}
      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          {initialData ? 'Update Campaign' : 'Create Campaign'}
        </button>
      </div>
    </form>
  );
};

export default CampaignForm;
