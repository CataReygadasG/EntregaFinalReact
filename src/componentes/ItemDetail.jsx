import { useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
const ItemDetail = ({joya}) => {
const [quantityAdded, setQuantityAdded] = useState(0)   
    const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
  }
  return(
    // <ItemCount joya={joya} />
    <article>
  {
    quantityAdded > 0 ? (
      <Link to= '/cart' >Terminar compra</Link>
    ) : (
      <ItemCount joya={joya} initial={1} stock={joya.stock} onAdd = {handleOnAdd} />
    )
  }
  </article>
    
    );    
  } 
    export default ItemDetail;

   