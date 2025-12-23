// src/components/forms/AdGroupAdForm.jsx
import React, { useState } from 'react';
import { FormField } from '../shared/FormField';
import { FormSection } from '../shared/FormSection';
import { adGroupAdFields } from '../../data/fieldDefinitions';
import { statusOptions, adTypeOptions, adSizeOptions } from '../../data/dropdownOptions';

export const AdGroupAdForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    adGroupAdId: '',
    adGroupId: '',
    displayName: '',
    status: 'ACTIVE',
    adType: 'VIDEO_AD',
    videoUrl: '',
    videoDuration: '',
    companionBanner: false,
    creativeId: '',
    adSize: '300x250',
    trackingUrl: '',
    thirdPartyTracking: '',
    ...initialData
  });

  const handleFieldChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const getOptionsForField = (key) => {
    const optionsMap = {
      status: statusOptions,
      adGroupId: [
        { value: 'ag1', label: 'Ad Group 1 - Video Campaign' },
        { value: 'ag2', label: 'Ad Group 2 - Display Campaign' }
      ],
      adType: adTypeOptions,
      adSize: adSizeOptions,
    };
    return optionsMap[key] || [];
  };

  const isVideoAd = formData.adType === 'VIDEO_AD';
  const isDisplayAd = formData.adType === 'DISPLAY_AD';

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <FormSection title="Basic Information">
        <div className="grid grid-cols-2 gap-4">
          {adGroupAdFields.basic.map((field) => (
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
            <strong>Ad Type:</strong> Select the type that matches your creative format (Video, Display, Audio, or Native).
          </p>
        </div>
      </FormSection>

      {/* Video Ad Settings */}
      {isVideoAd && (
        <FormSection title="Video Ad Settings">
          <div className="grid grid-cols-2 gap-4">
            {adGroupAdFields.video.map((field) => (
              <FormField
                key={field.key}
                field={field}
                value={formData[field.key]}
                onChange={handleFieldChange}
              />
            ))}
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded p-4">
            <h4 className="text-sm font-semibold text-purple-900 mb-2">Video Ad Requirements:</h4>
            <ul className="text-xs text-purple-800 space-y-1 list-disc list-inside">
              <li>Video URL must be a valid YouTube video URL</li>
              <li>Video duration is in seconds</li>
              <li>Companion banners appear alongside your video ad</li>
              <li>Supported formats: MP4, MOV, AVI, WMV</li>
            </ul>
          </div>
        </FormSection>
      )}

      {/* Display Ad Settings */}
      {isDisplayAd && (
        <FormSection title="Display Ad Settings">
          <div className="grid grid-cols-2 gap-4">
            {adGroupAdFields.display.map((field) => (
              <FormField
                key={field.key}
                field={field}
                value={formData[field.key]}
                onChange={handleFieldChange}
                options={getOptionsForField(field.key)}
              />
            ))}
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <h4 className="text-sm font-semibold text-green-900 mb-2">Display Ad Specifications:</h4>
            <ul className="text-xs text-green-800 space-y-1 list-disc list-inside">
              <li>Creative must be uploaded to DV360 first</li>
              <li>Standard sizes: 300x250, 728x90, 160x600, 300x600</li>
              <li>Mobile sizes: 320x50, 320x100</li>
              <li>File formats: JPG, PNG, GIF, HTML5</li>
              <li>Max file size: 150KB for images, 5MB for HTML5</li>
            </ul>
          </div>
        </FormSection>
      )}

      {/* Tracking & URLs */}
      <FormSection title="Tracking & URLs">
        <div className="space-y-4">
          {adGroupAdFields.tracking.map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={formData[field.key]}
              onChange={handleFieldChange}
            />
          ))}
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
          <h4 className="text-sm font-semibold text-yellow-900 mb-2">Tracking Information:</h4>
          <ul className="text-xs text-yellow-800 space-y-1 list-disc list-inside">
            <li><strong>Tracking URL:</strong> Your landing page or destination URL</li>
            <li><strong>Third Party Tracking:</strong> Additional tracking pixels or tags</li>
            <li>Supports impression trackers, click trackers, and conversion pixels</li>
            <li>Must be HTTPS for secure tracking</li>
          </ul>
        </div>
      </FormSection>

      {/* Advanced Settings */}
      <FormSection title="Advanced Settings" collapsible>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Final URL</label>
              <input type="text" className="w-full border rounded px-3 py-2" placeholder="https://example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Display URL</label>
              <input type="text" className="w-full border rounded px-3 py-2" placeholder="example.com" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Custom Parameters</label>
            <textarea 
              className="w-full border rounded px-3 py-2" 
              rows="3" 
              placeholder="key1=value1&key2=value2"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm">Use creative dimensions for tracking</label>
          </div>
        </div>
      </FormSection>

      {/* Preview & Summary */}
      <FormSection title="Ad Preview & Summary">
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-700">Display Name:</span>
              <p className="text-sm text-gray-900">{formData.displayName || 'Not set'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Ad Type:</span>
              <p className="text-sm text-gray-900">
                {adTypeOptions.find(o => o.value === formData.adType)?.label}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Status:</span>
              <p className="text-sm text-gray-900">
                {statusOptions.find(o => o.value === formData.status)?.label}
              </p>
            </div>
            {isVideoAd && formData.videoUrl && (
              <div>
                <span className="text-sm font-medium text-gray-700">Video:</span>
                <p className="text-sm text-blue-600 truncate">{formData.videoUrl}</p>
              </div>
            )}
            {isDisplayAd && formData.adSize && (
              <div>
                <span className="text-sm font-medium text-gray-700">Ad Size:</span>
                <p className="text-sm text-gray-900">{formData.adSize}</p>
              </div>
            )}
          </div>

          {/* Preview Box */}
          <div className="border-2 border-dashed border-gray-300 rounded p-8 text-center">
            <p className="text-gray-500 text-sm">Ad Preview</p>
            {isVideoAd && (
              <div className="mt-4 bg-black rounded aspect-video flex items-center justify-center">
                <span className="text-white text-sm">Video Player</span>
              </div>
            )}
            {isDisplayAd && formData.adSize && (
              <div className="mt-4 bg-gray-200 rounded mx-auto flex items-center justify-center" style={{
                width: formData.adSize.split('x')[0] + 'px',
                height: formData.adSize.split('x')[1] + 'px',
                maxWidth: '100%'
              }}>
                <span className="text-gray-600 text-xs">{formData.adSize}</span>
              </div>
            )}
          </div>
        </div>
      </FormSection>

      {/* Compliance */}
      <FormSection title="Compliance & Policies">
        <div className="bg-red-50 border border-red-200 rounded p-4">
          <h4 className="text-sm font-semibold text-red-900 mb-2">⚠️ Important Policy Requirements:</h4>
          <ul className="text-xs text-red-800 space-y-1 list-disc list-inside">
            <li>Ads must comply with Google Ads policies and local regulations</li>
            <li>No prohibited content (drugs, weapons, adult content, etc.)</li>
            <li>Political ads may require verification</li>
            <li>Health/finance ads may have additional restrictions</li>
            <li>All claims must be substantiated</li>
          </ul>
        </div>
        <div className="mt-3 flex items-start">
          <input type="checkbox" className="mt-1 mr-2" required />
          <label className="text-sm text-gray-700">
            I confirm that this ad complies with all applicable advertising policies and regulations
          </label>
        </div>
      </FormSection>
    </div>
  );
};
