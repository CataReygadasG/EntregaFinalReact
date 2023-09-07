import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartItem from "../componentes/CartItem";
import { Link } from "react-router-dom";

const CartContainer= ()=>{

const {cartArray, deleteItem} = useContext(CartContext); 

if (cartArray.lenght === 0){
  return(
    //no me lo visualiza por pantalla
    <div>
      <p>No hay productos en el carrito de compras</p>
      <Link to='/'>Volver al inicio</Link>
    </div>
  )
}
return(
  <div>
       <p>No hay productos en el carrito de compras</p>
       <Link to='/'>Volver al inicio</Link>
    {cartArray.map(prod => <CartItem key={prod.item.id} joya={prod} deleteItem={deleteItem}/>)}
  </div>
)


}

export default CartContainer;
