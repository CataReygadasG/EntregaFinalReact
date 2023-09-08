//ItemCount solo el contador y poner la validación que no vaya a negativo ni que pase el stock.
import useContador from "../hooks/useContador";
const ItemCount = ({stock, onAdd}) =>  {
  const { cantidad, incrementar, decrementar} = useContador(0);
  
    return( <article className="carritoL">
    <button className="agregar" onClick={incrementar} disabled={stock === cantidad}>+</button>
    <p className="cantidad" style={{color:'black'}}>{cantidad}</p>
    <button className="disminuir" onClick={decrementar} disabled={cantidad === 0}> - </button>
    <button  onClick={() => onAdd(cantidad)} disabled={cantidad === 0}> Agregar </button>
    
  </article> 
  );
}

export default ItemCount
