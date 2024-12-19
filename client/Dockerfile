# Base image for Node.js (used for building Angular app)
FROM node:22-alpine as dev

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the development port
EXPOSE 80

# Default command for development
CMD ["npm", "start", "--", "--port=80"]

# Production stage
FROM nginx:1.27-alpine as prod

# Set working directory in Nginx
WORKDIR /usr/share/nginx/html

# Copy the built Angular app from the dev stage
COPY --from=dev /app/dist/ ./

# Expose the production port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
