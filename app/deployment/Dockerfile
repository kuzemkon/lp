# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Install deps first for better caching
COPY package*.json ./
# If you use pnpm or yarn, swap to the right installer
RUN npm ci

# Copy source and build
COPY . .
# Override if your build command is different (e.g. "vite build")
ARG BUILD_CMD=build
RUN npm run ${BUILD_CMD}

# ---- Runtime stage (Caddy) ----
FROM caddy:2.8-alpine

# Caddy looks for its config here
COPY deployment/Caddyfile /etc/caddy/Caddyfile

# Copy the compiled app into Caddy's web root
# CRA => BUILD_DIR=build, Vite => BUILD_DIR=dist
ARG BUILD_DIR=dist
COPY --from=build /app/${BUILD_DIR}/ /srv

# Caddy runs as non-root user by default
EXPOSE 80
