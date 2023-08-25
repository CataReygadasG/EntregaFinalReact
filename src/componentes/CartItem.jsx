const CartItem = ({joya,handleDelete}) =>  {
  const { cantidad, } = useContador(0);
  
    return( <article className="box">
    Catalogo de joyas
    <h3>{joya.name}</h3>
    <h4> ${joya.price} </h4>
    <button onClick={handleDelete}>Eliminar</button>
    

    
  </article> 
  );
}


export default CartItem
