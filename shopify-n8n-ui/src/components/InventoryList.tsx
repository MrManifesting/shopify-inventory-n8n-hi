import React, { useEffect, useState } from 'react';
import { fetchInventory, updateItemStatus } from '../services/api';
import { InventoryItem } from '../types';

const InventoryList: React.FC = () => {
    const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadInventoryItems = async () => {
            try {
                const items = await fetchInventory();
                setInventoryItems(items);
            } catch (err) {
                setError('Failed to load inventory items.');
            } finally {
                setLoading(false);
            }
        };

        loadInventoryItems();
    }, []);

    const handleStatusChange = async (itemId: string, newStatus: "draft" | "listed" | "new") => {
        try {
            await updateItemStatus(itemId, newStatus);
            setInventoryItems(prevItems =>
                prevItems.map(item =>
                    item.id === itemId ? { ...item, status: newStatus } : item
                )
            );
        } catch (err) {
            setError('Failed to update item status.');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Inventory List</h2>
            <ul>
                {inventoryItems.map(item => (
                    <li key={item.id}>
                        <span>{item.title} - {item.status}</span>
                        <button onClick={() => handleStatusChange(item.id, 'listed')}>List</button>
                        <button onClick={() => handleStatusChange(item.id, 'draft')}>Draft</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryList;