# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Install deps first for better caching
COPY package*.json ./
# If you use pnpm or yarn, swap to the right installer
RUN npm ci

# Copy source and build
COPY . .

ARG VITE_DIRECTUS_URL=http://directus:8055
RUN npm run build

# ---- Runtime stage (Caddy) ----
FROM caddy:2.8-alpine

# Caddy looks for its config here
COPY deployment/Caddyfile /etc/caddy/Caddyfile

COPY --from=build /app/dist/ /srv

# Caddy runs as non-root user by default
EXPOSE 80
