import { createContext, useState } from "react";

export const CartContext = createContext([]);

function CartProvider({ children}) {
    const [cartQuantity, setCartQuantity] = useState(0)
    
    const incrementCartQuantity = ()=> {
        setCartQuantity(cartQuantity+ 1);
    }
  return(
<CartContext.Provider 
    value={{
        CartQuantity: cartQuantity,
        incrementCartQuantity: incrementCartQuantity,
  }}>
    {children}
    </CartContext.Provider>
  ); 
}

export default CartProvider
