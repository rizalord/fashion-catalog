import { Link } from "react-router-dom"
import { Daum5 } from '../../types/responses/products_response'

interface ProductCardProps {
    id: number
    images: Daum5[]
    name: string
    originalPrice: number
    discount: number
}

export default function ProductCard({ id, images, name, originalPrice, discount }: ProductCardProps) {
    const discountedPrice = originalPrice - (originalPrice * discount / 100)
    const sortedImages = images.sort((a, b) => a.id - b.id)
    const apiUrl = window._env_.API_URL

    return (
        <div className="group rounded bg-white shadow overflow-hidden">

            <Link to={`/products/${id}`}>
                <div className="relative cursor-pointer">
                    {
                        sortedImages.length > 1 && (
                            <img src={`${apiUrl}${sortedImages[0].attributes.url}`} className="w-full aspect-[4/3] object-cover" />
                        )
                    }
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">

                    </div>
                </div>
            </Link>


            <div className="pt-4 pb-3 px-4">
                <a href="view.html">
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition truncate">
                        {name}
                    </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-roboto font-semibold">
                        {discountedPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                    </p>
                    {
                        discount !== 0 && (
                            <p className="text-sm text-gray-400 font-roboto line-through">
                                {originalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                            </p>
                        )
                    }

                </div>

            </div>

            <Link to={`/products/${id}`}
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                Lihat Produk
            </Link>

        </div >
    )
}
