import { useContext, useEffect, useState } from "react";
import ItemList from "../componentes/ItemList"
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

function ItemListContainer() {
  const [isLoading, setLoading] = useState(true);
  const [joyas, setJoyas] = useState([]);
  const category = ["anillo", "arete", "collar"]
  const {id} = useParams();
  const {cartArray} = useContext(CartContext)
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
console.log(cartArray)
  if (isLoading)
    return (
      <div>
        <h3>Cargando...</h3>
      </div>
    );
  return (
    <main>
        <nav className="productos">
        <Link to="/">
            <button>Todos los productos</button>
          </Link>
          {category.map(categoria => <Link key={categoria} to={`/category/${categoria}`}> <button>{categoria}</button></Link> )}
         
          </nav>
          <ItemList joyas={joyas} />
    </main>
  );
}

export default ItemListContainer;