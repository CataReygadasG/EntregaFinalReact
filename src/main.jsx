import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './routes/Cart.jsx'
import ItemListContainer from './componentes/ItemListContainer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/productos' element={<ItemListContainer />} />
    <Route exact path='/carrito' element={<Cart />} />
 
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)