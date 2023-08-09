import { useEffect, useState } from "react";
import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";

function App() {
  const [name, setName] = useState("")
  useEffect(()=> {
    fetch ("https://rickandmortyapi.com/api/character")
    .then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data.results[1]);
      setName(data.results[1].name)
    });
    // .catch((error)=> {
    //   console.error(error);
    // });
  }, []);
  return (
    <>
    <div>
    {name ? <h3>El nombre del personaje es {name} </h3> : <h5>cargando...</h5>}
    
    </div>
      <NavBar />
      <ItemListContainer />
    </>
  );
}

export default App;
