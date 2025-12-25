import React, { createContext, useContext, ReactNode } from 'react';

interface AppConfig {
  shopifyDomain: string;
  shopifyStorefrontToken: string;
  shopifyAdminToken: string;
  googleClientId: string;
  geminiApiKey: string;
  databaseUrl: string;
  telegramBotToken: string;
  slackWebhook: string;
}

const ConfigContext = createContext<AppConfig | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const config:  AppConfig = {
    shopifyDomain: import.meta.env.VITE_SHOPIFY_STORE_URL || '',
    shopifyStorefrontToken:  import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
    shopifyAdminToken: import.meta.env.VITE_SHOPIFY_ADMIN_ACCESS_TOKEN || '',
    googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
    geminiApiKey: import.meta. env.VITE_GEMINI_API_KEY || '',
    databaseUrl: import.meta.env.VITE_DATABASE_URL || '',
    telegramBotToken: import.meta. env.VITE_TELEGRAM_BOT_TOKEN || '',
    slackWebhook: import.meta.env.VITE_SLACK_WEBHOOK || '',
  };

  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within ConfigProvider');
  }
  return context;
};