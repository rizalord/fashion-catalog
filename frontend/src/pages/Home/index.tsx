import { useQuery } from "@tanstack/react-query"
import api from "../../lib/api"
import axios from "axios"
import { HomeResponse } from "../../types/responses/home_response"
import ProductCard from "../../components/Card/ProductCard"
import LoadingPageSpinner from '../../components/Spinner/LoadingPageSpinner'
import FeatureCard from '../../components/Card/FeatureCard'
import CategoryCard from '../../components/Card/CategoryCard'
import parse from 'html-react-parser'
import { useEffect } from 'react'

export default function Home() {
    const apiUrl = window._env_.API_URL
    const shopTitle = window._env_.SHOP_TITLE

    useEffect(() => {
        document.title = shopTitle
    }, [])

    const { data, isLoading } = useQuery({
        queryKey: ['home'],
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

    if (isLoading) {
        return <LoadingPageSpinner />
    }

    return <>
        {/* Banner */}
        <div
            className="bg-cover bg-no-repeat bg-center py-36 relative"
            style={{
                backgroundImage: `url(${apiUrl}${data?.attributes.banner.image.data.attributes.formats.large.url})`
            }}
        >
            <div className="container">
                <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
                    {parse(data?.attributes.banner.title as string)}
                </h1>
                <p className="text-base text-gray-600 leading-6">
                    {parse(data?.attributes.banner.description as string)}
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
                    data?.attributes.features.map((feature) => <FeatureCard data={feature} key={feature.id} />)
                }
            </div>
        </div>
        {/* Feature */}

        {/* Categories */}
        <div className="container pb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
                {
                    data?.attributes.categories.map((category) => <CategoryCard data={category} key={category.id} />)
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
                            images={product.product.data.attributes.images.data}
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
                <img src={`${apiUrl}${data?.attributes.ad.image.data.attributes.url}`} className="w-full" />
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
                            images={product.product.data.attributes.images.data}
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
