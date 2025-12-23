// src/components/forms/LineItemForm.jsx
import React, { useState } from 'react';
import { FormField } from '../shared/FormField';
import { FormSection } from '../shared/FormSection';
import { lineItemFields } from '../../data/fieldDefinitions';
import {
  statusOptions,
  lineItemTypeOptions,
  budgetTypeOptions,
  pacingTypeOptions,
  bidStrategyTypeOptions,
  inventorySourceTypeOptions,
  authorizedSellerStatusOptions,
  exchangeOptions,
  creativeRotationOptions,
  ageRangeOptions,
  genderOptions,
  householdIncomeOptions,
  parentalStatusOptions,
  videoPlayerSizeOptions
} from '../../data/dropdownOptions';

export const LineItemForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    lineItemId: '',
    ioId: '',
    name: '',
    status: 'ACTIVE',
    lineItemType: 'DISPLAY_DEFAULT',
    details: '',
    integrationCode: '',
    startDate: '',
    endDate: '',
    flightDateType: 'CUSTOM',
    budgetType: 'INSERTION_ORDER',
    budgetAmount: '',
    pacingType: 'EVEN',
    pacingRate: '',
    dailySpendTarget: '',
    bidStrategyType: 'FIXED_BID',
    bidAmount: '',
    maxBid: '',
    performanceGoalType: '',
    performanceGoalValue: '',
    customBiddingAlgorithmId: '',
    frequencyCapEnabled: false,
    maxImpressions: '',
    timePeriod: 'DAYS',
    timeRange: '1',
    inventorySourceType: 'OPEN_AUCTION',
    authorizedSellerStatus: 'AUTHORIZED_DIRECT_SELLERS_AND_RESELLERS',
    exchange: [],
    inventorySourceId: '',
    creativeRotation: 'OPTIMIZED',
    creativeOptimization: true,
    displayCreativeServing: 'STANDARD',
    geoTargeting: [],
    languageTargeting: [],
    ageRange: [],
    gender: [],
    householdIncome: [],
    parentalStatus: [],
    videoPlayerSize: [],
    videoDuration: '',
    skippability: '',
    positionInContent: [],
    mobileAppCategory: [],
    mobileAppId: '',
    partnerRevenueModel: '',
    partnerRevenueAmount: '',
    ...initialData
  });

  const handleFieldChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const getOptionsForField = (key) => {
    const optionsMap = {
      status: statusOptions,
      ioId: [
        { value: 'io1', label: 'IO 1 - Q4 Brand Awareness' },
        { value: 'io2', label: 'IO 2 - Holiday Campaign' }
      ],
      lineItemType: lineItemTypeOptions,
      budgetType: budgetTypeOptions,
      pacingType: pacingTypeOptions,
      bidStrategyType: bidStrategyTypeOptions,
      inventorySourceType: inventorySourceTypeOptions,
      authorizedSellerStatus: authorizedSellerStatusOptions,
      exchange: exchangeOptions,
      creativeRotation: creativeRotationOptions,
      ageRange: ageRangeOptions,
      gender: genderOptions,
      householdIncome: householdIncomeOptions,
      parentalStatus: parentalStatusOptions,
      videoPlayerSize: videoPlayerSizeOptions,
    };
    return optionsMap[key] || [];
  };

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <FormSection title="Basic Information">
        <div className="grid grid-cols-2 gap-4">
          {lineItemFields.basic.slice(0, 6).map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
        <FormField
          field={lineItemFields.basic[6]}
          value={formData.integrationCode}
          onChange={handleFieldChange}
        />
        <div className="bg-blue-50 border border-blue-200 rounded p-3">
          <p className="text-sm text-blue-800">
            <strong>Line Item Type:</strong> Select the appropriate type based on your campaign goals and ad formats.
          </p>
        </div>
      </FormSection>

      {/* Flight & Budget */}
      <FormSection title="Flight & Budget">
        <div className="grid grid-cols-2 gap-4">
          {lineItemFields.flight.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
          {lineItemFields.budget.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded p-3">
          <p className="text-sm text-green-800">
            <strong>Budget:</strong> Choose to inherit from IO or set a specific line item budget. Amounts in micros.
          </p>
        </div>
      </FormSection>

      {/* Bidding Strategy */}
      <FormSection title="Bidding Strategy">
        <div className="grid grid-cols-2 gap-4">
          {lineItemFields.bidding.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded p-4">
          <h4 className="text-sm font-semibold text-purple-900 mb-2">Bidding Strategy Guide:</h4>
          <ul className="text-xs text-purple-800 space-y-1 list-disc list-inside">
            <li><strong>Fixed Bid:</strong> Set a specific bid amount for all impressions</li>
            <li><strong>Target CPA:</strong> Optimize for a target cost per acquisition</li>
            <li><strong>Target CPM:</strong> Optimize for a target cost per thousand impressions</li>
            <li><strong>Maximize Conversions:</strong> Get the most conversions within budget</li>
            <li><strong>Custom Bidding:</strong> Use a custom algorithm for bidding</li>
          </ul>
        </div>
      </FormSection>

      {/* Frequency Cap */}
      <FormSection title="Frequency Cap" collapsible>
        <div className="space-y-4">
          <FormField
            field={lineItemFields.frequency[0]}
            value={formData.frequencyCapEnabled}
            onChange={handleFieldChange}
          />
          {formData.frequencyCapEnabled && (
            <div className="grid grid-cols-3 gap-4">
              {lineItemFields.frequency.slice(1).map((field) => (
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
      </FormSection>

      {/* Inventory Source */}
      <FormSection title="Inventory Source">
        <div className="grid grid-cols-2 gap-4">
          {lineItemFields.inventory.slice(0, 2).map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
        <FormField
          field={lineItemFields.inventory[2]}
          value={formData.exchange}
          onChange={handleFieldChange}
          options={getOptionsForField('exchange')}
        />
        <FormField
          field={lineItemFields.inventory[3]}
          value={formData.inventorySourceId}
          onChange={handleFieldChange}
        />
        <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
          <p className="text-sm text-yellow-800">
            <strong>Exchanges:</strong> Hold Ctrl/Cmd to select multiple exchanges. Leave empty to target all available exchanges.
          </p>
        </div>
      </FormSection>

      {/* Creative Settings */}
      <FormSection title="Creative Settings" collapsible>
        <div className="grid grid-cols-2 gap-4">
          {lineItemFields.creative.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
      </FormSection>

      {/* Targeting */}
      <FormSection title="Demographic Targeting" collapsible>
        <div className="grid grid-cols-2 gap-4">
          {lineItemFields.targeting.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
        <div className="bg-indigo-50 border border-indigo-200 rounded p-3">
          <p className="text-sm text-indigo-800">
            <strong>Targeting:</strong> Select one or more options. Leave empty to target all.
          </p>
        </div>
      </FormSection>

      {/* Video Settings */}
      {(formData.lineItemType.includes('VIDEO') || formData.lineItemType.includes('YOUTUBE')) && (
        <FormSection title="Video Settings" collapsible>
          <div className="grid grid-cols-2 gap-4">
            {lineItemFields.video.map((field) => (
              <FormField
                key={field.key}
                field={field}
                value={formData[field.key]}
                onChange={handleFieldChange}
                options={getOptionsForField(field.key)}
              />
            ))}
          </div>
        </FormSection>
      )}

      {/* Mobile App Settings */}
      <FormSection title="Mobile App Settings" collapsible>
        <div className="grid grid-cols-2 gap-4">
          {lineItemFields.mobile.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
      </FormSection>

      {/* Partner Revenue */}
      <FormSection title="Partner Revenue Model" collapsible>
        <div className="grid grid-cols-2 gap-4">
          {lineItemFields.partner.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
      </FormSection>

      {/* Summary */}
      <FormSection title="Summary">
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-700">Line Item:</span>
              <p className="text-sm text-gray-900">{formData.name || 'Not set'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Type:</span>
              <p className="text-sm text-gray-900">
                {lineItemTypeOptions.find(o => o.value === formData.lineItemType)?.label}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Bidding:</span>
              <p className="text-sm text-gray-900">
                {bidStrategyTypeOptions.find(o => o.value === formData.bidStrategyType)?.label}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Inventory:</span>
              <p className="text-sm text-gray-900">
                {inventorySourceTypeOptions.find(o => o.value === formData.inventorySourceType)?.label}
              </p>
            </div>
          </div>
        </div>
      </FormSection>
    </div>
  );
};
