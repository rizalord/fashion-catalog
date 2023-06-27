import FilterSection from '../../components/Section/FilterSection'
import { useAppDispatch } from '../../context/store/hooks'
import { toggleCategory } from '../../context/store/slices/categorySlice'

export default function Shop() {
    const dispatch = useAppDispatch()

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

                <div className="mb-4 flex items-center">
                    <button
                        className="bg-primary border border-primary text-white px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition lg:hidden text-sm mr-3 focus:outline-none"
                        onClick={() => dispatch(toggleCategory())}
                    >
                        Filter
                    </button>
                    <select
                        className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                        <option>Default sorting</option>
                        <option>Price low-high</option>
                        <option>Price high-low</option>
                        <option>Latest product</option>
                    </select>
                    <div className="flex gap-2 ml-auto">
                        <div
                            className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                            <i className="fas fa-th"></i>
                        </div>
                        <div
                            className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                            <i className="fas fa-list"></i>
                        </div>
                    </div>
                </div>


                <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">

                    <div className="group rounded bg-white shadow overflow-hidden">

                        <div className="relative">
                            <img src="images/products/product4.jpg" className="w-full" />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a href="view.html"
                                    className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                    <i className="fas fa-search"></i>
                                </a>
                                <a href="#"
                                    className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                    <i className="far fa-heart"></i>
                                </a>
                            </div>
                        </div>

                        <div className="pt-4 pb-3 px-4">
                            <a href="view.html">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                    Guyer chair
                                </h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-roboto font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 font-roboto line-through">$55.00</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span key="1">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="2">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="3">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="4">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="5">
                                        <i className="fas fa-star"></i>
                                    </span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>

                        <a href="#"
                            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                            Add to Cart
                        </a>

                    </div>

                    <div className="group rounded bg-white shadow overflow-hidden">

                        <div className="relative">
                            <img src="images/products/product9.jpg" className="w-full" />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a href="view.html"
                                    className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                    <i className="fas fa-search"></i>
                                </a>
                                <a href="#"
                                    className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                    <i className="far fa-heart"></i>
                                </a>
                            </div>
                        </div>

                        <div className="pt-4 pb-3 px-4">
                            <a href="view.html">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                    Guyer chair
                                </h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-roboto font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 font-roboto line-through">$55.00</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span key="1">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="2">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="3">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="4">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="5">
                                        <i className="fas fa-star"></i>
                                    </span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>

                        <a href="#"
                            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                            Add to Cart
                        </a>

                    </div>

                    <div className="group rounded bg-white shadow overflow-hidden">

                        <div className="relative">
                            <img src="images/products/product1.jpg" className="w-full" />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a href="view.html"
                                    className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                    <i className="fas fa-search"></i>
                                </a>
                                <a href="#"
                                    className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                    <i className="far fa-heart"></i>
                                </a>
                            </div>
                        </div>

                        <div className="pt-4 pb-3 px-4">
                            <a href="view.html">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                    Guyer chair
                                </h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-roboto font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 font-roboto line-through">$55.00</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span key="1">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="2">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="3">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="4">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="5">
                                        <i className="fas fa-star"></i>
                                    </span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>

                        <a href="#"
                            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                            Add to Cart
                        </a>

                    </div>

                    <div className="group rounded bg-white shadow overflow-hidden">

                        <div className="relative">
                            <img src="images/products/product8.jpg" className="w-full" />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a href="view.html"
                                    className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                    <i className="fas fa-search"></i>
                                </a>
                                <a href="#"
                                    className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                    <i className="far fa-heart"></i>
                                </a>
                            </div>
                        </div>

                        <div className="pt-4 pb-3 px-4">
                            <a href="view.html">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                    Guyer chair
                                </h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-roboto font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 font-roboto line-through">$55.00</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span key="1">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="2">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="3">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="4">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="5">
                                        <i className="fas fa-star"></i>
                                    </span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>

                        <a href="#"
                            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                            Add to Cart
                        </a>

                    </div>

                    <div className="group rounded bg-white shadow overflow-hidden">

                        <div className="relative">
                            <img src="images/products/product10.jpg" className="w-full" />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a href="view.html"
                                    className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                    <i className="fas fa-search"></i>
                                </a>
                                <a href="#"
                                    className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                    <i className="far fa-heart"></i>
                                </a>
                            </div>
                        </div>

                        <div className="pt-4 pb-3 px-4">
                            <a href="view.html">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                    Guyer chair
                                </h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-roboto font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 font-roboto line-through">$55.00</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span key="1">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="2">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="3">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="4">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="5">
                                        <i className="fas fa-star"></i>
                                    </span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>

                        <a href="#"
                            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                            Add to Cart
                        </a>

                    </div>

                    <div className="group rounded bg-white shadow overflow-hidden">

                        <div className="relative">
                            <img src="images/products/product11.jpg" className="w-full" />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a href="view.html"
                                    className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                    <i className="fas fa-search"></i>
                                </a>
                                <a href="#"
                                    className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                    <i className="far fa-heart"></i>
                                </a>
                            </div>
                        </div>

                        <div className="pt-4 pb-3 px-4">
                            <a href="view.html">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                    Guyer chair
                                </h4>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-roboto font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 font-roboto line-through">$55.00</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span key="1">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="2">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="3">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="4">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    <span key="5">
                                        <i className="fas fa-star"></i>
                                    </span>
                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>

                        <a href="#"
                            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                            Add to Cart
                        </a>

                    </div>

                </div>

            </div>

        </div>
    </>
}
