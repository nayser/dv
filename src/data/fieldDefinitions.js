// src/data/fieldDefinitions.js
// Complete field definitions from DV360 SDF v9.1 documentation

export const campaignFields = {
  basic: [
    { name: 'Campaign ID', key: 'campaignId', type: 'text', disabled: true, placeholder: 'Auto-generated' },
    { name: 'Advertiser ID', key: 'advertiserId', type: 'select', required: true },
    { name: 'Name', key: 'name', type: 'text', required: true, maxLength: 255 },
    { name: 'Status', key: 'status', type: 'select', required: true },
  ],
  goal: [
    { name: 'Campaign Goal', key: 'campaignGoal', type: 'select', required: true },
    { name: 'Performance Goal Type', key: 'performanceGoalType', type: 'select' },
    { name: 'Performance Goal Value', key: 'performanceGoalValue', type: 'number', step: '0.01' },
  ],
  frequency: [
    { name: 'Frequency Enabled', key: 'frequencyEnabled', type: 'checkbox' },
    { name: 'Frequency Exposures', key: 'frequencyExposures', type: 'number' },
    { name: 'Frequency Period', key: 'frequencyPeriod', type: 'select' },
    { name: 'Frequency Amount', key: 'frequencyAmount', type: 'number' },
  ],
  dates: [
    { name: 'Campaign Start Date', key: 'startDate', type: 'date', required: true },
    { name: 'Campaign End Date', key: 'endDate', type: 'date' },
  ],
};

export const insertionOrderFields = {
  basic: [
    { name: 'IO ID', key: 'ioId', type: 'text', disabled: true, placeholder: 'Auto-generated' },
    { name: 'Campaign ID', key: 'campaignId', type: 'select', required: true },
    { name: 'Name', key: 'name', type: 'text', required: true, maxLength: 255 },
    { name: 'Status', key: 'status', type: 'select', required: true },
    { name: 'IO Type', key: 'ioType', type: 'select' },
    { name: 'Integration Code', key: 'integrationCode', type: 'text', maxLength: 255 },
    { name: 'Details', key: 'details', type: 'textarea' },
  ],
  budget: [
    { name: 'Budget Type', key: 'budgetType', type: 'select', required: true },
    { name: 'Budget Amount (Micros)', key: 'budgetAmount', type: 'number' },
    { name: 'Pacing Type', key: 'pacingType', type: 'select', required: true },
    { name: 'Pacing Period', key: 'pacingPeriod', type: 'select' },
    { name: 'Pacing Rate', key: 'pacingRate', type: 'number', step: '0.01' },
    { name: 'Auto Budget Allocation', key: 'autoBudgetAllocation', type: 'checkbox' },
  ],
  performance: [
    { name: 'Performance Goal Type', key: 'performanceGoalType', type: 'select' },
    { name: 'Performance Goal Value (Micros)', key: 'performanceGoalValue', type: 'number' },
    { name: 'Performance Goal Percentage', key: 'performanceGoalPercentage', type: 'number', step: '0.01' },
  ],
  frequency: [
    { name: 'Frequency Cap Enabled', key: 'frequencyCapEnabled', type: 'checkbox' },
    { name: 'Frequency Max Exposures', key: 'frequencyMaxExposures', type: 'number' },
    { name: 'Frequency Time Period', key: 'frequencyTimePeriod', type: 'select' },
    { name: 'Frequency Time Range', key: 'frequencyTimeRange', type: 'number' },
  ],
  dates: [
    { name: 'Start Date', key: 'startDate', type: 'date', required: true },
    { name: 'End Date', key: 'endDate', type: 'date' },
  ],
  bidding: [
    { name: 'Bidding Strategy', key: 'biddingStrategy', type: 'select' },
    { name: 'Bid Amount (Micros)', key: 'bidAmount', type: 'number' },
  ],
};

export const lineItemFields = {
  basic: [
    { name: 'Line Item ID', key: 'lineItemId', type: 'text', disabled: true, placeholder: 'Auto-generated' },
    { name: 'IO ID', key: 'ioId', type: 'select', required: true },
    { name: 'Name', key: 'name', type: 'text', required: true, maxLength: 255 },
    { name: 'Status', key: 'status', type: 'select', required: true },
    { name: 'Line Item Type', key: 'lineItemType', type: 'select', required: true },
    { name: 'Details', key: 'details', type: 'textarea' },
    { name: 'Integration Code', key: 'integrationCode', type: 'text' },
  ],
  flight: [
    { name: 'Start Date', key: 'startDate', type: 'date', required: true },
    { name: 'End Date', key: 'endDate', type: 'date' },
    { name: 'Flight Date Type', key: 'flightDateType', type: 'select' },
  ],
  budget: [
    { name: 'Budget Type', key: 'budgetType', type: 'select' },
    { name: 'Budget Amount (Micros)', key: 'budgetAmount', type: 'number' },
    { name: 'Pacing Type', key: 'pacingType', type: 'select' },
    { name: 'Pacing Rate', key: 'pacingRate', type: 'number', step: '0.01' },
    { name: 'Daily Spend Target', key: 'dailySpendTarget', type: 'number' },
  ],
  bidding: [
    { name: 'Bid Strategy Type', key: 'bidStrategyType', type: 'select', required: true },
    { name: 'Bid Amount (Micros)', key: 'bidAmount', type: 'number' },
    { name: 'Max Bid (Micros)', key: 'maxBid', type: 'number' },
    { name: 'Performance Goal Type', key: 'performanceGoalType', type: 'select' },
    { name: 'Performance Goal Value (Micros)', key: 'performanceGoalValue', type: 'number' },
    { name: 'Custom Bidding Algorithm ID', key: 'customBiddingAlgorithmId', type: 'text' },
  ],
  frequency: [
    { name: 'Frequency Cap Enabled', key: 'frequencyCapEnabled', type: 'checkbox' },
    { name: 'Max Impressions', key: 'maxImpressions', type: 'number' },
    { name: 'Time Period', key: 'timePeriod', type: 'select' },
    { name: 'Time Range', key: 'timeRange', type: 'number' },
  ],
  inventory: [
    { name: 'Inventory Source Type', key: 'inventorySourceType', type: 'select' },
    { name: 'Authorized Seller Status', key: 'authorizedSellerStatus', type: 'select' },
    { name: 'Exchange', key: 'exchange', type: 'multiselect' },
    { name: 'Inventory Source ID', key: 'inventorySourceId', type: 'text' },
  ],
  creative: [
    { name: 'Creative Rotation', key: 'creativeRotation', type: 'select' },
    { name: 'Creative Optimization', key: 'creativeOptimization', type: 'checkbox' },
    { name: 'Display Creative Serving', key: 'displayCreativeServing', type: 'select' },
  ],
  targeting: [
    { name: 'Geographic Targeting', key: 'geoTargeting', type: 'multiselect' },
    { name: 'Language Targeting', key: 'languageTargeting', type: 'multiselect' },
    { name: 'Age Range', key: 'ageRange', type: 'multiselect' },
    { name: 'Gender', key: 'gender', type: 'multiselect' },
    { name: 'Household Income', key: 'householdIncome', type: 'multiselect' },
    { name: 'Parental Status', key: 'parentalStatus', type: 'multiselect' },
  ],
  video: [
    { name: 'Video Player Size', key: 'videoPlayerSize', type: 'multiselect' },
    { name: 'Video Duration', key: 'videoDuration', type: 'select' },
    { name: 'Skippability', key: 'skippability', type: 'select' },
    { name: 'Position in Content', key: 'positionInContent', type: 'multiselect' },
  ],
  mobile: [
    { name: 'Mobile App Category', key: 'mobileAppCategory', type: 'multiselect' },
    { name: 'Mobile App ID', key: 'mobileAppId', type: 'text' },
  ],
  partner: [
    { name: 'Partner Revenue Model', key: 'partnerRevenueModel', type: 'select' },
    { name: 'Partner Revenue Amount (Micros)', key: 'partnerRevenueAmount', type: 'number' },
  ],
};

export const adGroupFields = {
  basic: [
    { name: 'Ad Group ID', key: 'adGroupId', type: 'text', disabled: true, placeholder: 'Auto-generated' },
    { name: 'Line Item ID', key: 'lineItemId', type: 'select', required: true },
    { name: 'Name', key: 'name', type: 'text', required: true, maxLength: 255 },
    { name: 'Status', key: 'status', type: 'select', required: true },
    { name: 'Ad Group Format', key: 'adGroupFormat', type: 'select', required: true },
  ],
  bidding: [
    { name: 'Bidding Strategy', key: 'biddingStrategy', type: 'select' },
    { name: 'Bid Amount (Micros)', key: 'bidAmount', type: 'number' },
    { name: 'Target CPA (Micros)', key: 'targetCpa', type: 'number' },
    { name: 'Target CPM (Micros)', key: 'targetCpm', type: 'number' },
  ],
  youtube: [
    { name: 'YouTube Search', key: 'youtubeSearch', type: 'checkbox' },
    { name: 'YouTube Videos', key: 'youtubeVideos', type: 'checkbox' },
    { name: 'YouTube Channel Pages', key: 'youtubeChannelPages', type: 'checkbox' },
    { name: 'Video Partners', key: 'videoPartners', type: 'checkbox' },
  ],
  audience: [
    { name: 'Audience Segments', key: 'audienceSegments', type: 'multiselect' },
    { name: 'Audience Expansion', key: 'audienceExpansion', type: 'select' },
    { name: 'Similar Audiences', key: 'similarAudiences', type: 'checkbox' },
    { name: 'Optimized Targeting', key: 'optimizedTargeting', type: 'checkbox' },
  ],
  demographics: [
    { name: 'Age', key: 'age', type: 'multiselect' },
    { name: 'Gender', key: 'gender', type: 'multiselect' },
    { name: 'Household Income', key: 'householdIncome', type: 'multiselect' },
    { name: 'Parental Status', key: 'parentalStatus', type: 'multiselect' },
  ],
  content: [
    { name: 'Keywords', key: 'keywords', type: 'textarea', placeholder: 'One per line' },
    { name: 'Topics', key: 'topics', type: 'multiselect' },
    { name: 'Placements', key: 'placements', type: 'textarea', placeholder: 'URLs or Channel IDs, one per line' },
  ],
  device: [
    { name: 'Device Types', key: 'deviceTypes', type: 'multiselect' },
    { name: 'Operating Systems', key: 'operatingSystems', type: 'multiselect' },
    { name: 'Browsers', key: 'browsers', type: 'multiselect' },
  ],
  location: [
    { name: 'Geographic Locations', key: 'geoLocations', type: 'multiselect' },
    { name: 'Location Lists', key: 'locationLists', type: 'multiselect' },
  ],
};

export const adGroupAdFields = {
  basic: [
    { name: 'Ad Group Ad ID', key: 'adGroupAdId', type: 'text', disabled: true, placeholder: 'Auto-generated' },
    { name: 'Ad Group ID', key: 'adGroupId', type: 'select', required: true },
    { name: 'Display Name', key: 'displayName', type: 'text', required: true },
    { name: 'Status', key: 'status', type: 'select', required: true },
    { name: 'Ad Type', key: 'adType', type: 'select', required: true },
  ],
  video: [
    { name: 'Video URL', key: 'videoUrl', type: 'text' },
    { name: 'Video Duration', key: 'videoDuration', type: 'number' },
    { name: 'Companion Banner', key: 'companionBanner', type: 'checkbox' },
  ],
  display: [
    { name: 'Creative ID', key: 'creativeId', type: 'text' },
    { name: 'Ad Size', key: 'adSize', type: 'select' },
  ],
  tracking: [
    { name: 'Tracking URL', key: 'trackingUrl', type: 'text' },
    { name: 'Third Party Tracking', key: 'thirdPartyTracking', type: 'text' },
  ],
};
