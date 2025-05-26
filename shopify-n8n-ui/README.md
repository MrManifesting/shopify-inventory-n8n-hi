# Shopify N8n UI

## Overview
The Shopify N8n UI is a web application designed to automate inventory and sales management for Shopify stores using N8n, Google Sheets, and OpenAI. This application allows users to manage their inventory seamlessly, ensuring that any updates made in Google Sheets are reflected in Shopify as drafts, and can be published live with a status change.

## Features
- **Inventory Management**: View and manage inventory items fetched directly from the Shopify store.
- **Item Addition**: Add new items to the inventory through a user-friendly form that integrates with Google Sheets.
- **Status Updates**: Change the status of inventory items, triggering updates to the Shopify store.
- **Dashboard**: A comprehensive dashboard that displays overall inventory statistics and item statuses.
- **Settings Configuration**: Configure application settings, including API keys and webhook URLs for N8n and Shopify.

## Project Structure
```
shopify-n8n-ui
├── src
│   ├── components
│   │   ├── InventoryList.tsx
│   │   ├── ItemForm.tsx
│   │   └── StatusUpdater.tsx
│   ├── pages
│   │   ├── Dashboard.tsx
│   │   └── Settings.tsx
│   ├── services
│   │   ├── api.ts
│   │   └── n8n.ts
│   ├── utils
│   │   └── helpers.ts
│   ├── App.tsx
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd shopify-n8n-ui
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the application.

## Integration
- **Google Sheets**: The application integrates with Google Sheets to manage inventory data.
- **Shopify API**: Utilizes the Shopify API for inventory management and updates.
- **N8n Workflows**: Triggers workflows in N8n for automation based on inventory changes.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.