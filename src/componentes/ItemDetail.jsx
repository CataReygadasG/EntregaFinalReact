import ItemCount from "./ItemCount"
function ItemDetail({joya})  {
  
  return(
   <article className="box">
  Catalogo de joyas
  <h3>{joya.name}</h3>
  <h4> ${joya.price} </h4>
</article> 
<ItemCount joya={joya} />
);

    
    }
    export default ItemDetail;