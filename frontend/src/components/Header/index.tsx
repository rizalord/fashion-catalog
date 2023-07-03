import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../context/store/hooks'
import { toggleNav, toggleSearch } from '../../context/store/slices/navSlice'
import DesktopSearchbar from '../Searchbar/DesktopSearchbar'
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
                <Link to="/" className="block w-32 h-8 md:h-12">
                    <img src={logo} alt="logo" className="w-full h-full" />
                </Link>
                {/* <!-- logo end --> */}

                {/* <!-- searchbar --> */}
                <DesktopSearchbar />
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
