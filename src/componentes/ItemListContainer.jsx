import { useEffect, useState } from "react";

function ItemListContainer() {
  const [isLoading, setLoading] = useState(true);
  const [joyas, setJoyas] = useState([]);

  useEffect(() => {
    // Simular una llamada a una API o carga de archivo JSON
    setTimeout(() => {
      fetch("/joyas.json") // Ruta a tu archivo JSON
        .then((response) => response.json())
        .then((data) => {
          setJoyas(data); // Almacenar los productos en el estado
          setLoading(false); // Cambiar el estado de carga
        });
    }, 2000); // Simulamos una demora de 2 segundos
  }, []);

  if (isLoading)
    return (
      <div>
        <h3>Cargando...</h3>
      </div>
    );
    
  return (
    <main>
      {joyas.map((producto) => (
        <article className="box" key={producto.id}>
          <strong>{producto.name}</strong> {producto.price}
        </article>
      ))}
    </main>
  );
}

export default ItemListContainer;