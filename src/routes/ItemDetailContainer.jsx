//Muestra los productos por id
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../componentes/ItemDetail"
function ItemDetailContainer()  {
const params = useParams();
const [isLoading, setIsLoading] = useState(true);
const [joya, setJoya] = useState({});



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

return (
  <ItemDetail joya={joya} />

);


}

export default ItemDetailContainer
