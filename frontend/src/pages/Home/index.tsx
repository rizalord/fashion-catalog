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
                    <p className="text-gray-500 text-xs lg:text-sm">Order over $200</p>
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
</>    
}
