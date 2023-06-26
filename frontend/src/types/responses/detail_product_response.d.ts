export interface DetailProductResponse {
    data: Data
    meta: Meta
}

export interface Data {
    id: number
    attributes: Attributes
}

export interface Attributes {
    title: string
    is_available: boolean
    original_price: number
    discount: number
    short_description: string
    long_description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    product_links: ProductLinks
    product_sizes: ProductSizes
    categories: Categories
    images: Images
}

export interface ProductLinks {
    data: Daum[]
}

export interface Daum {
    id: number
    attributes: Attributes2
}

export interface Attributes2 {
    link: string
    createdAt: string
    updatedAt: string
    publishedAt?: string
    e_commerce: ECommerce
}

export interface ECommerce {
    data: Data2
}

export interface Data2 {
    id: number
    attributes: Attributes3
}

export interface Attributes3 {
    name: string
    color: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface ProductSizes {
    data: Daum2[]
}

export interface Daum2 {
    id: number
    attributes: Attributes4
}

export interface Attributes4 {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface Categories {
    data: Daum3[]
}

export interface Daum3 {
    id: number
    attributes: Attributes5
}

export interface Attributes5 {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export interface Images {
    data: Daum4[]
}

export interface Daum4 {
    id: number
    attributes: Attributes6
}

export interface Attributes6 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
}

export interface Formats {
    small: Small
    medium?: Medium
    thumbnail: Thumbnail
}

export interface Small {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
}

export interface Medium {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
}

export interface Thumbnail {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
}

export interface Meta { }
