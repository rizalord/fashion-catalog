import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'

import RootLayout from './layouts/RootLayout'

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
        ],
    },
])

export default router