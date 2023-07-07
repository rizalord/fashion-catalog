import { useQuery } from '@tanstack/react-query'
import ProductCard from '../../components/Card/ProductCard'
import Pagination from '../../components/Pagination'
import FilterSection from '../../components/Section/FilterSection'
import api from '../../lib/api'
import { ProductsResponse } from '../../types/responses/products_response'
import axios from 'axios'
import qs from 'qs'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import LoadingPageSpinner from '../../components/Spinner/LoadingPageSpinner'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../context/store/hooks'
import { toggleCategory } from '../../context/store/slices/categorySlice'

export default function Shop() {
    const shopTitle = window._env_.SHOP_TITLE

    let location = useLocation()
    const dispatch = useAppDispatch()
    const [queryString, setQueryString] = useState<any>({})

    useEffect(() => {
        document.title = "Shop | " + shopTitle
    }, [])

    useEffect(() => {
        setQueryString(qs.parse(window.location.search, { ignoreQueryPrefix: true }))
    }, [location])

    const { data, isLoading } = useQuery({
        queryKey: ['all-products', queryString],
        queryFn: async () => {
            try {
                const filters: any = {
                    title: {
                        $containsi: queryString.q
                    },
                    ...queryString.filters
                }

                const query = qs.stringify({
                    populate: '*',
                    pagination: {
                        pageSize: 9,
                        page: queryString.page || 1
                    },
                    sort: ['id:desc'],
                    filters
                })

                const response = await api.get<ProductsResponse>(`/api/products?${query}`)

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw new Error(error.response?.data.error.message)
                }
            }
        },
    })

    return <>
        {/* Breadcrumb */}
        <div className="container py-4 flex justify-between">
            <div className="flex gap-3 items-center">
                <Link to="/" className="text-primary text-base">
                    <i className="fas fa-home"></i>
                </Link>
                <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
                <p className="text-gray-600 font-medium uppercase">Shop</p>
            </div>
        </div>
        {/* Breadcrumb */}

        <div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">

            <FilterSection />

            <div className="col-span-3">
                <div className="mb-4 flex items-center">
                    <button
                        className="bg-primary border border-primary text-white px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition lg:hidden text-sm mr-3 focus:outline-none"
                        onClick={() => dispatch(toggleCategory())}
                    >
                        Filter
                    </button>
                </div>

                {
                    isLoading
                        ? <LoadingPageSpinner />
                        : <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6 mb-10">

                            {
                                data?.data?.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        images={product.attributes.images.data}
                                        name={product.attributes.title}
                                        originalPrice={product.attributes.original_price}
                                        discount={product.attributes.discount}
                                    />
                                ))
                            }

                        </div>
                }

                {
                    !isLoading && data && data.meta.pagination.total === 0 &&
                    <div className="flex justify-center items-center h-36">
                        <p className="text-gray-500 text-2xl">No products found</p>
                    </div>
                }

                {
                    !isLoading && data && data.meta.pagination.total > 0 && <Pagination
                        page={data.meta.pagination.page || 0}
                        pageSize={data.meta.pagination.pageSize || 0}
                        pageCount={data.meta.pagination.pageCount || 0}
                        total={data.meta.pagination.total || 0}
                    />
                }

            </div>

        </div >
    </>
}
