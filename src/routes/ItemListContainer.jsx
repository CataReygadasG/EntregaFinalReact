import { useEffect, useState } from "react";
import ItemList from "../componentes/ItemList";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/app";

function ItemListContainer() {
  const [isLoading, setLoading] = useState(true);
  const [joyas, setJoyas] = useState([]);
  const category = ["anillo", "arete", "collar"];
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const coleccionProductos = id
      ? query(collection(db, "items"), where("category", "==", id))
      : collection(db, "items");
    getDocs(coleccionProductos)
      .then((res) => {
        const list = res.docs.map((joyas) => {
          return {
            id: joyas.id,
            ...joyas.data(),
          };
        });
        setJoyas(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);
  console.log(joyas);

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
        {category.map((categoria) => (
          <Link key={categoria} to={`/category/${categoria}`}>
            {" "}
            <button>{categoria}</button>
          </Link>
        ))}
      </nav>
      <ItemList joyas={joyas} />
    </main>
  );
}

export default ItemListContainer;
