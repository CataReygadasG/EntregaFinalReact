//Muestra los productos por id
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../componentes/ItemDetail"
import { CartContext } from "../context/cartContext";
function ItemDetailContainer()  {
const params = useParams();
const [isLoading, setIsLoading] = useState(true);
const [joya, setJoya] = useState({});
const [added, setAdded] = useState(false);
const { addToCart } = useContext(CartContext)

useEffect(() => {
        fetch('/joyas.json') 
          .then((res) => res.json())
          .then((json) => {
            const producto = json.find(item => item.id == params.id);
            setJoya(producto)
          })
          .catch((error) => console.error(error))
          .finally(() => setIsLoading(false))
}, []);
console.log({params})
if (isLoading) {
  return (
    <h1>Cargando..</h1>
  );
}
const onAdd = (count) => {
  addToCart(joya, count);
  setAdded(true); //seteo en true cuadno se sgrega un producto
} 

return (
  <ItemDetail joya={joya} onAdd={onAdd} added={added} />
);
}
export default ItemDetailContainer
