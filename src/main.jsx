import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route } from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout'

// pages
import Home from "./pages/Home"
import Products from './pages/Products'
import About from './pages/About'
import NotFound from "./pages/NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
