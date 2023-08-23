import { useContext } from 'react';
import Item from './Item'
import { CartContext } from '../context/cartContext';
//import '../componentes/itemlistc.css';
function ItemList({joyas}) {
     const cartContext = useContext(CartContext);
     console.log({cartContext})
  return (
    <main>
          {joyas.map(item => <Item joya={item} key={item.id} />)}
    </main>
  );
}

export default ItemList;