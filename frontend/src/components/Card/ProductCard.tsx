export default function ProductCard() {
    return (
        <div className="group rounded bg-white shadow overflow-hidden">

            <div className="relative">
                <img src="https://raw.githubusercontent.com/rslahmed/tailwind-ecommerce/main/dist/images/products/product4.jpg" className="w-full aspect-[4/3]" />
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
    )
}
