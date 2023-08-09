import { useEffect, useState } from "react";
import Item from "./Item";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProductos([
        {
          id: 1,
          nombre: "Anillo de oro blanco con brillante",
          stock: 5,
          precio: 890000,
        },
        {
          id: 2,
          nombre: "Anillo líneas entrelazadas de oro blanco",
          stock: 0,
          precio: 1000000,
        },
        {
          id: 3,
          nombre: "Anillo de brillantes recubierto con oro blanco",
          stock: 0,
          precio: 750000,
        },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && <h4>Cargando...</h4>}
      {!isLoading && productos.map((producto) => <Item producto={producto} />)}
    </>
  );
}

export default ItemListContainer;
