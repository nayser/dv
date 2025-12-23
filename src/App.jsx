// src/App.jsx - Complete DV360 Practice UI
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Search, Plus, Filter, Download, Upload, Home, Users, Image, Package, BarChart3, Settings, Clock } from 'lucide-react';
import { Modal } from './components/shared/Modal';
import { CampaignForm } from './components/forms/CampaignForm';
import { InsertionOrderForm } from './components/forms/InsertionOrderForm';
import { LineItemForm } from './components/forms/LineItemForm';
import { AdGroupForm } from './components/forms/AdGroupForm';
import { AdGroupAdForm } from './components/forms/AdGroupAdForm';

const DV360App = () => {
  const [activeModule, setActiveModule] = useState('campaigns');
  const [activeView, setActiveView] = useState('campaigns');
  const [expandedSections, setExpandedSections] = useState({ campaigns: true });
  const [showModal, setShowModal] = useState(null);
  const [modalSize, setModalSize] = useState('large');

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const openModal = (type, size = 'large') => {
    setShowModal(type);
    setModalSize(size);
  };

  const leftNavItems = [
    {
      id: 'campaigns',
      icon: <Home className="w-4 h-4" />,
      label: 'Campaigns',
      subItems: [
        { id: 'campaigns', label: 'Campaigns' },
        { id: 'insertionOrders', label: 'Insertion Orders' },
        { id: 'lineItems', label: 'Line Items' },
        { id: 'adGroups', label: 'Ad Groups' },
        { id: 'adGroupAds', label: 'Ad Group Ads' },
      ]
    },
    {
      id: 'audiences',
      icon: <Users className="w-4 h-4" />,
      label: 'Audiences',
      subItems: [
        { id: 'allAudiences', label: 'All Audiences' },
        { id: 'analysis', label: 'Analysis' }
      ]
    },
    {
      id: 'creative',
      icon: <Image className="w-4 h-4" />,
      label: 'Creative',
      subItems: [
        { id: 'creatives', label: 'Creatives' },
        { id: 'previewSheets', label: 'Preview Sheets' },
        { id: 'formatGallery', label: 'Format Gallery' }
      ]
    },
    {
      id: 'inventory',
      icon: <Package className="w-4 h-4" />,
      label: 'Inventory',
      subItems: [
        { id: 'marketplace', label: 'Marketplace' },
        { id: 'myInventory', label: 'My Inventory' }
      ]
    },
    {
      id: 'reports',
      icon: <BarChart3 className="w-4 h-4" />,
      label: 'Reports',
      subItems: [
        { id: 'instantReporting', label: 'Instant Reporting' },
        { id: 'offlineReports', label: 'Offline Reports' }
      ]
    },
    {
      id: 'settings',
      icon: <Settings className="w-4 h-4" />,
      label: 'Advertiser Settings'
    },
    {
      id: 'history',
      icon: <Clock className="w-4 h-4" />,
      label: 'History'
    }
  ];

  const renderModalContent = () => {
    switch(showModal) {
      case 'campaign':
        return <CampaignForm />;
      case 'io':
        return <InsertionOrderForm />;
      case 'lineitem':
        return <LineItemForm />;
      case 'adgroup':
        return <AdGroupForm />;
      case 'adgroupad':
        return <AdGroupAdForm />;
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    const titles = {
      campaign: 'New Campaign',
      io: 'New Insertion Order',
      lineitem: 'New Line Item',
      adgroup: 'New Ad Group',
      adgroupad: 'New Ad Group Ad',
    };
    return titles[showModal] || '';
  };

  const renderView = () => {
    const viewConfig = {
      campaigns: {
        title: 'Campaigns',
        buttonLabel: 'NEW CAMPAIGN',
        modalType: 'campaign',
        columns: ['Campaign', 'Status', 'Budget', 'Spent', 'KPI Goal', 'KPI Actual'],
        data: [
          { id: '1', name: '2023 Privacy/GA4 E-book Campaign', status: 'Active', budget: '$10,000', spent: '$2,500', kpiGoal: '$75.00 CPA', kpiActual: '$68.50 CPA' },
        ]
      },
      insertionOrders: {
        title: 'Insertion Orders',
        buttonLabel: 'NEW INSERTION ORDER',
        modalType: 'io',
        columns: ['Insertion Order', 'Campaign', 'Status', 'Budget', 'Pacing'],
        data: [
          { id: '1', name: 'Q4 Brand Awareness IO', campaign: 'Privacy Campaign', status: 'Active', budget: '$5,000', pacing: 'Even' },
        ]
      },
      lineItems: {
        title: 'Line Items',
        buttonLabel: 'NEW LINE ITEM',
        modalType: 'lineitem',
        columns: ['Line Item', 'IO', 'Type', 'Status', 'Budget', 'Bid Strategy'],
        data: [
          { id: '1', name: 'Display - Desktop LI', io: 'Q4 IO', type: 'Display', status: 'Active', budget: '$2,000', bidStrategy: 'Target CPM' },
        ]
      },
      adGroups: {
        title: 'Ad Groups',
        buttonLabel: 'NEW AD GROUP',
        modalType: 'adgroup',
        columns: ['Ad Group', 'Line Item', 'Format', 'Status', 'Bid Strategy'],
        data: [
          { id: '1', name: 'YouTube In-Stream AG', lineItem: 'Video LI', format: 'In-Stream', status: 'Active', bidStrategy: 'Target CPV' },
        ]
      },
      adGroupAds: {
        title: 'Ad Group Ads',
        buttonLabel: 'NEW AD GROUP AD',
        modalType: 'adgroupad',
        columns: ['Ad', 'Ad Group', 'Type', 'Status', 'Impressions', 'Clicks'],
        data: [
          { id: '1', name: 'Video Ad 1', adGroup: 'YouTube AG', type: 'Video', status: 'Active', impressions: '12,500', clicks: '325' },
        ]
      }
    };

    const config = viewConfig[activeView];
    if (!config) {
      return (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg mb-2">{activeView.charAt(0).toUpperCase() + activeView.slice(1)}</p>
          <p className="text-sm">This view is available</p>
        </div>
      );
    }

    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">{config.title}</h2>
          <button
            onClick={() => openModal(config.modalType, 'xlarge')}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            {config.buttonLabel}
          </button>
        </div>

        <div className="bg-white rounded-lg border">
          <div className="p-4 border-b flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Filter className="w-4 h-4 text-gray-600" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left">
                  <input type="checkbox" />
                </th>
                {config.columns.map((col, idx) => (
                  <th key={idx} className="p-3 text-left text-sm font-medium text-gray-700">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {config.data.map((row, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  {Object.keys(row).filter(k => k !== 'id').map((key, i) => (
                    <td key={i} className="p-3 text-sm">
                      {i === 0 ? (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-blue-600 hover:underline cursor-pointer">{row[key]}</span>
                        </div>
                      ) : (
                        row[key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Navigation */}
      <div className="w-64 bg-white border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold">▶</div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Display & Video 360</div>
              <div className="text-xs text-gray-500">Practice Interface</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-2">
          {leftNavItems.map(item => (
            <div key={item.id} className="mb-1">
              <button
                onClick={() => {
                  if (item.subItems) {
                    toggleSection(item.id);
                  } else {
                    setActiveModule(item.id);
                    setActiveView(item.id);
                  }
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition-colors ${
                  activeModule === item.id ? 'bg-green-50 text-green-700' : 'text-gray-700'
                }`}
              >
                {item.icon}
                <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
                {item.subItems && (
                  expandedSections[item.id] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {item.subItems && expandedSections[item.id] && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.subItems.map(sub => (
                    <button
                      key={sub.id}
                      onClick={() => {
                        setActiveModule(item.id);
                        setActiveView(sub.id);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 transition-colors ${
                        activeView === sub.id ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-600'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t">
          <div className="text-xs text-gray-500">
            <div className="font-semibold text-gray-700 mb-1">AdSwerve Internal</div>
            <div>Advertiser ID: 12345</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b px-6 py-3 flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Partner</span>
            <ChevronRight className="w-3 h-3" />
            <span>Advertiser</span>
            <ChevronRight className="w-3 h-3" />
            <span className="font-medium text-gray-900">AdSwerve Internal</span>
          </div>

          <div className="flex-1 flex items-center gap-2 max-w-2xl mx-4">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns, line items, or use AI search..."
              className="flex-1 outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded transition-colors" title="Upload SDF">
              <Upload className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded transition-colors" title="Download SDF">
              <Download className="w-4 h-4 text-gray-600" />
            </button>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              U
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {renderView()}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <Modal
          isOpen={!!showModal}
          onClose={() => setShowModal(null)}
          title={getModalTitle()}
          size={modalSize}
          onSave={() => {
            console.log('Save clicked');
            setShowModal(null);
          }}
        >
          {renderModalContent()}
        </Modal>
      )}
    </div>
  );
};

export default DV360App;
