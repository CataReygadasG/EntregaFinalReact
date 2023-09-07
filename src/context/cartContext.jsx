//Tener todas las funciones requeridas para el carrito
import { createContext, useState } from "react";
export const CartContext = createContext(); //crear un contecto y guardarlo dentro de la variable
//CartProvider: provedor de mi contexto
const CartProvider = ({ children}) =>{ //va a ser el provedor de mi contexto, vamos a recibir las props
    const [cartArray, setCartArray] = useState([]);
    const addToCart = (joya, count) => {
      if(isInCart(joya.id)){
        console.log("ya esta el producto en el carrito") //acción cuando ya esta agregado
      }else{
        console.log(`Agregaste ${joya.name}, cantidad: ${count}`);
        const newObj = {
          item: joya,
          count
        }
        setCartArray([...cartArray, newObj])
      }
      }
    
   
    const deleteItem = (id) => {
      const updateCart = cartArray.filter(element=>element.item.id !== id); 
      setCartArray(updateCart);
    }

    const clearCart = () => {
      setCartArray([]);
    }
    const isInCart = (id) => {
      return cartArray.some(element=>element.item.id === id)
    }
    const total = () =>{
      //funcion para sacar el total
    }
    const cartQuantity = () =>{
      //funcion para la cantidad total para el icono del carrito en el navbar
    }
    const value = {
      cartArray,
      addToCart, 
      deleteItem,
      clearCart,
      isInCart,
      total, 
      cartQuantity
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