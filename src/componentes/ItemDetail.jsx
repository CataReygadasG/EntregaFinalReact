import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const ItemDetail = ({ joya }) => {
  const [added, setAdded] = useState(false);

  const { addToCart } = useContext(CartContext);

  const onAdd = (count) => {
    addToCart(joya, count);
    setAdded(true); //seteo en true cuadno se agrega un producto
  };
  return (
    <article className="box">
      <h2>{joya.name}</h2>
      <img src={joya.image} />
      <h3>{joya.description}</h3>
      <h4> ${joya.price} CLP</h4>
      {added ? (
        <Link to="/carrito">
          <button>Ir al carrito</button>
        </Link>
      ) : (
        <ItemCount initial={1} stock={joya.count} onAdd={onAdd} />
      )}
    </article>
  );
};
export default ItemDetail;
