import React from 'react';
import InventoryList from '../components/InventoryList';
import StatusUpdater from '../components/StatusUpdater';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Inventory Dashboard</h1>
            <InventoryList />
            <StatusUpdater />
        </div>
    );
};

export default Dashboard;