import bed from './../../assets/images/icons/bed.svg'
import sofa from './../../assets/images/icons/sofa.svg'
import office from './../../assets/images/icons/office.svg'
import terrace from './../../assets/images/icons/terrace.svg'
import bed2 from './../../assets/images/icons/bed-2.svg'
import restaurant from './../../assets/images/icons/restaurant.svg'

export default function Navbar() {
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
                            {/* <!-- single category --> */}
                            <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                <img src={bed} className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
                            </a>
                            {/* <!-- single category end --> */}
                            {/* <!-- single category --> */}
                            <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                <img src={sofa} className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                            </a>
                            {/* <!-- single category end --> */}
                            {/* <!-- single category --> */}
                            <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                <img src={office} className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Office</span>
                            </a>
                            {/* <!-- single category end --> */}
                            {/* <!-- single category --> */}
                            <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                <img src={terrace} className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                            </a>
                            {/* <!-- single category end --> */}
                            {/* <!-- single category --> */}
                            <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                <img src={bed2} className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                            </a>
                            {/* <!-- single category end --> */}
                            {/* <!-- single category --> */}
                            <a href="#" className="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                                <img src={restaurant} className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                            </a>
                            {/* <!-- single category end --> */}
                        </div>
                    </div>
                    {/* <!-- all category end --> */}

                    {/* <!-- nav menu --> */}
                    <div className="flex items-center justify-between flex-grow pl-12">
                        <div className="flex items-center space-x-6 text-base capitalize">
                            <a href="index.html" className="text-gray-200 hover:text-white transition">Home</a>
                            <a href="shop.html" className="text-gray-200 hover:text-white transition">Shop</a>
                            <a href="#" className="text-gray-200 hover:text-white transition">About us</a>
                            <a href="#" className="text-gray-200 hover:text-white transition">Contact us</a>
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
