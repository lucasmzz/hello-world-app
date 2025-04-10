# Step 1: Build the app
FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install && VITE_API_URL=/orders npm run build

# Step 2: Serve it with nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add environment script
COPY env.sh /docker-entrypoint.d/40-env.sh
RUN chmod +x /docker-entrypoint.d/40-env.sh