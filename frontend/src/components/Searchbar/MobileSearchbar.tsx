import { Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from '../../context/store/hooks'
import { toggleSearch } from '../../context/store/slices/navSlice'
import { useState } from 'react'
import algoliaIndex from '../../lib/algolia'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

export default function MobileSearchbar() {
    const isSearchOpen = useAppSelector((state) => state.nav.isSearchOpen)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const apiUrl = window._env_.API_URL

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
        dispatch(toggleSearch())
        navigate(`/products/${id}`)
    }

    const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') onSubmit()
    }

    const onSubmit = () => {
        setHits([])
        setShow(false)
        dispatch(toggleSearch())

        queryString.q = query
        navigate(`/shop?${qs.stringify(queryString)}`)
    }

    const getDiscountedPrice = (price: number, discount: number) => price - (price * discount / 100)

    return (
        <Transition
            show={isSearchOpen}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div
                className="fixed left-0 top-0 w-full h-full z-50 block lg:hidden"
                id="mobileMenu"
            >
                <div className="w-full h-full py-4 bg-white">
                    <div className="flex flex-col items-center gap-5 justify-between">
                        <button className="self-end mx-4"
                            onClick={() => dispatch(toggleSearch())}
                        >
                            <i className="fas fa-times text-xl text-gray-600"></i>
                        </button>

                        <div className="px-4 w-full">
                            <input
                                type="text"
                                className="w-full border border-primary py-3 px-3 rounded-md focus:ring-primary focus:border-primary"
                                placeholder="Search.."
                                onKeyUp={onKeyUp}
                                onKeyDown={onPressEnter}
                            />
                        </div>

                        <ul className="w-full">
                            {
                                show && hits.length > 0 && hits.map((hit) => (
                                    <li className="flex items-center justify-between py-3 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition"
                                        onClick={() => navigateToProduct(hit.id)}
                                        key={hit.id}
                                    >
                                        <div className="flex flex-row justify-between md:gap-3 w-full">
                                            <img
                                                src={`${apiUrl}${hit.images[0].url}`}
                                                alt={hit.title}
                                                className="flex-none w-20 h-20 bg-gray-200 hidden md:block" />
                                            <div className="grow w-full">
                                                <h3 className="text-lg font-medium text-gray-600 leading-snug">
                                                    {hit.title}
                                                </h3>

                                                <div className="w-full">
                                                    <p className="text-sm text-gray-400 mt-1 truncate">
                                                        {hit.short_description}
                                                    </p>
                                                </div>

                                                <p className="text-sm text-gray-400 mt-2">
                                                    {
                                                        hit.discount > 0
                                                            ? getDiscountedPrice(hit.original_price, hit.discount).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
                                                            : hit.original_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }

                            {
                                show && hits.length === 0 && (
                                    <li className="flex items-center justify-center py-3 px-4 w-full cursor-pointer hover:bg-gray-100 transition">
                                        <div className="flex flex-row justify-center md:gap-3 w-full">
                                            <div className="grow w-full">
                                                <h3 className="text-lg font-medium text-gray-600 leading-snug text-center">
                                                    No results found
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Transition>
    )
}
