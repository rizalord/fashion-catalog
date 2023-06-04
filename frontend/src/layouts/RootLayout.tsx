import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import MobileSidebar from '../components/Sidebar/MobileSidebar'
import Footer from '../components/Footer'
import Copyright from '../components/Footer/Copyright'
import MobileSearchbar from '../components/Searchbar/MobileSearchbar'

export default function RootLayout() {
    return (
        <div className="w-full h-full">
            <Header />

            <Navbar />

            <MobileSidebar />

            <MobileSearchbar />

            {/* Main */}
            <Outlet />
            {/* End Main */}

            <Footer />

            <Copyright />
        </div>
    )
}
