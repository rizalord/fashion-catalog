import { useQuery } from '@tanstack/react-query'
import ProductCard from '../../components/Card/ProductCard'
import Pagination from '../../components/Pagination'
import FilterSection from '../../components/Section/FilterSection'
import api from '../../lib/api'
import { ProductsResponse } from '../../types/responses/products_response'
import axios from 'axios'

export default function Shop() {
    const apiUrl = window._env_.API_URL

    const { data, isLoading} = useQuery({
        queryKey: ['all-products'],
        queryFn: async () => {
            try {
                const response = await api.get<ProductsResponse>(`/api/products?populate=*&pagination[pageSize]=12&pagination[page]=1`)

                return response.data.data
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
                <a href="index.html" className="text-primary text-base">
                    <i className="fas fa-home"></i>
                </a>
                <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
                <p className="text-gray-600 font-medium">Shop</p>
            </div>
        </div>
        {/* Breadcrumb */}

        <div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">

            <FilterSection />

            <div className="col-span-3">


                <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6 mb-10">
                
                    {
                        data?.map((product) => (
                            <ProductCard 
                                key={product.id} 
                                id={product.id}
                                image={'${apiUrl}${product.attributes.images.data[0].attributes.url}'}
                                name={product.attributes.title}
                                originalPrice={product.attributes.original_price}
                                discount={product.attributes.discount}
                            />
                        ))
                    }

                </div>

                <Pagination page={1} pageSize={10} pageCount={2} total={15}/>

            </div>

        </div>
    </>
}
