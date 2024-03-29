import algoliasearch from 'algoliasearch/lite'

const algolia = algoliasearch(
    window._env_.ALGOLIA_APP_ID,
    window._env_.ALGOLIA_SEARCH_KEY
)

const algoliaIndex = algolia.initIndex(window._env_.ALGOLIA_INDEX)

export default algoliaIndex