#!/bin/bash

# Recreate config file
rm -rf ./.env.prod
touch ./.env.prod

# Read system environment variable
echo "API_URL=$API_URL" >> ./.env.prod
echo "ALGOLIA_APP_ID=$ALGOLIA_APP_ID" >> ./.env.prod
echo "ALGOLIA_SEARCH_KEY=$ALGOLIA_SEARCH_KEY" >> ./.env.prod
echo "ALGOLIA_INDEX=$ALGOLIA_INDEX" >> ./.env.prod