import React, { useState } from 'react';
import { updateItemStatus } from '../services/api';

const StatusUpdater = ({ itemId, currentStatus }) => {
    const [status, setStatus] = useState(currentStatus);

    const handleStatusChange = async (newStatus) => {
        setStatus(newStatus);
        try {
            await updateItemStatus(itemId, newStatus);
            // Optionally, trigger any additional workflows or updates here
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    return (
        <div>
            <h3>Update Status</h3>
            <select value={status} onChange={(e) => handleStatusChange(e.target.value)}>
                <option value="draft">Draft</option>
                <option value="listed">Listed</option>
                <option value="new">New</option>
            </select>
        </div>
    );
};

export default StatusUpdater;