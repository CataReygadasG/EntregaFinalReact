import Cantidad from "./componentes/Cantidad";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar"
import Joyas from "./joyas.json"


function App() {

  return (
 
<main>
  <NavBar/>
  {
    Joyas.map(producto => {
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
