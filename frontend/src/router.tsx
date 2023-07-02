import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'

import RootLayout from './layouts/RootLayout'
import DetailProduct from './pages/DetailProduct'
import About from './pages/About'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'shop',
                element: <Shop />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'products/:id',
                element: <DetailProduct />,
            }
        ],
    },
])

export default router