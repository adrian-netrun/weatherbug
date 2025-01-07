import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// this actually renders multiple components as pages - it seems
const router = createBrowserRouter([
  {
    path: "/main", 
    element: <App />
  },
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>,
)
