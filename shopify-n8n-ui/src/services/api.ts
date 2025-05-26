import axios from 'axios';

const SHOPIFY_API_URL = 'https://your-shopify-store.myshopify.com/admin/api/2023-01/';
const GOOGLE_SHEETS_API_URL = 'https://sheets.googleapis.com/v4/spreadsheets/';
const API_KEY = 'your_api_key'; // Replace with your actual API key
const GOOGLE_SHEETS_ID = 'your_google_sheets_id'; // Replace with your actual Google Sheets ID

export const fetchInventory = async () => {
    try {
        const response = await axios.get(`${SHOPIFY_API_URL}products.json`, {
            headers: {
                'X-Shopify-Access-Token': API_KEY,
            },
        });
        return response.data.products;
    } catch (error) {
        console.error('Error fetching inventory:', error);
        throw error;
    }
};

export const updateItemStatus = async (productId, status) => {
    try {
        const response = await axios.put(`${SHOPIFY_API_URL}products/${productId}.json`, {
            product: {
                id: productId,
                status: status,
            },
        }, {
            headers: {
                'X-Shopify-Access-Token': API_KEY,
            },
        });
        return response.data.product;
    } catch (error) {
        console.error('Error updating item status:', error);
        throw error;
    }
};

export const createNewItem = async (itemData) => {
    try {
        const response = await axios.post(`${SHOPIFY_API_URL}products.json`, {
            product: itemData,
        }, {
            headers: {
                'X-Shopify-Access-Token': API_KEY,
            },
        });
        return response.data.product;
    } catch (error) {
        console.error('Error creating new item:', error);
        throw error;
    }
};

export const addItemToGoogleSheets = async (itemData) => {
    try {
        const response = await axios.post(`${GOOGLE_SHEETS_API_URL}${GOOGLE_SHEETS_ID}/values/Sheet1:append?valueInputOption=RAW`, {
            values: [itemData],
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding item to Google Sheets:', error);
        throw error;
    }
};