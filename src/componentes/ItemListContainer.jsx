import { useEffect, useState } from "react"
import Joyas from "../joyas.json"
function ItemListContainer ()  {
  const  [isLoading, setLoading] = useState(true);
  
  useEffect(()=>{
    Joyas()
            .then((res) => res.json())
            .then((json) => console.log(json))
            .catch((error) => console.error(error))
            .finally(() => {setLoading(false)
            })
  }, [])

  if (isLoading)
  return (
<div>
  <h3>Cargando...</h3>
</div>
);
  return (
   <main>
    {
    Joyas && Joyas.map(producto => {
      return(
        <article className="box" key={producto.id}>
          <strong>{producto.name}</strong> 
          {producto.price}
          </article>
          
      )
      
    })
  }
   </main>
  )
}

export default ItemListContainer
