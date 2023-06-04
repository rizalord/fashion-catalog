import { useAppDispatch } from '../../context/store/hooks'
import { toggleNav, toggleSearch } from '../../context/store/slices/navSlice'
import logo from './../../assets/images/logo.svg'

export default function Header() {
    const dispatch = useAppDispatch()

    return (
        <header className="py-4 shadow-sm bg-white">
            <div className="container flex items-center justify-between">

                {/* <!-- navicons --> */}
                <div className="space-x-8 flex lg:hidden items-center">
                    <button
                        className="block text-center text-gray-700 hover:text-primary transition"
                        onClick={() => dispatch(toggleNav())}
                    >
                        <div className="text-2xl">
                            <i className="fas fa-bars"></i>
                        </div>
                    </button>
                </div>
                {/* <!-- navicons end --> */}

                {/* <!-- logo --> */}
                <a href="#" className="block w-32">
                    <img src={logo} alt="logo" className="w-full" />
                </a>
                {/* <!-- logo end --> */}

                {/* <!-- searchbar --> */}
                <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                    <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                        <span className="absolute left-4 top-3 text-lg text-gray-400">
                            <i className="fas fa-search"></i>
                        </span>
                        <input type="text"
                            className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
                            placeholder="search" />
                        <button type="submit"
                            className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition">
                            Search
                        </button>
                    </div>

                    <div className="absolute left-0 top-16 w-full z-50 hidden bg-white rounded-sm shadow-sm border border-gray-200"
                        id="desktopSearch"
                    >
                        <ul className="w-full">
                            <li className="flex items-center justify-between py-3 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition">
                                <div className="flex flex-row justify-between gap-3">
                                    <div className="grow">
                                        <h3 className="text-lg font-light text-black leading-snug">
                                            Sweater Hoodie Pria Wanita Programmer
                                        </h3>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center justify-between py-3 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition">
                                <div className="flex flex-row justify-between gap-3">
                                    <div className="grow">
                                        <h3 className="text-lg font-light text-black leading-snug">
                                            Sweater Hoodie Pria Wanita Programmer
                                        </h3>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- searchbar end --> */}

                {/* <!-- navicons --> */}
                <div className="space-x-8 w-28 hidden lg:flex items-center"></div>
                <div className="space-x-8 flex lg:hidden items-center">
                    <button className="block text-center text-gray-700 hover:text-primary transition relative"
                        onClick={() => dispatch(toggleSearch())}
                    >
                        <div className="text-2xl">
                            <i className="fas fa-search"></i>
                        </div>
                    </button>
                </div>
                {/* <!-- navicons end --> */}

            </div>
        </header>
    )
}
