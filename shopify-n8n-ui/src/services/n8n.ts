import axios from 'axios';

const N8N_BASE_URL = 'https://your-n8n-instance.com'; // Replace with your N8n instance URL

export const triggerInventoryUpdate = async (item) => {
    try {
        const response = await axios.post(`${N8N_BASE_URL}/webhook/inventory-update`, item);
        return response.data;
    } catch (error) {
        console.error('Error triggering inventory update:', error);
        throw error;
    }
};

export const handleWebhookResponse = async (data) => {
    try {
        // Process the webhook response data as needed
        console.log('Received webhook response:', data);
        // Implement any additional logic here
    } catch (error) {
        console.error('Error handling webhook response:', error);
        throw error;
    }
};