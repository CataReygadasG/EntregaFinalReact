function Item({joya}) {     
  return (
    <article className="box">
    <strong>{joya.name}</strong> ${joya.price}
    <button className="carrito">Agregar al 🛒</button>
    </article>
  );
}

export default Item;