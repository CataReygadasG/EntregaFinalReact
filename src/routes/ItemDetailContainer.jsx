//Muestra los productos por id
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
function Producto()  {
const params = useParams();
const [isLoading, setIsLoading] = useState(true);
const [joya, setJoya] = useState({});

useEffect(() => {
        fetch('/joyas.json') 
          .then((res) => res.json())
          .then((json) => {
            const producto = json.find(item => item.id == params.id);
            console.log(producto)
          })
          .catch((error) => console.error(error))
          .finally(() => setIsLoading(false))
}, []);
console.log({params})
if (isLoading)
return (
  <div>
    <h3>Cargando...</h3>
  </div>
);
return <div>
  Catalogo de joyas
  <h3>{joya.name}</h3>
<h4> ${joya.price} </h4>
</div> 

 
}

export default Producto
