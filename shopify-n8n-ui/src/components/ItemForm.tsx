import React, { useState } from 'react';
import { createItem } from '../services/api';
import { Item } from '../types';

const ItemForm: React.FC = () => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!itemName || !itemPrice) {
            setError('Item name and price are required.');
            return;
        }

        const newItem: Item = {
            name: itemName,
            price: parseFloat(itemPrice),
            description: itemDescription,
        };

        try {
            await createItem(newItem);
            setItemName('');
            setItemPrice('');
            setItemDescription('');
        } catch (err) {
            setError('Failed to create item. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="itemName">Item Name:</label>
                <input
                    type="text"
                    id="itemName"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="itemPrice">Item Price:</label>
                <input
                    type="number"
                    id="itemPrice"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="itemDescription">Item Description:</label>
                <textarea
                    id="itemDescription"
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Add Item</button>
        </form>
    );
};

export default ItemForm;