import { Link } from "react-router-dom";
import '../routes/itemlistc.css';
function Item({joya}) {     
  return (
    <article className="box">
    <strong>{joya.name}</strong> ${joya.price} 
    <Link to={`/item/${joya.id}`} ><button className="carrito">Agregar al 🛒</button></Link>
    </article>
  );
}

export default Item