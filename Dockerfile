# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:18-alpine

# Set the working directory
WORKDIR /src/app

# Install pnpm
RUN npm install -g pnpm

# Copy the package.json and pnpm-lock.yaml files to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN pnpm build

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["pnpm", "start"]
