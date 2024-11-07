import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root'
import Dashboard from './components/Dashboard/Dashboard'
import Statistics from './components/Statistics/Statistics'
import Errorpage from './components/Errorpage/Errorpage'
import Brands from './components/Brands/Brands'
import Gadgets from './components/Gadgets/Gadgets'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Cart from './components/Cart/Cart'
import Wishlist from './components/WishList/Wishlist'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Gadgets></Gadgets>,
      },
      {
        path: '/smartphones',
        element: <Gadgets></Gadgets>,
      },
      {
        path: '/wearables',
        element: <Gadgets></Gadgets>,
      },
      {
        path: '/laptops',
        element: <Gadgets></Gadgets>,
      },
      {
        path: '/audio',
        element: <Gadgets></Gadgets>,
      },
      {
        path: '/gaming',
        element: <Gadgets></Gadgets>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard',
            element: <Cart></Cart>
          },
          {
            path: '/dashboard/cart',
            element: <Cart></Cart>
          },
          {
            path: '/dashboard/wishlist',
            element: <Wishlist></Wishlist>
          }
        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/brands',
        element: <Brands></Brands>
      },
      {
        path: '/details/:id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('gadgets.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
