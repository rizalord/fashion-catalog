import bed from './../../assets/images/icons/bed.svg'
import sofa from './../../assets/images/icons/sofa.svg'
import office from './../../assets/images/icons/office.svg'
import terrace from './../../assets/images/icons/terrace.svg'
import bed2 from './../../assets/images/icons/bed-2.svg'
import restaurant from './../../assets/images/icons/restaurant.svg'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import api from '../../lib/api'
import { CategoriesResponse } from '../../types/responses/categories_response'

export default function Navbar() {
    const apiUrl = window._env_.API_URL

    const { data } = useQuery({
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

    return (
        <nav className="bg-gray-800 hidden lg:block">
            <div className="container">
                <div className="flex">

                    {/* <!-- all category --> */}
                    <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
                        <span className="text-white">
                            <i className="fas fa-bars"></i>
                        </span>
                        <span className="capitalize ml-2 text-white">All categories</span>

                        <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                            {
                                data?.map((category) => (
                                    <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition" key={category.id}>
                                        <img src={apiUrl + category.attributes.icon.data.attributes.url} className="w-5 h-5 object-contain" />
                                        <span className="ml-6 text-gray-600 text-sm">
                                            {category.attributes.name}
                                        </span>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    {/* <!-- all category end --> */}

                    {/* <!-- nav menu --> */}
                    <div className="flex items-center justify-between flex-grow pl-12">
                        <div className="flex items-center space-x-6 text-base capitalize">
                            <Link to="/" className="text-gray-200 hover:text-white transition">Home</Link>
                            <Link to="/shop" className="text-gray-200 hover:text-white transition">Shop</Link>
                        </div>
                        {/* <a href="login.html" className="ml-auto justify-self-end text-gray-200 hover:text-white transition">
                            Login/Register
                        </a> */}
                    </div>
                    {/* <!-- nav menu end --> */}

                </div>
            </div>
        </nav>
    )
}
