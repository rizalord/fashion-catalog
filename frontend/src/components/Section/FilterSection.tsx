import { useAppDispatch, useAppSelector } from '../../context/store/hooks'
import { toggleCategory } from '../../context/store/slices/categorySlice'
import { useQuery } from '@tanstack/react-query'
import api from '../../lib/api'
import { CategoriesResponse } from '../../types/responses/categories_response'
import axios from 'axios'
import { ProductSizesResponse } from '../../types/responses/product_sizes_response'

export default function FilterSection() {
    const isCategoryOpen = useAppSelector((state) => state.category.isCategoryOpen)
    const dispatch = useAppDispatch()

    const categoryQuery = useQuery({
        queryKey: ['all-category'],
        queryFn: async () => {
            try {
                const response = await api.get<CategoriesResponse>("/api/categories?populate=*")

                return response.data.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw new Error(error.response?.data.error.message)
                }
            }
        },
    })

    const productSizesQuery = useQuery({
        queryKey: ['all-product-sizes'],
        queryFn: async () => {
            try {
                const response = await api.get<ProductSizesResponse>("/api/product-sizes")

                return response.data.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw new Error(error.response?.data.error.message)
                }
            }
        },
    })

    return (
        <div
            className={`col-span-1 bg-white px-4 pt-4 pb-6 shadow rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full ${isCategoryOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="divide-gray-200 divide-y space-y-5 relative">

                <div className="relative">
                    <div
                        className="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer"
                        onClick={() => dispatch(toggleCategory())}>
                        <i className="fas fa-times"></i>
                    </div>
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                    {
                        categoryQuery.isLoading ? (
                            <div role="status" className="w-full h-16 flex justify-center items-center">
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            <div className="space-y-2">

                                {
                                    categoryQuery.data?.map((item) => (
                                        <div className="flex items-center" key={item.id}>
                                            <input type="checkbox" id={item.id.toString()}
                                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                            <label htmlFor={item.id.toString()} className="text-gray-600 ml-3 cursor-pointer">
                                                {item.attributes.name}
                                            </label>
                                        </div>
                                    ))
                                }

                            </div>
                        )
                    }

                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                    <div className="mt-4 flex items-center">
                        <input type="text"
                            className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                            placeholder="min" />
                        <span className="mx-3 text-gray-500">-</span>
                        <input type="text"
                            className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                            placeholder="mix" />
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
                    {
                        productSizesQuery.isLoading ? (
                            <div role="status" className="w-full h-16 flex justify-center items-center">
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                {
                                    productSizesQuery.data?.map((item) => (
                                        <div className="size-selector" key={item.id}>
                                            <input type="radio" name="size" className="hidden" id={item.id.toString()} />
                                            <label htmlFor="size-xs"
                                                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                                {item.attributes.name}
                                            </label>
                                        </div>
                                    ))
                                }

                            </div>
                        )

                    }

                </div>
            </div>
        </div>
    )
}
