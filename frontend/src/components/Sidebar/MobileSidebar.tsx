import { Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from "../../context/store/hooks"
import { toggleNav } from "../../context/store/slices/navSlice"

export default function MobileSidebar() {
    const isNavOpen = useAppSelector((state) => state.nav.isNavOpen)
    const dispatch = useAppDispatch()

    return (
        <Transition
            show={isNavOpen}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div
                className={`fixed left-0 top-0 w-full h-full z-50 block lg:hidden`}
                id="mobileMenu"
            >
                <div className="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
                    <div
                        id="closeMenu"
                        className="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer"
                        onClick={() => dispatch(toggleNav())}
                    >
                        <i className="fas fa-times" />
                    </div>
                    {/* <!-- navlink --> */}
                    <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4">
                        Menu
                    </h3>
                    <div className="">
                        <a
                            href="index.html"
                            className="block px-4 py-2 font-medium transition hover:bg-gray-100"
                        >
                            Home
                        </a>
                        <a
                            href="shop.html"
                            className="block px-4 py-2 font-medium transition hover:bg-gray-100"
                        >
                            Shop
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 font-medium transition hover:bg-gray-100"
                        >
                            About Us
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 font-medium transition hover:bg-gray-100"
                        >
                            Contact Us
                        </a>
                    </div>
                    {/* <!-- navlinks end --> */}
                </div>

                {/* fill remaining space */}
                <div
                    className="absolute left-0 top-0 w-full h-full z-40 bg-black bg-opacity-30 shadow"
                    onClick={() => dispatch(toggleNav())}
                />
            </div>
        </Transition>
    )
}
