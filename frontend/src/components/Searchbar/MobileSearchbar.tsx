import { Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from '../../context/store/hooks'
import { toggleSearch } from '../../context/store/slices/navSlice'

export default function MobileSearchbar() {
    const isSearchOpen = useAppSelector((state) => state.nav.isSearchOpen)
    const dispatch = useAppDispatch()

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
                            />
                        </div>

                        <ul className="w-full">
                            <li className="flex items-center justify-between py-3 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition">
                                <div className="flex flex-row justify-between gap-3">
                                    <div className="flex-none w-20 h-20 bg-gray-200 hidden md:block"></div>
                                    <div className="grow">
                                        <h3 className="text-lg font-medium text-gray-600 leading-snug">
                                            Sweater Hoodie Pria Wanita Programmer Dicoding buku coding - Hitam, M
                                        </h3>

                                        <p className="text-sm text-gray-400 mt-1">
                                            Category
                                        </p>

                                        <p className="text-sm text-gray-400 mt-2">
                                            Rp. 100.000
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center justify-between py-3 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition">
                                <div className="flex flex-row justify-between gap-3">
                                    <div className="flex-none w-20 h-20 bg-gray-200 hidden md:block"></div>
                                    <div className="grow">
                                        <h3 className="text-lg font-medium text-gray-600 leading-snug">
                                            Sweater Hoodie Pria Wanita Programmer Dicoding buku coding - Hitam, M
                                        </h3>

                                        <p className="text-sm text-gray-400 mt-1">
                                            Category
                                        </p>

                                        <p className="text-sm text-gray-400 mt-2">
                                            Rp. 100.000
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Transition>
    )
}
