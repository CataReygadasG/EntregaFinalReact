import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartItem from "../componentes/CartItem";
import { Link } from "react-router-dom";

const CartWidget= ()=>{
const {cartArray, deleteItem} = useContext(CartContext); 
if (cartArray.length === 0){
  return(
    //no me lo visualiza por pantalla
    <div className="vacio">
      <p>No hay productos en el carrito de compras</p>
      <Link to='/'>Volver al inicio</Link>
    </div>
  )
}
return(
  <div>
    
    {cartArray.map(prod => <CartItem key={prod.item.id} joya={prod} deleteItem={deleteItem}/>)}
    <Link to= "/checkout"><button className="terminar">Terminar de comprar</button></Link>
    
  </div>
)


}

export default CartWidget;
