import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './routes/Cart.jsx'
import Items from './routes/Items.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<App />} />
    <Route exact path='/carrito' element={<Cart />} />
    <Route exact path='/item' element={<Items />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)