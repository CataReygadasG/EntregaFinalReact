import { useState } from "react"
function InputCount({onConfirm}) {
    const [value, setValue] = useState();
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const handleClick = () => {
        onConfirm(value);
    };
  return (<label>
    Ingrese la cantidad a agregar 
    <input onChange={handleChange} />
    <button onClick={handleClick}></button>
  </label>

  );
}

export default InputCount
