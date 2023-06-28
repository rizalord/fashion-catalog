declare global {
    interface Window {
        _env_: {
            API_URL: string
            ALGOLIA_APP_ID: string
            ALGOLIA_SEARCH_KEY: string
        }
    }
}

export {}