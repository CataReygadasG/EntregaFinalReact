import { Link } from "react-router-dom";
import useContador from "../hooks/useContador";
function Item({joya}) { 
  const { cantidad, incrementar, decrementar} = useContador(0);
  return(<article className="box">
    <strong>{joya.name}</strong> ${joya.price} 
    <button onClick={incrementar}>+</button>
    <p>{cantidad}</p>
    <button onClick={decrementar}>-</button>
    <Link to={`/item/${joya.id}`} ><button className="carrito">Agregar al 🛒</button></Link>
    </article>
  );
}

export default Item