import { useQuery } from "@tanstack/react-query"
import api from "../../lib/api"
import axios from "axios"
import { HomeResponse } from "../../types/responses/home_response"
import ProductCard from "../../components/Card/ProductCard"

export default function Home() {
    const apiUrl = window._env_.API_URL

    const { data, isLoading } = useQuery({
        queryKey: ['detail-product'],
        queryFn: async () => {
            try {
                const response = await api.get<HomeResponse>(`/api/home?populate[banner][populate][0]=image,button&populate[features][populate][1]=image&populate[categories][populate][category][populate][2]=image&populate[top_new_products][populate][product][populate][3]=images&populate[ad][populate][4]=image&populate[recommend_products][populate][product][populate][5]=images`)

                return response.data.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw new Error(error.response?.data.error.message)
                }
            }
        },
        retry: 1,
    })

    return <>
    {/* Banner */}
        <div 
            className="bg-cover bg-no-repeat bg-center py-36 relative"
            style={{
                backgroundImage: 'url(${apiUrl}${data?.attributes.banner.image.data.attributes.url})'
            }}
        >
          <div className="container">
                <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
                    {data?.attributes.banner.title}
                 </h1>
                <p className="text-base text-gray-600 leading-6">
                    {data?.attributes.banner.description}
                 </p>
                <div className="mt-12">
                    <a href={data?.attributes.banner.button.url} className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition">
                        {data?.attributes.banner.button.text}
                    </a>
                </div>
             </div>
        </div>
    {/* Banner */}

    {/* Feature */}
        <div className="container py-16">
            <div className="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">

                {
                    data?.attributes.features.map((feature) => (
                        <div
                            key={feature.id}
                            className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                            <img src={'${apiUrl}${feature.image.data.attributes.url}'} className="lg:w-12 w-10 h-12 object-contain" />
                            
                            <div>
                                <h4 className="font-medium capitalize text-lg">free shipping</h4>
                                <p className="text-gray-500 text-xs lg:text-sm">Order over IDR 50.000,00</p>
                            </div>
                        </div>
                    ))
                }
                

            </div>
        </div>
    {/* Feature */}

    {/* Categories */}
        <div className="container pb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">

                {
                    data?.attributes.categories.map((category) => (
                        <div className="relative group rounded-sm overflow-hidden" >
                            <img src={'${apiUrl}${category.category.data.attributes.image.data.attributes.url}'} className="w-full aspect-[4/3]" />
                            <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                                font-roboto font-medium tracking-wide transition">
                                {category.category.data.attributes.name}
                             </a>
                        </div>
                    ))
                }
                


            </div>
        </div>
    {/* Categories */}

    {/* Top New Product */}
        <div className="container pb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">top new products</h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
               
                {
                    data?.attributes.top_new_products.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            id={product.product.data.id}
                            image={'${apiUrl}${product.product.data.attributes.images.data[0].attributes.url'}
                            name={product.product.data.attributes.title}
                            originalPrice={product.product.data.attributes.original_price}
                            discount={product.product.data.attributes.discount}
                        />
                    ))
                }

            </div>
        </div>
    {/* Top New Product */}

    {/* Ad */}
        <div className="container pb-16">
            <a href={data?.attributes.ad.url}>
                <img src={'${apiUrl}${data?.attributes.ad.image.data.attributes.url}'} className="w-full" />
            </a>
        </div>
    {/* Ad */}

    {/* Recommended for you */}
        <div className="container pb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">

                {
                    data?.attributes.recommend_products.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            id={product.product.data.id}
                            image={'${apiUrl}${product.product.data.attributes.images.data[0].attributes.url'}
                            name={product.product.data.attributes.title}
                            originalPrice={product.product.data.attributes.original_price}
                            discount={product.product.data.attributes.discount}
                        />
                    ))
                }

            </div>
        </div>
    {/* Recommended for you */}
    
    </>
}
