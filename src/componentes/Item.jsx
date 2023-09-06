import { Link } from "react-router-dom";

function Item({joya}) { 

  console.log({joya})
  return(<article className="box">
    <strong>{joya.name}</strong> 
    <img src={joya.image} />
    <h3>{joya.description}</h3>${joya.price} CLP 
    
   
    <Link to={`/item/${joya.id}`} ><button className="carrito">Ver detalle del producto</button></Link>
    </article>
  );
}

export default Item