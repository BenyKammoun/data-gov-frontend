# Use Node.js 18 Alpine as base image
FROM node:18-alpine AS base

# 1. Install dependencies if needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
# Set the working directory
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Development stage
FROM base AS development
# Set the working directory
WORKDIR /app
# Copy the entire project directory
COPY . .

# Expose port for development
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME localhost

# Run Next.js in development mode
CMD ["yarn", "dev"]
