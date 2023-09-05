import { useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({joya, onAdd, added}) => {


  return(
    <article>
  {
    added ? (
      <Link to='/carrito' >Go to Cart</Link>
    ) : (
      <ItemCount joya={joya} initial={1} stock={joya.count} onAdd = {onAdd}  />
    )
    
  }
  
  </article>
    
    );    
  } 
    export default ItemDetail;

   