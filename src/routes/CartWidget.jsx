import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CartWidget () {
  const cartContext = useContext(CartContext);
  console.log({ cartContext });
  return <div>Carrito de compras</div>;
}

export default CartWidget;
