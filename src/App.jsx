import ItemListContainer from "./routes/ItemListContainer";
import ItemDetailContainer from "./routes/ItemDetailContainer";
import CartWidget from "./routes/CartWidget";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./context/cartContext";
import Checkout from "./componentes/checkout/Checkout";
//import {useEffect} from "react";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/carrito" element={<CartWidget />} />
          <Route  path="/checkout" element={<Checkout/>} />

        </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
