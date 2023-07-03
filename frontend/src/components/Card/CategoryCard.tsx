import qs from 'qs'
import { Category } from '../../types/responses/home_response'
import { useNavigate } from 'react-router-dom'

interface CategoryCardProps {
    data: Category
}

export default function CategoryCard(data: CategoryCardProps) {
    const apiUrl = window._env_.API_URL
    const navigate = useNavigate()

    const navigateToCategory = () => {
        const queryString = qs.stringify({
            filters: {
                categories: {
                    id: {
                        $in: [data.data.category.data.id]
                    }
                }
            }
        })

        navigate(`/shop?${queryString}`)
    }

    return (
        <div className="relative group rounded-sm overflow-hidden cursor-pointer" onClick={navigateToCategory} >
            <img src={`${apiUrl}${data.data.category.data.attributes.image.data.attributes.url}`} className="w-full aspect-[4/3]" />
            <span className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                                font-roboto font-medium tracking-wide transition">
                {data.data.category.data.attributes.name}
            </span>
        </div>
    )
}
