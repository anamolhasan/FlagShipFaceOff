
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import About from '../pages/About'
import ErrorPages from '../pages/ErrorPages'
import PhoneDetails from '../pages/PhoneDetails'
import Cart from '../pages/Cart'


  
const router = createBrowserRouter([
       {
        path: '/',
        Component: MainLayout,
        errorElement : <ErrorPages />,
        children:[
            {
                index: true,
                Component: Home,
                hydrateFallbackElement: <p>Loading, please wait....</p>,
                loader : ()=>fetch('/phones.json')
            },
            {
                path : 'favorites',
                Component : Favorites
            },
            {
                path : 'about',
                element : <About />
            },
            // {
            //     path : 'cart',
            //     element : <Cart />
            // },
            {
                path : 'phone-details/:id',
                element : <PhoneDetails />,
                hydrateFallbackElement: <p>Loading, please wait....</p>,
                loader : ()=>fetch('/phones.json')
            }
        ]
       }
])

export default router

