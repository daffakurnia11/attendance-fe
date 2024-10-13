# Use official Node.js image as base image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and lock files to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Create a smaller final image for production
FROM node:18-alpine AS runner

# Set environment to production
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --production

# Expose the default Next.js port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
