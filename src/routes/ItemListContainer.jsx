import { useEffect, useState } from "react";
import './ItemListC.css';
import { Link, useParams } from "react-router-dom";
function ItemListContainer() {
  const [isLoading, setLoading] = useState(true);
  const [joyas, setJoyas] = useState([]);
  const category = ["anillo", "arete", "collar"]
  const {id} = useParams();
  
  useEffect(() => {
    // Simular una llamada a una API o carga de archivo JSON
    setTimeout(() => {
      fetch("/joyas.json") // Ruta a tu archivo JSON
        .then((response) => response.json())
        .then((data) => {
          //setJoyas(data); // Almacenar los productos en el estado
        if (id) {
          const arrayFiltrado = data.filter(item => item.category === id);
          setJoyas(arrayFiltrado);
          } else {
          setJoyas(data);
          }
          setLoading(false); // Cambiar el estado de carga
        });
    }, 2000); // Simulamos una demora de 2 segundos
  }, [id]);

  if (isLoading)
    return (
      <div>
        <h3>Cargando...</h3>
      </div>
    );
  
    
  return (
    <main>
       <nav>
          <span>Categorias
            {category.map(categoria => <Link key={categoria} to={`/category/${categoria}`}></Link> )}
          </span>
          <Link to="/">
            <button>Productos</button>
          </Link>
          </nav>
      {joyas.map((producto) => (
        <article className="box" key={producto.id}>
          <strong>{producto.name}</strong> ${producto.price}
          
        </article>
      ))}
        
    </main>
  );
}

export default ItemListContainer;