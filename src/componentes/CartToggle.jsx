import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CartToggle (){
    const cartContext = useContext(CartContext);
    console.log({cartContext})
    const handleClick = ()=> {
      cartContext.incrementFavsQuantity()
    }
  return (
    <button onClick={handleClick} className="Añadir carrito">Agregar al 🛒</button>
  )
}

export default CartToggle
