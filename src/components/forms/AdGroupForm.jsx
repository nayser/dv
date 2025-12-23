// src/components/forms/AdGroupForm.jsx
import React, { useState } from 'react';
import { FormField } from '../shared/FormField';
import { FormSection } from '../shared/FormSection';
import { adGroupFields } from '../../data/fieldDefinitions';
import {
  statusOptions,
  adGroupFormatOptions,
  bidStrategyTypeOptions,
  audienceExpansionOptions,
  ageRangeOptions,
  genderOptions,
  householdIncomeOptions,
  parentalStatusOptions,
  topicsOptions,
  deviceTypeOptions,
  operatingSystemOptions,
  browserOptions
} from '../../data/dropdownOptions';

export const AdGroupForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    adGroupId: '',
    lineItemId: '',
    name: '',
    status: 'ACTIVE',
    adGroupFormat: 'IN_STREAM_SKIPPABLE',
    biddingStrategy: 'TARGET_CPM',
    bidAmount: '',
    targetCpa: '',
    targetCpm: '',
    youtubeSearch: true,
    youtubeVideos: true,
    youtubeChannelPages: false,
    videoPartners: false,
    audienceSegments: [],
    audienceExpansion: 'MODERATE',
    similarAudiences: false,
    optimizedTargeting: true,
    age: [],
    gender: [],
    householdIncome: [],
    parentalStatus: [],
    keywords: '',
    topics: [],
    placements: '',
    deviceTypes: [],
    operatingSystems: [],
    browsers: [],
    geoLocations: [],
    locationLists: [],
    ...initialData
  });

  const handleFieldChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const getOptionsForField = (key) => {
    const optionsMap = {
      status: statusOptions,
      lineItemId: [
        { value: 'li1', label: 'LI 1 - YouTube Campaign' },
        { value: 'li2', label: 'LI 2 - Display Campaign' }
      ],
      adGroupFormat: adGroupFormatOptions,
      biddingStrategy: bidStrategyTypeOptions.filter(s => 
        ['TARGET_CPA', 'TARGET_CPM', 'TARGET_CPV', 'MAXIMIZE_CONVERSIONS', 'MAXIMIZE_LIFT'].includes(s.value)
      ),
      audienceSegments: [
        { value: 'in_market', label: 'In-Market Audiences' },
        { value: 'affinity', label: 'Affinity Audiences' },
        { value: 'custom_intent', label: 'Custom Intent' },
        { value: 'remarketing', label: 'Remarketing Lists' },
        { value: 'similar', label: 'Similar Audiences' },
        { value: 'life_events', label: 'Life Events' },
        { value: 'detailed_demographics', label: 'Detailed Demographics' }
      ],
      audienceExpansion: audienceExpansionOptions,
      age: ageRangeOptions,
      gender: genderOptions,
      householdIncome: householdIncomeOptions,
      parentalStatus: parentalStatusOptions,
      topics: topicsOptions,
      deviceTypes: deviceTypeOptions,
      operatingSystems: operatingSystemOptions,
      browsers: browserOptions,
      geoLocations: [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'gb', label: 'United Kingdom' },
        { value: 'au', label: 'Australia' },
        { value: 'de', label: 'Germany' },
        { value: 'fr', label: 'France' },
        { value: 'jp', label: 'Japan' },
        { value: 'in', label: 'India' }
      ],
      locationLists: [
        { value: 'list1', label: 'Location List 1' },
        { value: 'list2', label: 'Location List 2' }
      ]
    };
    return optionsMap[key] || [];
  };

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <FormSection title="Basic Information">
        <div className="grid grid-cols-2 gap-4">
          {adGroupFields.basic.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded p-3">
          <p className="text-sm text-blue-800">
            <strong>Ad Group Format:</strong> Select the format that matches your creative type and campaign goals.
          </p>
        </div>
      </FormSection>

      {/* Bidding Strategy */}
      <FormSection title="Bidding Strategy">
        <div className="grid grid-cols-2 gap-4">
          {adGroupFields.bidding.map((field) => (
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
            <strong>Bidding Tips:</strong> Target CPA works well for conversion goals, Target CPM for awareness, Target CPV for video views.
          </p>
        </div>
      </FormSection>

      {/* YouTube & Partners Settings */}
      <FormSection title="YouTube & Partners Placement">
        <div className="space-y-3">
          {adGroupFields.youtube.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
            />
          ))}
        </div>
        <div className="bg-red-50 border border-red-200 rounded p-3 mt-4">
          <h4 className="text-sm font-semibold text-red-900 mb-2">Placement Options:</h4>
          <ul className="text-xs text-red-800 space-y-1 list-disc list-inside">
            <li><strong>YouTube Search:</strong> Ads appear in YouTube search results</li>
            <li><strong>YouTube Videos:</strong> In-stream ads on YouTube videos</li>
            <li><strong>YouTube Channel Pages:</strong> Ads on channel pages</li>
            <li><strong>Video Partners:</strong> Display Network video partners</li>
          </ul>
        </div>
      </FormSection>

      {/* Audience Targeting */}
      <FormSection title="Audience Targeting">
        <div className="grid grid-cols-2 gap-4">
          {adGroupFields.audience.map((field) => (
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
          <h4 className="text-sm font-semibold text-purple-900 mb-2">Audience Options:</h4>
          <ul className="text-xs text-purple-800 space-y-1 list-disc list-inside">
            <li><strong>In-Market:</strong> Users actively researching or comparing products</li>
            <li><strong>Affinity:</strong> Users with specific interests and habits</li>
            <li><strong>Custom Intent:</strong> Based on keywords and URLs they've visited</li>
            <li><strong>Remarketing:</strong> Users who've interacted with your business</li>
          </ul>
        </div>
      </FormSection>

      {/* Demographics */}
      <FormSection title="Demographics">
        <div className="grid grid-cols-2 gap-4">
          {adGroupFields.demographics.map((field) => (
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
            <strong>Demographics:</strong> Narrow your audience by age, gender, household income, and parental status. Leave empty to target all.
          </p>
        </div>
      </FormSection>

      {/* Content Targeting */}
      <FormSection title="Content Targeting">
        <FormField
          field={adGroupFields.content[0]}
          value={formData.keywords}
          onChange={handleFieldChange}
        />
        <FormField
          field={adGroupFields.content[1]}
          value={formData.topics}
          onChange={handleFieldChange}
          options={getOptionsForField('topics')}
        />
        <FormField
          field={adGroupFields.content[2]}
          value={formData.placements}
          onChange={handleFieldChange}
        />
        <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
          <h4 className="text-sm font-semibold text-yellow-900 mb-2">Content Targeting Guide:</h4>
          <ul className="text-xs text-yellow-800 space-y-1 list-disc list-inside">
            <li><strong>Keywords:</strong> Your ads appear on content related to these keywords</li>
            <li><strong>Topics:</strong> Target content about specific topics</li>
            <li><strong>Placements:</strong> Specific YouTube channels or videos where your ads will show</li>
          </ul>
        </div>
      </FormSection>

      {/* Device Targeting */}
      <FormSection title="Device Targeting" collapsible>
        <div className="grid grid-cols-2 gap-4">
          {adGroupFields.device.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
        <div className="bg-teal-50 border border-teal-200 rounded p-3">
          <p className="text-sm text-teal-800">
            <strong>Device Options:</strong> Target specific device types, operating systems, or browsers. Leave empty to target all devices.
          </p>
        </div>
      </FormSection>

      {/* Location Targeting */}
      <FormSection title="Location Targeting" collapsible>
        <div className="grid grid-cols-2 gap-4">
          {adGroupFields.location.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
              options={getOptionsForField(field.key)}
            />
          ))}
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded p-3">
          <p className="text-sm text-orange-800">
            <strong>Geographic Targeting:</strong> Select countries, regions, or use custom location lists.
          </p>
        </div>
      </FormSection>

      {/* Summary */}
      <FormSection title="Summary">
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-700">Ad Group:</span>
              <p className="text-sm text-gray-900">{formData.name || 'Not set'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Format:</span>
              <p className="text-sm text-gray-900">
                {adGroupFormatOptions.find(o => o.value === formData.adGroupFormat)?.label}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Bidding:</span>
              <p className="text-sm text-gray-900">
                {bidStrategyTypeOptions.find(o => o.value === formData.biddingStrategy)?.label}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Placements:</span>
              <p className="text-sm text-gray-900">
                {[formData.youtubeSearch && 'Search', formData.youtubeVideos && 'Videos', formData.youtubeChannelPages && 'Channels'].filter(Boolean).join(', ') || 'None'}
              </p>
            </div>
          </div>
          {formData.keywords && (
            <div>
              <span className="text-sm font-medium text-gray-700">Keywords:</span>
              <p className="text-xs text-gray-600 mt-1">{formData.keywords.split('\n').length} keyword(s) added</p>
            </div>
          )}
        </div>
      </FormSection>
    </div>
  );
};
