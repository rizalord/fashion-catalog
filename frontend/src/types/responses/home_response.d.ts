export interface HomeResponse {
    data: Data
    meta: Meta
  }
  
  export interface Data {
    id: number
    attributes: Attributes
  }
  
  export interface Attributes {
    createdAt: string
    updatedAt: string
    publishedAt: string
    banner: Banner
    features: Feature[]
    categories: Category[]
    top_new_products: TopNewProduct[]
    ad: Ad
    recommend_products: RecommendProduct[]
  }
  
  export interface Banner {
    id: number
    title: string
    description: string
    image: Image
    button: Button
  }
  
  export interface Image {
    data: Data2
  }
  
  export interface Data2 {
    id: number
    attributes: Attributes2
  }
  
  export interface Attributes2 {
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
    large: Large
    small: Small
    medium: Medium
    thumbnail: Thumbnail
  }
  
  export interface Large {
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
  
  export interface Button {
    id: number
    text: string
    url: string
  }
  
  export interface Feature {
    id: number
    header: string
    text: string
    image: Image2
  }
  
  export interface Image2 {
    data: Data3
  }
  
  export interface Data3 {
    id: number
    attributes: Attributes3
  }
  
  export interface Attributes3 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: any
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
  
  export interface Category {
    id: number
    category: Category2
  }
  
  export interface Category2 {
    data: Data4
  }
  
  export interface Data4 {
    id: number
    attributes: Attributes4
  }
  
  export interface Attributes4 {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    image: Image3
  }
  
  export interface Image3 {
    data: Data5
  }
  
  export interface Data5 {
    id: number
    attributes: Attributes5
  }
  
  export interface Attributes5 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats2
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
  
  export interface Formats2 {
    large: Large2
    small: Small2
    medium: Medium2
    thumbnail: Thumbnail2
  }
  
  export interface Large2 {
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
  
  export interface Small2 {
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
  
  export interface Medium2 {
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
  
  export interface Thumbnail2 {
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
  
  export interface TopNewProduct {
    id: number
    product: Product
  }
  
  export interface Product {
    data: Data6
  }
  
  export interface Data6 {
    id: number
    attributes: Attributes6
  }
  
  export interface Attributes6 {
    title: string
    is_available: boolean
    original_price: number
    discount: number
    short_description: string
    long_description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    images: Images
  }
  
  export interface Images {
    data: Daum[]
  }
  
  export interface Daum {
    id: number
    attributes: Attributes7
  }
  
  export interface Attributes7 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats3
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
  
  export interface Formats3 {
    small: Small3
    thumbnail: Thumbnail3
    large?: Large3
    medium?: Medium3
  }
  
  export interface Small3 {
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
  
  export interface Thumbnail3 {
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
  
  export interface Large3 {
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
  
  export interface Medium3 {
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
  
  export interface Ad {
    id: number
    url: string
    image: Image4
  }
  
  export interface Image4 {
    data: Data7
  }
  
  export interface Data7 {
    id: number
    attributes: Attributes8
  }
  
  export interface Attributes8 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats4
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
  
  export interface Formats4 {
    large: Large4
    small: Small4
    medium: Medium4
    thumbnail: Thumbnail4
  }
  
  export interface Large4 {
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
  
  export interface Small4 {
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
  
  export interface Medium4 {
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
  
  export interface Thumbnail4 {
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
  
  export interface RecommendProduct {
    id: number
    product: Product2
  }
  
  export interface Product2 {
    data: Data8
  }
  
  export interface Data8 {
    id: number
    attributes: Attributes9
  }
  
  export interface Attributes9 {
    title: string
    is_available: boolean
    original_price: number
    discount: number
    short_description: string
    long_description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    images: Images2
  }
  
  export interface Images2 {
    data: Daum2[]
  }
  
  export interface Daum2 {
    id: number
    attributes: Attributes10
  }
  
  export interface Attributes10 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats5
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
  
  export interface Formats5 {
    small: Small5
    thumbnail: Thumbnail5
    large?: Large5
    medium?: Medium5
  }
  
  export interface Small5 {
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
  
  export interface Thumbnail5 {
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
  
  export interface Large5 {
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
  
  export interface Medium5 {
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
  
  export interface Meta {}
  