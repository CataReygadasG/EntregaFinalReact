import { useEffect } from "react";
import { useParams } from "react-router-dom"
function Producto()  {
const params = useParams();
const [isLoading, setIsLoading] = useState(true);
const [joya, setJoya] = useState({});
useEffect(() => {
        fetch(`/joyas.json${params.productoId}`) 
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
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
  
}

export default Producto
