import { Link } from "react-router-dom"

interface ProductCardProps{
    id: number
    name: string
    image: string
    originalPrice: number
    discount: number
}

export default function ProductCard({id, image, name, originalPrice, discount }: ProductCardProps) {
    const discountedPrice = originalPrice - (originalPrice * discount / 100)
    return (
        <div className="group rounded bg-white shadow overflow-hidden">

            <div className="relative">
                <img src={image} className="w-full aspect-[4/3]" />
                <div 
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                </div>
            </div>

            <div className="pt-4 pb-3 px-4">
                <a href="view.html">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        {name}
                    </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-roboto font-semibold">
                        {discountedPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR'})}
                    </p>
                    <p className="text-sm text-gray-400 font-roboto line-through">
                        {originalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR'})}
                    </p>
                </div>
                
            </div>

            <Link to={`/products/${id}`}
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                Lihat Produk
            </Link>

        </div>
    )
}
