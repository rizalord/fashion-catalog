interface SearchProduct {
    id: number
    title: string
    original_price: number
    discount: number
    short_description: string
    long_description: string
    images: SearchImage[]
}

interface SearchImage {
    id: number
    url: string
}