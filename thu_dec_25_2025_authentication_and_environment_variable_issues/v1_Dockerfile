# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY .  .

# Build arguments for environment variables
ARG GEMINI_API_KEY
ARG GOOGLE_CLIENT_ID
ARG SHOPIFY_STORE_URL
ARG SHOPIFY_STOREFRONT_ACCESS_TOKEN
ARG SHOPIFY_ADMIN_ACCESS_TOKEN
ARG DATABASE_URL
ARG TELEGRAM_BOT_TOKEN
ARG SLACK_WEBHOOK

# Set environment variables for build
ENV VITE_GEMINI_API_KEY=$GEMINI_API_KEY
ENV VITE_GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV VITE_SHOPIFY_STORE_URL=$SHOPIFY_STORE_URL
ENV VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=$SHOPIFY_STOREFRONT_ACCESS_TOKEN
ENV VITE_SHOPIFY_ADMIN_ACCESS_TOKEN=$SHOPIFY_ADMIN_ACCESS_TOKEN
ENV VITE_DATABASE_URL=$DATABASE_URL
ENV VITE_TELEGRAM_BOT_TOKEN=$TELEGRAM_BOT_TOKEN
ENV VITE_SLACK_WEBHOOK=$SLACK_WEBHOOK

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 8080 (Cloud Run requirement)
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]