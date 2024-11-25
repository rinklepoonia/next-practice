"use client";
import { TABS_DATA_LIST } from '@/utils/helper';
import React, { useState } from 'react';


const MyAccount = () => {
    const [activeTab, setActiveTab] = useState('profile'); // State to track active tab

    const renderTabContent = () => {
        const activeTabObj = TABS_DATA_LIST.find(tab => tab.id === activeTab);
        return activeTabObj ? activeTabObj.component : null;
    };

    return (
        <div className='flex gap-[200px]'>
            {/* Tab Navigation */}
            <div className='space-y-4'>
                {TABS_DATA_LIST.map(tab => (
                    <p
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`cursor-pointer ${activeTab === tab.id ? 'font-bold bg-white text-black' : ''}`}
                    >
                        {tab.label}
                    </p>
                ))}
            </div>

            {/* Tab Content */}
            <div className='flex-1'>
                {renderTabContent()}
            </div>
        </div>
    );
};

export default MyAccount;
