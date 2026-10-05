# ---- Stage 1: Build the React app ----
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies first (better layer caching — only reinstalls if
# package.json changes, not on every code edit)
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the source and build the production bundle
COPY . .
RUN npm run build

# ---- Stage 2: Serve the built files with Nginx ----
FROM nginx:alpine

# Remove Nginx's default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy our built app from the "build" stage into Nginx's serving folder
COPY --from=build /app/dist /usr/share/nginx/html

# Custom Nginx config (handles React Router-style refresh on any route)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
