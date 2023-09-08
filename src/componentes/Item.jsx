import { Link } from "react-router-dom";

function Item({joya}) { 

  console.log({joya})
  return(<article className="box">
    <h2>{joya.name}</h2> 
    <img src={joya.image} />
    <h3>{joya.description}</h3>${joya.price} CLP 
    
   
    <Link to={`/item/${joya.id}`} ><button className="carrito">Detalle del producto</button></Link>
    </article>
  );
}

export default Item