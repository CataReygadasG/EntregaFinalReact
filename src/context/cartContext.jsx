//Tener todas las funciones requeridas para el carrito
import { createContext, useState } from "react";
export const CartContext = createContext(); //crear un contecto y guardarlo dentro de la variable
//CartProvider: provedor de mi contexto
const CartProvider = ({ children}) =>{ //va a ser el provedor de mi contexto, vamos a recibir las props
    const [cartArray, setCartArray] = useState([]);
    const addToCart = (joya, count) => {
      console.log(`Agregaste ${joya.name}, cantidad: ${count}`);
      const newObj = {
        item: joya,
        count
      }
      setCartArray([...cartArray, newObj])
    }
   
    const deleteItem = (id) => {
      const updateCart = cartArray.filter(element=>element.id !== id); 
      setCartArray(updateCart);
    }

    const clearCart = () => {
      setCartArray([]);
    }
    const isInCart = (id) => {
      return cartArray.some(element=>element.id === id)
    }
    const value = {
      cartArray,
      addToCart, 
      deleteItem,
      clearCart,
      isInCart
    }

  return(
//va a consumir el contexto
<CartContext.Provider 
    value={value}>
    {children}
    </CartContext.Provider>
  ); 
}

export default CartProvider;
