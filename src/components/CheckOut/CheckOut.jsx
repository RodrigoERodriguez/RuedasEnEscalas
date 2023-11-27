// import React, { useContext, useState } from 'react'
// import { CartContext } from '../../context/CartContex/CartContex';
// import { useForm } from "react-hook-form";
// import { collection, addDoc} from "firebase/firestore";
// import { baseDeDatos } from "../../FireBase/config";

// const CheckOut = () => {

//     const [pedidoId, setPedidoId] = useState("");

//     const { register, handleSubmit } = useForm();
//     const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

//     const Compra = (data) => {
//         const pedido = {
//             cliente: data,
//             productos: carrito,
//             total: precioTotal()
//         }
//         console.log(pedido);

//         const referenciaPedido = collection(baseDeDatos, "PedidosDeCompra"); 

//         addDoc(referenciaPedido, pedido)
//             .then((doc) =>{
//                 setPedidoId(doc.id)
//                 vaciarCarrito();
//             })
//     }

//     if(pedidoId){
//         return(
//             <div className="container">
//                 <h1 className="main-title">Gracias por tu compra</h1>
//                 <h2>Tu numero de tu pedido es: {pedidoId}</h2>
//             </div>  
//         )
//     }
//     else{

//     }

//     return (
//         <div className="container">
//             <h1 className="main-title">Finalizar compra</h1>
//             <form className="formulario" onSubmit={handleSubmit(Compra)}>

//                 <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
//                 <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
//                 <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

//                 <button className="enviar" type="submit">Comprar</button>

//             </form>
//         </div>
//     )
// }

// export default CheckOut