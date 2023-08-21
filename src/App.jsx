import ItemListContainer from "./routes/ItemListContainer";
import ItemDetailContainer from "./routes/ItemDetailContainer";
import CartWidget from "./routes/CartWidget";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { CartContext } from "./context/cartContext";

export const ThemeContext = createContext();
console.log({ThemeContext})
function App() {
  return (
    <CartContext.Provider value={[]}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/carrito" element={<CartWidget />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
