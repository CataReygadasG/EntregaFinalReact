import useContador from "../hooks/useContador";
function Carrito() {
const { cantidad, incrementar, decrementar} = useContador(0);
return<span>
    <h3>Anillos: </h3>
    <p>Cantidad {cantidad}</p>
    <button onClick={incrementar}>+</button>
    <button onClick={decrementar}>-</button>
</span>;
}
export default Carrito