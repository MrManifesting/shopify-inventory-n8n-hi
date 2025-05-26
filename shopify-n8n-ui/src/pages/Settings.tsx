import React, { useState } from 'react';

const Settings: React.FC = () => {
    const [shopifyApiKey, setShopifyApiKey] = useState('');
    const [n8nWebhookUrl, setN8nWebhookUrl] = useState('');

    const handleSaveSettings = () => {
        // Logic to save settings (e.g., to local storage or a backend)
        console.log('Settings saved:', { shopifyApiKey, n8nWebhookUrl });
    };

    return (
        <div>
            <h1>Settings</h1>
            <div>
                <label>
                    Shopify API Key:
                    <input
                        type="text"
                        value={shopifyApiKey}
                        onChange={(e) => setShopifyApiKey(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    N8n Webhook URL:
                    <input
                        type="text"
                        value={n8nWebhookUrl}
                        onChange={(e) => setN8nWebhookUrl(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleSaveSettings}>Save Settings</button>
        </div>
    );
};

export default Settings;