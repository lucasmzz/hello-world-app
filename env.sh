#!/bin/sh

# Recreate config file
echo "window.ENV_VARS = {" > /usr/share/nginx/html/config.js
echo "  VITE_ORDERS_SERVICE_URL: '${VITE_ORDERS_SERVICE_URL}'," >> /usr/share/nginx/html/config.js
echo "}" >> /usr/share/nginx/html/config.js