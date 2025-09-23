import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './assets/style/main.css'
import "bootstrap"
import Layout from './components/layout/Layout.jsx'
import Home from './pages/home/Home.jsx'
import ListUsers from './pages/user/ListUser.jsx'
import CreateUser from './pages/user/CreateUser.jsx'
import EditUser from './pages/user/EditUser.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/users',
        element: <ListUsers />
      },
      {
        path: '/create-user',
        element: <CreateUser />
      },
      {
        path: '/edit-user/:id',
        element: <EditUser />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
