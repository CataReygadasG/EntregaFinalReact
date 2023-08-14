import ItemCount from "./ItemCount"
function ItemDetail({joya})  {
  
  return(
   <article className="box">
  Catalogo de joyas
  <h3>{joya.name}</h3>
  <h4> ${joya.price} </h4>
  {joya.map(item => <ItemCount joya={item} key={item.id} />)}
</article> 

);

    
    }
    export default ItemDetail;