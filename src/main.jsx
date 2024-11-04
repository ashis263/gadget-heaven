import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root'
import Dashboard from './components/Dashboard/Dashboard'
import Statistics from './components/Statistics/Statistics'
import Brands from './components/Brands/Brands'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/brands',
        element: <Brands></Brands>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
