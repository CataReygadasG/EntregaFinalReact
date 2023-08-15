import Item from './Item'
//import '../componentes/itemlistc.css';
function ItemList({joyas}) {
     
  return (
    <main>
          {joyas.map(item => <Item joya={item} key={item.id} />)}
    </main>
  );
}

export default ItemList;