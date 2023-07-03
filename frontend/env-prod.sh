#!/bin/bash

# Recreate config file
rm -rf ./dist/env-config.js
touch ./dist/env-config.js

# Add assignment 
echo "window._env_ = {" >> ./dist/env-config.js

# Read system environment variable
echo "  API_URL: \"$API_URL\"," >> ./dist/env-config.js
echo "  ALGOLIA_APP_ID: \"$ALGOLIA_APP_ID\"," >> ./dist/env-config.js
echo "  ALGOLIA_SEARCH_KEY: \"$ALGOLIA_SEARCH_KEY\"," >> ./dist/env-config.js
echo "  ALGOLIA_INDEX: \"$ALGOLIA_INDEX\"," >> ./dist/env-config.js

echo "}" >> ./dist/env-config.js

# Copy config file to /dist folder
cp ./env-config.js ./dist/env-config.js
cp ./env-config.js ./public/env-config.js

# Create Env Prod
rm -rf ./.env.prod
touch ./.env.prod

# Read system environment variable
echo "API_URL=$API_URL" >> ./.env.prod
echo "ALGOLIA_APP_ID=$ALGOLIA_APP_ID" >> ./.env.prod
echo "ALGOLIA_SEARCH_KEY=$ALGOLIA_SEARCH_KEY" >> ./.env.prod
echo "ALGOLIA_INDEX=$ALGOLIA_INDEX" >> ./.env.prod