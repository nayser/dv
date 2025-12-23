// src/data/dropdownOptions.js
// Complete enum values from DV360 SDF v9.1 documentation

export const statusOptions = [
  { value: 'ACTIVE', label: 'Active' },
  { value: 'PAUSED', label: 'Paused' },
  { value: 'DRAFT', label: 'Draft' },
  { value: 'ARCHIVED', label: 'Archived' },
];

export const campaignGoalOptions = [
  { value: 'BRAND_AWARENESS', label: 'Brand Awareness' },
  { value: 'REACH', label: 'Reach' },
  { value: 'TRAFFIC', label: 'Traffic' },
  { value: 'CONVERSIONS', label: 'Conversions' },
  { value: 'APP_INSTALLS', label: 'App Installs' },
  { value: 'ENGAGEMENT', label: 'Engagement' },
  { value: 'OFFLINE_ACTION', label: 'Offline Action' },
];

export const performanceGoalTypeOptions = [
  { value: 'CPM', label: 'CPM (Cost per thousand impressions)' },
  { value: 'CPC', label: 'CPC (Cost per click)' },
  { value: 'CPA', label: 'CPA (Cost per acquisition)' },
  { value: 'CPV', label: 'CPV (Cost per view)' },
  { value: 'VCPM', label: 'vCPM (Viewable CPM)' },
  { value: 'CPCV', label: 'CPCV (Cost per completed view)' },
  { value: 'CPE', label: 'CPE (Cost per engagement)' },
  { value: 'CTR', label: 'CTR (Click-through rate)' },
  { value: 'VTR', label: 'VTR (View-through rate)' },
  { value: 'ROAS', label: 'ROAS (Return on ad spend)' },
];

export const frequencyPeriodOptions = [
  { value: 'LIFETIME', label: 'Lifetime' },
  { value: 'MONTHS', label: 'Month(s)' },
  { value: 'WEEKS', label: 'Week(s)' },
  { value: 'DAYS', label: 'Day(s)' },
  { value: 'HOURS', label: 'Hour(s)' },
  { value: 'MINUTES', label: 'Minute(s)' },
];

export const ioTypeOptions = [
  { value: 'STANDARD', label: 'Standard' },
  { value: 'PROGRAMMATIC_GUARANTEED', label: 'Programmatic Guaranteed' },
];

export const budgetTypeOptions = [
  { value: 'INSERTION_ORDER', label: 'Insertion Order Budget' },
  { value: 'DAILY', label: 'Daily Budget' },
  { value: 'FLIGHT', label: 'Flight Budget' },
  { value: 'UNLIMITED', label: 'Unlimited' },
];

export const pacingTypeOptions = [
  { value: 'EVEN', label: 'Even' },
  { value: 'ASAP', label: 'As Fast As Possible (ASAP)' },
  { value: 'FRONT_LOADED', label: 'Front Loaded' },
];

export const lineItemTypeOptions = [
  { value: 'DISPLAY_DEFAULT', label: 'Display - Default' },
  { value: 'DISPLAY_MOBILE_APP_INSTALL', label: 'Display - Mobile App Install' },
  { value: 'VIDEO_DEFAULT', label: 'Video - Default' },
  { value: 'VIDEO_MOBILE_APP_INSTALL', label: 'Video - Mobile App Install' },
  { value: 'VIDEO_OVER_THE_TOP', label: 'Video - Over The Top (OTT)' },
  { value: 'AUDIO_DEFAULT', label: 'Audio - Default' },
  { value: 'YOUTUBE_AND_PARTNERS_ACTION', label: 'YouTube & Partners - Action' },
  { value: 'YOUTUBE_AND_PARTNERS_NON_SKIPPABLE', label: 'YouTube & Partners - Non-Skippable' },
  { value: 'YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE', label: 'YouTube & Partners - Video Sequence' },
  { value: 'YOUTUBE_AND_PARTNERS_AUDIO', label: 'YouTube & Partners - Audio' },
  { value: 'YOUTUBE_AND_PARTNERS_REACH', label: 'YouTube & Partners - Reach' },
  { value: 'YOUTUBE_AND_PARTNERS_SIMPLE', label: 'YouTube & Partners - Simple' },
  { value: 'YOUTUBE_AND_PARTNERS_TARGET_FREQUENCY', label: 'YouTube & Partners - Target Frequency' },
  { value: 'YOUTUBE_AND_PARTNERS_VIEW', label: 'YouTube & Partners - View' },
];

export const bidStrategyTypeOptions = [
  { value: 'FIXED_BID', label: 'Fixed Bid' },
  { value: 'MAXIMIZE_CONVERSIONS', label: 'Maximize Conversions' },
  { value: 'MAXIMIZE_SPEND', label: 'Maximize Spend' },
  { value: 'TARGET_CPA', label: 'Target CPA' },
  { value: 'TARGET_CPC', label: 'Target CPC' },
  { value: 'TARGET_CPM', label: 'Target CPM' },
  { value: 'TARGET_ROAS', label: 'Target ROAS' },
  { value: 'VIEWABLE_CPM', label: 'Viewable CPM (vCPM)' },
  { value: 'TARGET_IMPRESSION_SHARE', label: 'Target Impression Share' },
  { value: 'LOWEST_COST_PER_VIEW', label: 'Lowest Cost Per View' },
  { value: 'LOWEST_COST_PER_IMPRESSION', label: 'Lowest Cost Per Impression' },
  { value: 'TARGET_CPV', label: 'Target CPV' },
  { value: 'MAXIMIZE_LIFT', label: 'Maximize Lift' },
  { value: 'CUSTOM_BIDDING', label: 'Custom Bidding Algorithm' },
  { value: 'YOUTUBE_AND_PARTNERS_MAX_CONVERSIONS', label: 'YouTube - Max Conversions' },
  { value: 'YOUTUBE_AND_PARTNERS_TARGET_CPA', label: 'YouTube - Target CPA' },
  { value: 'YOUTUBE_AND_PARTNERS_TARGET_CPM', label: 'YouTube - Target CPM' },
  { value: 'YOUTUBE_AND_PARTNERS_TARGET_ROAS', label: 'YouTube - Target ROAS' },
];

export const inventorySourceTypeOptions = [
  { value: 'OPEN_AUCTION', label: 'Open Auction' },
  { value: 'PRIVATE_AUCTION', label: 'Private Auction' },
  { value: 'PREFERRED_DEAL', label: 'Preferred Deal' },
  { value: 'PROGRAMMATIC_GUARANTEED', label: 'Programmatic Guaranteed' },
  { value: 'AUCTION_PACKAGE', label: 'Auction Package' },
];

export const authorizedSellerStatusOptions = [
  { value: 'AUTHORIZED_DIRECT_SELLERS_AND_RESELLERS', label: 'Authorized Direct Sellers and Resellers' },
  { value: 'AUTHORIZED_DIRECT_SELLERS_ONLY', label: 'Authorized Direct Sellers Only' },
];

export const exchangeOptions = [
  { value: 'GOOGLE_AD_MANAGER', label: 'Google Ad Manager' },
  { value: 'APPNEXUS', label: 'AppNexus (Xandr)' },
  { value: 'BRIGHTROLL', label: 'BrightRoll' },
  { value: 'ADFORM', label: 'Adform' },
  { value: 'ADMETA', label: 'Admeta' },
  { value: 'ADMIXER', label: 'Admixer' },
  { value: 'ADSMOVIL', label: 'Adsmovil' },
  { value: 'ADSWIZZ', label: 'AdsWizz' },
  { value: 'BIDSWITCH', label: 'Bidswitch' },
  { value: 'BRIGHTROLL', label: 'BrightRoll' },
  { value: 'INDEX_EXCHANGE', label: 'Index Exchange' },
  { value: 'MAGNITE', label: 'Magnite (Rubicon)' },
  { value: 'OPENX', label: 'OpenX' },
  { value: 'PUBMATIC', label: 'PubMatic' },
  { value: 'SHARETHROUGH', label: 'Sharethrough' },
  { value: 'SMARTADSERVER', label: 'Smart AdServer' },
  { value: 'SOVRN', label: 'Sovrn' },
  { value: 'TRIPLELIFT', label: 'TripleLift' },
  { value: 'UNITY', label: 'Unity' },
  { value: 'VERIZON_MEDIA', label: 'Verizon Media' },
];

export const creativeRotationOptions = [
  { value: 'OPTIMIZED', label: 'Optimized' },
  { value: 'SEQUENTIAL', label: 'Sequential' },
  { value: 'EVEN', label: 'Even Rotation' },
];

export const ageRangeOptions = [
  { value: 'AGE_RANGE_18_24', label: '18-24' },
  { value: 'AGE_RANGE_25_34', label: '25-34' },
  { value: 'AGE_RANGE_35_44', label: '35-44' },
  { value: 'AGE_RANGE_45_54', label: '45-54' },
  { value: 'AGE_RANGE_55_64', label: '55-64' },
  { value: 'AGE_RANGE_65_PLUS', label: '65+' },
  { value: 'AGE_RANGE_UNKNOWN', label: 'Unknown' },
];

export const genderOptions = [
  { value: 'MALE', label: 'Male' },
  { value: 'FEMALE', label: 'Female' },
  { value: 'UNKNOWN', label: 'Unknown' },
];

export const householdIncomeOptions = [
  { value: 'HOUSEHOLD_INCOME_TOP_10_PERCENT', label: 'Top 10%' },
  { value: 'HOUSEHOLD_INCOME_11_TO_20_PERCENT', label: '11-20%' },
  { value: 'HOUSEHOLD_INCOME_21_TO_30_PERCENT', label: '21-30%' },
  { value: 'HOUSEHOLD_INCOME_31_TO_40_PERCENT', label: '31-40%' },
  { value: 'HOUSEHOLD_INCOME_41_TO_50_PERCENT', label: '41-50%' },
  { value: 'HOUSEHOLD_INCOME_LOWER_50_PERCENT', label: 'Lower 50%' },
  { value: 'HOUSEHOLD_INCOME_UNKNOWN', label: 'Unknown' },
];

export const parentalStatusOptions = [
  { value: 'PARENT', label: 'Parent' },
  { value: 'NOT_A_PARENT', label: 'Not a Parent' },
  { value: 'PARENTAL_STATUS_UNKNOWN', label: 'Unknown' },
];

export const videoPlayerSizeOptions = [
  { value: 'SMALL', label: 'Small' },
  { value: 'LARGE', label: 'Large' },
  { value: 'HD', label: 'HD' },
  { value: 'UNKNOWN', label: 'Unknown' },
];

export const adGroupFormatOptions = [
  { value: 'IN_STREAM_SKIPPABLE', label: 'Video - In-Stream Skippable' },
  { value: 'IN_STREAM_NON_SKIPPABLE', label: 'Video - In-Stream Non-Skippable' },
  { value: 'IN_FEED_VIDEO', label: 'Video - In-Feed' },
  { value: 'BUMPER', label: 'Video - Bumper' },
  { value: 'OUT_STREAM', label: 'Video - Out-Stream' },
  { value: 'MASTHEAD', label: 'Video - Masthead' },
  { value: 'RESPONSIVE_DISPLAY', label: 'Display - Responsive' },
  { value: 'NATIVE_DISPLAY', label: 'Display - Native' },
];

export const audienceExpansionOptions = [
  { value: 'OFF', label: 'Off' },
  { value: 'CONSERVATIVE', label: 'Conservative' },
  { value: 'MODERATE', label: 'Moderate' },
  { value: 'AGGRESSIVE', label: 'Aggressive' },
];

export const topicsOptions = [
  { value: 'ARTS_ENTERTAINMENT', label: 'Arts & Entertainment' },
  { value: 'AUTOMOTIVE', label: 'Automotive' },
  { value: 'BEAUTY_FITNESS', label: 'Beauty & Fitness' },
  { value: 'BOOKS_LITERATURE', label: 'Books & Literature' },
  { value: 'BUSINESS_INDUSTRIAL', label: 'Business & Industrial' },
  { value: 'COMPUTERS_ELECTRONICS', label: 'Computers & Electronics' },
  { value: 'FINANCE', label: 'Finance' },
  { value: 'FOOD_DRINK', label: 'Food & Drink' },
  { value: 'GAMES', label: 'Games' },
  { value: 'HEALTH', label: 'Health' },
  { value: 'HOBBIES_LEISURE', label: 'Hobbies & Leisure' },
  { value: 'HOME_GARDEN', label: 'Home & Garden' },
  { value: 'INTERNET_TELECOM', label: 'Internet & Telecom' },
  { value: 'JOBS_EDUCATION', label: 'Jobs & Education' },
  { value: 'LAW_GOVERNMENT', label: 'Law & Government' },
  { value: 'NEWS', label: 'News' },
  { value: 'ONLINE_COMMUNITIES', label: 'Online Communities' },
  { value: 'PEOPLE_SOCIETY', label: 'People & Society' },
  { value: 'PETS_ANIMALS', label: 'Pets & Animals' },
  { value: 'REAL_ESTATE', label: 'Real Estate' },
  { value: 'REFERENCE', label: 'Reference' },
  { value: 'SCIENCE', label: 'Science' },
  { value: 'SHOPPING', label: 'Shopping' },
  { value: 'SPORTS', label: 'Sports' },
  { value: 'TRAVEL', label: 'Travel' },
];

export const deviceTypeOptions = [
  { value: 'DESKTOP', label: 'Desktop' },
  { value: 'MOBILE', label: 'Mobile' },
  { value: 'TABLET', label: 'Tablet' },
  { value: 'CONNECTED_TV', label: 'Connected TV' },
];

export const operatingSystemOptions = [
  { value: 'ANDROID', label: 'Android' },
  { value: 'IOS', label: 'iOS' },
  { value: 'WINDOWS', label: 'Windows' },
  { value: 'MAC_OS', label: 'Mac OS' },
  { value: 'LINUX', label: 'Linux' },
  { value: 'CHROME_OS', label: 'Chrome OS' },
];

export const browserOptions = [
  { value: 'CHROME', label: 'Chrome' },
  { value: 'FIREFOX', label: 'Firefox' },
  { value: 'SAFARI', label: 'Safari' },
  { value: 'EDGE', label: 'Edge' },
  { value: 'OPERA', label: 'Opera' },
  { value: 'IE', label: 'Internet Explorer' },
];

export const adTypeOptions = [
  { value: 'DISPLAY_AD', label: 'Display Ad' },
  { value: 'VIDEO_AD', label: 'Video Ad' },
  { value: 'AUDIO_AD', label: 'Audio Ad' },
  { value: 'NATIVE_AD', label: 'Native Ad' },
];

export const adSizeOptions = [
  { value: '300x250', label: '300x250 (Medium Rectangle)' },
  { value: '728x90', label: '728x90 (Leaderboard)' },
  { value: '160x600', label: '160x600 (Wide Skyscraper)' },
  { value: '300x600', label: '300x600 (Half Page)' },
  { value: '320x50', label: '320x50 (Mobile Banner)' },
  { value: '320x100', label: '320x100 (Mobile Large Banner)' },
  { value: '468x60', label: '468x60 (Banner)' },
  { value: '970x250', label: '970x250 (Billboard)' },
  { value: '970x90', label: '970x90 (Large Leaderboard)' },
];
