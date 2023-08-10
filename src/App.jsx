import Cantidad from "./componentes/Cantidad";
import NavBar from "./componentes/NavBar"
import Joyas from "./joyas.json"
import { Link } from "react-router-dom";


function App() {

  return (
 
<main>
  <NavBar/>
  <nav> 
    <Link to="/carrito">Carrito</Link>
    </nav>
 
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
 <Cantidad titulo="cantidad" />
 
</main>

  );
}

export default App;
