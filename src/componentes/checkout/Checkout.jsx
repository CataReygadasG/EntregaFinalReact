import { useState, useContext} from "react"
import { CartContext } from "../../context/cartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/app"

const Checkout = () => {
    const[user, setUser] = useState({})
    const[validateEmail, setValidateEmail]= useState('')
    const[cart, total, clear] = useContext(CartContext)
    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
const finalizarCompra =(e) => {
    e.preventDefaul()
   if(user.name && !user.phone){
    alert("complete los campos")
}else{
    let order = {
        user,
        item: cart,
        total: total(),
        date: serverTimestamp
    }
    const ventas = collection(db, "orders")
    addDoc(ventas,order)
    .then((res)=> console.log(res.id))
    .catch((error)=> console.log(error))

}
}
  return (
    <div>
    <h2>Terminar compra</h2>
    <h5>Por favor llenar con sus datos</h5>
    <form onSubmit={finalizarCompra}>
        <div>
            <label>Nombre completo</label>
            <input onChange={datosComprador} type="text" placeholder="Nombre y Apellido" name="name"/>
        </div>
        <div>
            <label>Número de telefono</label>
            <input onChange={datosComprador} type="number" placeholder="+56912345678" name="phone"/>
        </div>
        <div>
            <label>Email</label>
            <input onChange={datosComprador} type="email" placeholder="nombre123@gmail.com" name="mail"/>
        </div>
        <div>
        <label>Repita su email</label>
        <input type="email" placeholder="nombre123@gmail.com" name="mail" onChange={((e)=>setValidateEmail(e.target.value))}/>
        </div>
        <button className="botonF" type="submit" disabled={validateEmail !== user.mail}>Generar orden</button>
    </form>
    </div>
  )
}

export default Checkout
