const CartItem = ({joya,deleteItem}) =>  {
  
  
  return( <article className="box">
  Catalogo de joyas
  <h3 style={{color:'black'}}>{joya.item.name}</h3>
  <img src={joya.item.image} />
  <h4 style={{color:'black'}}>cantidad: {joya.count}</h4>
  <h4 style={{color:'black'}}> ${joya.item.price} CLP </h4>
  <button className="botonF" onClick={()=>  deleteItem(joya.item.id)}>Eliminar</button>
  

  
</article> 
);
}


export default CartItem