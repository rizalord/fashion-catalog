import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import api from '../../lib/api'
import { CategoriesResponse } from '../../types/responses/categories_response'
import logo from './../../assets/images/logo.svg'

export default function Footer() {
    const { data, isLoading } = useQuery({
        queryKey: ['footer-category'],
        queryFn: async () => {
            try {
                const response = await api.get<CategoriesResponse>("/api/categories?populate=*&pagination[limit]=4")

                return response.data.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw new Error(error.response?.data.error.message)
                }
            }
        },
    })

    return (
        <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
            <div className="container">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* <!-- footer text --> */}
                    <div className="space-y-8 xl:col-span-1">
                        <img className="w-30" src={logo} alt="Company name" />
                        <p className="text-gray-500 text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere rem
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    {/* <!-- footer text end --> */}
                    {/* <!-- footer links --> */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                    Category
                                </h3>
                                <div className="mt-4 space-y-4">
                                    {
                                        !isLoading && data?.map((category) => (
                                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                                {category.attributes.name}
                                            </a>
                                        ))
                                    }

                                    {
                                        isLoading && (
                                            <div className="animate-pulse">
                                                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                                <div className="h-4 bg-gray-300 rounded mt-2"></div>
                                                <div className="h-4 bg-gray-300 rounded mt-2"></div>
                                                <div className="h-4 bg-gray-300 rounded mt-2"></div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                    Company
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                        About
                                    </a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                        Blog
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8 hidden lg:block">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                    Contact
                                </h3>
                                <div className="mt-4 space-y-4">
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                        Jl. Terusan Dieng No.57-59, Pisang Candi, Kec. Sukun, Kota Malang, Jawa Timur 65146
                                    </a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                        (62) 896-8156-6900
                                    </a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                        example@gmail.Com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block md:hidden mt-12">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                            Contact
                        </h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                Jl. Terusan Dieng No.57-59, Pisang Candi, Kec. Sukun, Kota Malang, Jawa Timur 65146
                            </a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                (62) 896-8156-6900
                            </a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">
                                example@gmail.Com
                            </a>
                        </div>
                    </div>
                    {/* <!-- footer links end --> */}
                </div>
            </div>
        </footer>
    )
}
