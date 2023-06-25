import { useParams } from 'react-router-dom'

export default function DetailProduct() {
    let { id } = useParams()

    return (
        <div>
            {/* Breadcrumb */}
            <div className="py-4 container flex gap-3 items-center">
                <a href="index.html" className="text-primary text-base">
                    <i className="fas fa-home"></i>
                </a>
                <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
                <a href="shop.html" className="text-primary text-base font-medium uppercase">
                    Shop
                </a>
                <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
                <p className="text-gray-600 font-medium uppercase">Italian L Shape Sofa</p>
            </div>
            {/* End Breadcrumb */}

            {/* Product View */}
            <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
                <div>
                    <div>
                        <img id="main-img" src="https://raw.githubusercontent.com/rslahmed/tailwind-ecommerce/main/dist/images/products/product9.jpg" className="w-full" />
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        <div>
                            <img src="https://raw.githubusercontent.com/rslahmed/tailwind-ecommerce/main/dist/images/products/product9.jpg" className="single-img w-full cursor-pointer border border-primary" />
                        </div>
                        <div>
                            <img src="https://raw.githubusercontent.com/rslahmed/tailwind-ecommerce/main/dist/images/products/product1.jpg" className="single-img w-full cursor-pointer border" />
                        </div>
                        <div>
                            <img src="https://raw.githubusercontent.com/rslahmed/tailwind-ecommerce/main/dist/images/products/product8.jpg" className="single-img w-full cursor-pointer border" />
                        </div>
                        <div>
                            <img src="https://raw.githubusercontent.com/rslahmed/tailwind-ecommerce/main/dist/images/products/product12.jpg" className="single-img w-full cursor-pointer border" />
                        </div>
                        <div>
                            <img src="https://raw.githubusercontent.com/rslahmed/tailwind-ecommerce/main/dist/images/products/product11.jpg" className="single-img w-full cursor-pointer border" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2">Italian L Shape Sofa</h2>
                    <div className="flex items-center mb-4">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Availability: </span>
                            <span className="text-green-600">In Stock</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Brand: </span>
                            <span className="text-gray-600">Apex</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Category: </span>
                            <span className="text-gray-600">Sofa</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">SKU: </span>
                            <span className="text-gray-600">BE45VGRT</span>
                        </p>
                    </div>
                    <div className="mt-4 flex items-baseline gap-3">
                        <span className="text-primary font-semibold text-xl">$450.00</span>
                        <span className="text-gray-500 text-base line-through">$500.00</span>
                    </div>
                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi
                        labore blanditiis
                    </p>
                    <div className="mt-4">
                        <h3 className="text-base text-gray-800 mb-1">Size</h3>
                        <div className="flex items-center gap-2">
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-xs" />
                                <label htmlFor="size-xs"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                    XS
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-s" />
                                <label htmlFor="size-s"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                    S
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-m" checked />
                                <label htmlFor="size-m"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                    M
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-l" />
                                <label htmlFor="size-l"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                    L
                                </label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-xl" />
                                <label htmlFor="size-xl"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                    XL
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-base text-gray-800 mb-1">Color</h3>
                        <div className="flex items-center gap-2">
                            <div className="color-selector">
                                <input type="radio" name="color" className="hidden" id="color-red" checked />
                                <label htmlFor="color-red" style={{ backgroundColor: "#fc3d57" }}
                                    className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                                </label>
                            </div>
                            <div className="color-selector">
                                <input type="radio" name="color" className="hidden" id="color-white" />
                                <label htmlFor="color-white" style={{ backgroundColor: "#fff" }}
                                    className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                                </label>
                            </div>
                            <div className="color-selector">
                                <input type="radio" name="color" className="hidden" id="color-black" />
                                <label htmlFor="color-black" style={{ backgroundColor: "#000" }}
                                    className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-base text-gray-800 mb-1">Quantity</h3>
                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                            <div className="h-8 w-10 flex items-center justify-center">4</div>
                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                        </div>
                    </div>
                    <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                        <a href="#" className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm flex items-center">
                            <span className="mr-2"><i className="fas fa-shopping-bag"></i></span> Add to cart
                        </a>
                        <a href="#" className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm">
                            <span className="mr-2"><i className="far fa-heart"></i></span> Wishlist
                        </a>
                    </div>
                    <div className="flex space-x-3 mt-4">
                        <a href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* End Product View */}
        </div >
    )
}
