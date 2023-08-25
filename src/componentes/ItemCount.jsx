import useContador from "../hooks/useContador";
const ItemCount = ({joya, onAdd}) =>  {
  const { cantidad, incrementar, decrementar} = useContador(0);
  
    return( <article className="box">
    Catalogo de joyas
    <h3>{joya.name}</h3>
    <h4> ${joya.price} </h4>
  
    <button onClick={incrementar}>+</button>
    <p>{cantidad}</p>
    <button onClick={decrementar}>-</button>
    <button onClick={() => onAdd(cantidad)}>Agregar producto</button>

    
  </article> 
  );
}

export default ItemCount
