import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContex/CartContex';
import { useForm } from "react-hook-form";
import { collection, addDoc} from "firebase/firestore";
import { baseDeDatos } from "../../FireBase/config"

const CheckOut = () => {

    const [pedidoId, setPedidoId] = useState("");
    const { register, handleSubmit } = useForm();
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const FechaPedido = new Date();

    const Compra = (data) => {
        const pedido = {
            estado: "Generada",
            fecha: FechaPedido, 
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const referenciaPedido = collection(baseDeDatos, "PedidosDeCompra"); 

        addDoc(referenciaPedido, pedido)
            .then((doc) =>{
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if(pedidoId){
    return(
        <div className="container">
            <h1 className="main-title">Gracias por tu compra</h1>
            <h2>Tu numero de tu pedido es: {pedidoId}</h2>
        </div>  
        )
    }

    const cantidadTotal = carrito.reduce((total, prod) => total + prod.cantidad, 0);

    return (

        <>

            <div>
                <h1>Carrito</h1>
                {
                    carrito.map((prod) => (
                        <div key={prod.id}> 
                            <h3>{prod.nameProduct}</h3>
                            <p>Precio total: ${prod.price * prod.cantidad}</p>
                            <p>Cantidad: {prod.cantidad}</p>
                        </div>
                    ))
                }

                {   
                    carrito.length > 0 ?
                    <>
                        <h2>Productos en Carrito: {cantidadTotal}</h2>
                        <h2>Precio total: ${precioTotal()}</h2>
                    </> :
                    <h2>El carrito esta vacio</h2>
                }
            </div>

            <div className="container">
                <h1 className="main-title">Finalizar compra</h1>
                <form className="formulario" onSubmit={handleSubmit(Compra)}>

                    <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                    <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                    <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                    <button className="enviar" type="submit">Comprar</button>

                </form>
            </div>
        </>
    )
}

export default CheckOut