import useContador from "../hooks/useContador";
function Cantidad({ titulo} ){
    const {cantidad, incrementar, decrementar} = useContador(0);
    console.log({cantidad});


    return (
    <article>
        <h4>{titulo}</h4>
        
            <span>
                <button onClick={incrementar}>+</button>
                {cantidad}
                <button onClick={decrementar}>-</button>
            </span>   
            </article>  
    );
}
export default Cantidad;