export interface ProductsResponse {
    data: Daum[]
    meta: Meta
  }
  
  export interface Daum {
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
    categories: Categories
    product_sizes: ProductSizes
    product_links: ProductLinks
    images: Images
  }
  
  export interface Categories {
    data: Daum2[]
  }
  
  export interface Daum2 {
    id: number
    attributes: Attributes2
  }
  
  export interface Attributes2 {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface ProductSizes {
    data: Daum3[]
  }
  
  export interface Daum3 {
    id: number
    attributes: Attributes3
  }
  
  export interface Attributes3 {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface ProductLinks {
    data: Daum4[]
  }
  
  export interface Daum4 {
    id: number
    attributes: Attributes4
  }
  
  export interface Attributes4 {
    link: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface Images {
    data: Daum5[]
  }
  
  export interface Daum5 {
    id: number
    attributes: Attributes5
  }
  
  export interface Attributes5 {
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
  
  export interface Meta {
    pagination: Pagination
  }
  
  export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
  