import ItemListContainer from "./routes/ItemListContainer";
import ItemDetailContainer from "./routes/ItemDetailContainer";
import CartWidget from "./routes/CartWidget";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./context/cartContext";
import { useEffect } from "react";
import {collection, getDocs} from "firebase/firestore"
import { firestore } from "./firebase/app";
function App() {
  //llamar a la api, solo en el primer enderizado
  useEffect(()=> {
    const collectionRef = collection(firestore, "items")
    getDocs(collectionRef)
    .then((snapshot) => {
      console.log(snapshot);
      snapshot.forEach((doc)=> console.log(doc.data()));
    });
    //.catch((error) => console.error(error))
    //.finally(() => {});

    // const docRef = doc(firestore, "items", "EE2qypg0gj4RayOk47jn")
    // getDoc(docRef).then((snapshot) => {
    //   console.log({snapshot});
    //   if(snapshot.exists()){
    //     console.log("La información del documentp es: ", snapshot.data())
    //   }else{
    //     console.log("El documento no existe")
    //   }
    // });
  }, []);
    
     
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/carrito" element={<CartWidget />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
