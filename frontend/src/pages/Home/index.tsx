export default function Home() {
  console.log(window._env_.API_URL)
  return <><div className="bg-cover bg-no-repeat bg-center py-36 relative">
  <div className="container">
      <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
          Your Lovely<br className="hidden sm:block"/> Daily Wear
      </h1>
      <p className="text-base text-gray-600 leading-6">
          Good things for you,<br className="hidden sm:block"/>
          for your style and outfit needs.
      </p>
      <div className="mt-12">
          <a href="shop.html" className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent
         hover:text-primary transition">
              Shop now
          </a>
      </div>
  </div>
</div>

<div className="container py-16">
        <div className="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">

            <div
                className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                <img src="images/icons/delivery-van.svg" className="lg:w-12 w-10 h-12 object-contain"/>
                <div>
                    <h4 className="font-medium capitalize text-lg">free shipping</h4>
                    <p className="text-gray-500 text-xs lg:text-sm">Order over IDR 50.000,00</p>
                </div>
            </div>

            <div
                className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                <img src="images/icons/money-back.svg" className="lg:w-12 w-10 h-12 object-contain"/>
                <div>
                    <h4 className="font-medium capitalize text-lg">Money returns</h4>
                    <p className="text-gray-500 text-xs lg:text-sm">30 Days money return</p>
                </div>
            </div>

            <div
                className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                <img src="images/icons/service-hours.svg" className="lg:w-12 w-10 h-12 object-contain"/>
                <div>
                    <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
                    <p className="text-gray-500 text-xs lg:text-sm">Customer support</p>
                </div>
            </div>
        </div>
    </div>

  <div className="container pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
            
            <div className="relative group rounded-sm overflow-hidden" >
                <img src="images/category/category-1.jpg" className="w-full"/>
                <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition">
                    Clothes
                </a>
            </div>
            
            <div className="relative group rounded-sm overflow-hidden" >
                <img src="images/category/category-5.jpg" className="w-full"/>
                <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition">
                    Pants
                </a>
            </div>
            
            <div className="relative group rounded-sm overflow-hidden" >
                <img src="images/category/category-3.jpg" className="w-full"/>
                <a href="#" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition">
                    Dress
                </a>
            </div>
        </div>
  </div>

  <div className="container pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <div className="group rounded bg-white shadow overflow-hidden">
                <div className="relative">
                    <img src="images/products/product9.jpg" className="w-full"/>
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
                        <p className="text-xl text-primary font-roboto font-semibold">Rp 95.000</p>
                        <p className="text-sm text-gray-400 font-roboto line-through">Rp 100.000</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
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
                    <img src="images/products/product1.jpg" className="w-full"/>
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
                         Bella Oversize
                        </h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-roboto font-semibold">Rp 95.000</p>
                        <p className="text-sm text-gray-400 font-roboto line-through">Rp 100.000</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
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
                    <img src="images/products/product8.jpg" className="w-full"/>
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
                         Bella Oversize
                        </h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-roboto font-semibold">Rp 95.000</p>
                        <p className="text-sm text-gray-400 font-roboto line-through">Rp 100.000</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
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
                    <img src="images/products/product12.jpg" className="w-full"/>
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
                         Bella Oversize
                        </h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-roboto font-semibold">$Rp 95.000</p>
                        <p className="text-sm text-gray-400 font-roboto line-through">$Rp 100.000</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
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

    <div className="container pb-16">
        <a href="#">
            <img src="images/offer.jpg" className="w-full"/>
        </a>
    </div>

    <div className="container pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <div className="group rounded bg-white shadow overflow-hidden">
                <div className="relative">
                    <img src="images/products/product2.jpg" className="w-full"/>
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
                         Bella Oversize
                        </h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-roboto font-semibold">Rp 95.000</p>
                        <p className="text-sm text-gray-400 font-roboto line-through">Rp 100.000</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
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
                    <img src="images/products/product3.jpg" className="w-full"/>
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
                         Bella Oversize
                        </h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-roboto font-semibold">Rp 95.000</p>
                        <p className="text-sm text-gray-400 font-roboto line-through">Rp 100.000</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(15)</div>
                    </div>
                </div>
                <a href="#"
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                    Add to Cart
                </a>
            </div>
            <div className="group rounded bg-white shadow overflow-hidden">
                <div className="relative">
                    <img src="images/products/product4.jpg" className="w-full"/>
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
                         Bella Oversize
                        </h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-roboto font-semibold">Rp 95.000</p>
                        <p className="text-sm text-gray-400 font-roboto line-through">Rp 100.000</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(15)</div>
                    </div>
                </div>
                <a href="#"
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                    Add to Cart
                </a>
            </div>
            <div className="group rounded bg-white shadow overflow-hidden">
                <div className="relative">
                    <img src="images/products/product9.jpg" className="w-full"/>
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
                            Bella Oversize
                        </h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-roboto font-semibold">Rp 95.000</p>
                        <p className="text-sm text-gray-400 font-roboto line-through">Rp 100.000</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(15)</div>
                    </div>
                </div>
                <a href="#"
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                    Add to Cart
                </a>
            </div>
        </div>
    </div>
</>    
}
