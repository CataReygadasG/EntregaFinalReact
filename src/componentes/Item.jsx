function Item({ producto } ){
    return (
    <article key={producto.id}>
            <h3>{producto.nombre}</h3>
            <h4> ${producto.precio} </h4>
            {producto.stock > 0 ?(
                 <button>Agregar al carrito</button>
                 ):(
                  <span>No tenemos más productos de este tipo</span>
                  )}
                 
            </article>  
    );
}
export default Item;