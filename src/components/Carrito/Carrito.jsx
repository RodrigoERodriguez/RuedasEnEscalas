import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContex/CartContex'
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    const cantidadTotal = carrito.reduce((total, prod) => total + prod.cantidad, 0);

    return (
        <div>
            <h1>Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id}> 
                        <h3>{prod.nameProduct}</h3>
                        <p>Precio unitario: ${prod.price}</p>
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
                    <button onClick={handleVaciar}>Vaciar</button>
                    <Link to="/checkout">Finalizar Compra</Link>
                </> :
                <h2>El carrito esta vacio</h2>
            }
        </div>
    )
}

export default Carrito