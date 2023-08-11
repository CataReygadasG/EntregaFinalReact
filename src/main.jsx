import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './routes/ItemListContainer.jsx'
import ItemDetailContainer from "./routes/ItemDetailContainer"
import CartWidget from './routes/CartWidget.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<ItemListContainer />} />
    <Route path='/category' element={<ItemListContainer />} />
    <Route path='/item/:id' element={<ItemDetailContainer />} />
    <Route exact path='/carrito' element={<CartWidget />} />
 
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)