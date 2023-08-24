import useContador from "../hooks/useContador";
function ItemCount({joya}) {
  const { cantidad, incrementar, decrementar} = useContador(0);
  
    return( <article className="box">
    Catalogo de joyas
    <h3>{joya.name}</h3>
    <h4> ${joya.price} </h4>
  
    <button onClick={incrementar}>+</button>
    <p>{cantidad}</p>
    <button onClick={decrementar}>-</button>

    
  </article> 
  );
}

export default ItemCount
