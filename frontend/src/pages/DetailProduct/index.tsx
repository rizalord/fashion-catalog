import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import api from '../../lib/api'
import { DetailProductResponse } from '../../types/responses/detail_product_response'
import LoadingPageSpinner from '../../components/Spinner/LoadingPageSpinner'
import ErrorAlert from '../../components/Alert/ErrorAlert'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useState } from 'react'

export default function DetailProduct() {
    let { id } = useParams()
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
    const apiUrl = window._env_.API_URL
    const shopTitle = window._env_.SHOP_TITLE

    const getDiscount = (price: number, discount: number) => {
        return price - (price * discount / 100)
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['detail-product', id],
        queryFn: async () => {
            try {
                const response = await api.get<DetailProductResponse>(`/api/products/${id}?populate[product_links][populate][0]=e_commerce&populate[product_sizes][populate][1]=*&populate[categories][populate][2]=*&populate[images][populate][3]=*`)

                document.title = `${response.data.data.attributes.title} | ${shopTitle}`

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

    if (isError) {
        return <ErrorAlert error={error as Error} />
    }

    return (
        <div>
            {/* Breadcrumb */}
            <div className="py-4 container flex gap-3 items-center">
                <Link to="/" className="text-primary text-base">
                    <i className="fas fa-home"></i>
                </Link>
                <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
                <Link to="/shop" className="text-primary text-base font-medium uppercase">
                    Shop
                </Link>
                <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
                <p className="text-gray-600 font-medium uppercase">
                    {data?.attributes.title}
                </p>
            </div>
            {/* End Breadcrumb */}

            {/* Product View */}
            <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
                {
                    data?.attributes?.images?.data?.length! > 0 && (
                        <div>
                            <div>
                                <img
                                    id="main-img"
                                    src={apiUrl + data?.attributes?.images?.data![selectedImageIndex]?.attributes?.url}
                                    className="w-full" />
                            </div>
                            <div className="grid grid-cols-5 gap-4 mt-4">
                                {
                                    data?.attributes?.images?.data?.map((image, index) => (
                                        <div
                                            key={image.id}
                                            onClick={() => setSelectedImageIndex(index)}
                                        >
                                            <img
                                                src={apiUrl + image.attributes.url}
                                                className={`single-img w-full h-20 cursor-pointer border ${index == selectedImageIndex ? 'border-primary' : ''}`} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }

                <div>
                    <h2 className="md:text-3xl text-2xl font-medium uppercase mb-4">
                        {data?.attributes.title}
                    </h2>

                    <div className="space-y-2">
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Category: </span>
                            <span className="text-gray-600">
                                {data?.attributes?.categories?.data?.map((category) => category.attributes.name).join(', ')}
                            </span>
                        </p>
                    </div>

                    {
                        data && (
                            <div className="mt-4 flex items-baseline gap-3">

                                <span className="text-primary font-semibold text-xl">
                                    {getDiscount(data.attributes.original_price, data.attributes.discount).toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    })}
                                </span>

                                {
                                    data.attributes.discount > 0 && (
                                        <span className="text-gray-500 text-base line-through">
                                            {data.attributes.original_price.toLocaleString("id-ID", {
                                                style: "currency",
                                                currency: "IDR",
                                            })}
                                        </span>
                                    )
                                }
                            </div>
                        )
                    }


                    <p className="mt-4 text-gray-600">
                        {data?.attributes.short_description}
                    </p>
                    {
                        data?.attributes.product_sizes?.data?.length! > 0 && (
                            <div className="mt-4">
                                <h3 className="text-base text-gray-800 mb-1">Size</h3>
                                <div className="flex items-center gap-2">
                                    {
                                        data?.attributes?.product_sizes?.data?.map((size) => (
                                            <div className="size-selector" key={size.id}>
                                                <p
                                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                                    {size.attributes.name}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }


                    <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                        {
                            data?.attributes?.product_links?.data?.map((link) => (
                                <a href={link.attributes.link}
                                    key={link.id}
                                    className={
                                        `bg-${link.attributes.e_commerce.data.attributes.color} border border-${link.attributes.e_commerce.data.attributes.color} text-white px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-${link.attributes.e_commerce.data.attributes.color} transition text-sm flex items-center`
                                    }>
                                    Beli di {link.attributes.e_commerce.data.attributes.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* End Product View */}

            {/* Product Detail */}
            <div className="container pb-16">
                <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
                    Product Details
                </h3>

                <div className="lg:w-4/5 xl:w-3/5 pt-6">
                    <div className="space-y-3 text-gray-600 prose">
                        <ReactMarkdown children={data?.attributes.long_description as string} />
                    </div>
                </div>
            </div>
            {/* End Product Detail */}
        </div >
    )
}
