import { useState } from 'react'
import algoliaIndex from '../../lib/algolia'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

export default function DesktopSearchbar() {
    const navigate = useNavigate()

    const [query, setQuery] = useState<string>('')
    const [show, setShow] = useState<boolean>(false)
    const [hits, setHits] = useState<SearchProduct[]>([])

    const queryString = qs.parse(window.location.search, { ignoreQueryPrefix: true })

    const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value)

        if (event.currentTarget.value.length > 0 && event.key !== 'Enter') {
            setShow(true)
            algoliaIndex.search(event.currentTarget.value, { hitsPerPage: 4 })
                .then(({ hits }) => {
                    const suggestions = hits.map((hit: any) => hit as SearchProduct)
                    setHits(suggestions)
                })
        }

        if (event.currentTarget.value.length === 0 && event.key !== 'Enter') {
            setHits([])
            setShow(false)
        }
    }

    const navigateToProduct = (id: number) => {
        setHits([])
        setShow(false)
        navigate(`/products/${id}`)
    }

    const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && query.length >= 3) onSubmit()
    }

    const onSubmit = () => {
        if (query.length < 3) return

        setHits([])
        setShow(false)

        queryString.q = query
        navigate(`/shop?${qs.stringify(queryString)}`)
    }

    return (
        <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
            <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <i className="fas fa-search"></i>
                </span>
                <input type="text"
                    onKeyUp={onKeyUp}
                    onKeyDown={onPressEnter}
                    className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
                    placeholder="search" />
                <button type="submit"
                    onClick={onSubmit}
                    disabled={query.length < 3}
                    className={`bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition  ${query.length < 3 ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}>
                    Search
                </button>
            </div>

            <div
                className={`absolute left-0 top-16 w-full z-50 bg-white rounded-sm shadow-sm border border-gray-200 ${query.length > 0 ? 'block' : 'hidden'}`}
                id="desktopSearch"
            >
                <ul className="w-full">
                    {
                        show && hits.length > 0 && hits.map((hit: SearchProduct) => (
                            <li
                                key={hit.id}
                                onClick={() => navigateToProduct(hit.id)}
                                className="flex items-center justify-between py-3 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition">
                                <div className="flex flex-row justify-between gap-3">
                                    <div className="grow">
                                        <h3 className="text-lg font-light text-black leading-snug">
                                            {hit.title}
                                        </h3>
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                    {
                        show && hits.length === 0 && (
                            <li className="flex items-center justify-center py-3 px-4 border-b border-gray-200 transition">
                                <div className="flex flex-row justify-center items-center">
                                    <div className="grow">
                                        <h3 className="text-lg font-light text-black leading-snug text-center">
                                            No result found
                                        </h3>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
