import { useState, useContext} from "react"
import { CartContext } from "../../context/cartContext"
import {addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/app"

const Checkout = () => {
    const[user, setUser] = useState({})
    const[validateEmail, setValidateEmail]= useState('')
    const{cartArray, total, clearCart} = useContext(CartContext)
    const[orderId, setOrderId] = useState("");
    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
const finalizarCompra =(e) =>{
    e.preventDefault()
   if(!user.name && !user.phone){
    alert("complete los campos")
}else{
    let order = {
        user,
        item: cartArray,
        total: total(),
        date: serverTimestamp()
    }
    const ventas = collection(db, "orders")
    addDoc(ventas,order)
    .then((res)=> {
        setOrderId(res.id)
        clearCart()
    })
    .catch((error)=> console.log(error))

}
}
  return (
<div>
    {orderId !== ""
    ?<div className="idorden">
        <h1>Felicitaciones! Tu orden fue generada con éxito!!✔</h1>
        <h2> SU ID DE INGRESO ES: {orderId}🛒</h2>
    </div>
    :
    <div className="formulario">
<h1>Terminar compra</h1>
<h3>Por favor llenar con sus datos</h3>
<form onSubmit={finalizarCompra}>
    <div>
        <label>Nombre completo</label>
        <input className="placeholder" onChange={datosComprador} type="text" placeholder="Nombre y Apellido" name="name" required/>
    </div>
    <div>
        <label>Número de telefono</label>
        <input className="placeholder" onChange={datosComprador} type="number" placeholder="+56912345678" name="phone" required/>
    </div>
    <div>
        <label>Email</label>
        <input className="placeholder" onChange={datosComprador} type="email" placeholder="nombre123@gmail.com" name="mail" required/>
    </div>
    <div>
    <label>Repita su email</label>
    <input  className="placeholder" type="email" placeholder="nombre123@gmail.com" name="mail" onChange={((e)=>setValidateEmail(e.target.value))}/>
    </div>
    <button type="submit" disabled={validateEmail !== user.mail}>Generar orden</button>
</form>
</div>}
</div>




  )
}

export default Checkout
