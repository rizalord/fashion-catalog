#!/bin/bash

# Recreate config file
rm -rf ./env-config.js
touch ./env-config.js

# Add assignment 
echo "window._env_ = {" >> ./env-config.js

# Read system environment variable: "API_URL"
echo "  API_URL: \"$API_URL\"," >> ./env-config.js
echo "  ALGOLIA_APP_ID: \"$ALGOLIA_APP_ID\"," >> ./env-config.js
echo "  ALGOLIA_SEARCH_KEY: \"$ALGOLIA_SEARCH_KEY\"," >> ./env-config.js

echo "}" >> ./env-config.js

# Copy config file to /dist folder
cp ./env-config.js ./dist/env-config.js