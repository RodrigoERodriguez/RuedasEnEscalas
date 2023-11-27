import React, { useContext } from 'react';
import { FavContext } from '../../context/CartContex/FavContext';
import { CartContext } from '../../context/CartContex/CartContex';

const Favoritos = () => {
    const { agregarAlCarrito } = useContext(CartContext);
    const { favoritos, vaciarFavoritos } = useContext(FavContext);

    const handleVaciar = () => {
        vaciarFavoritos();
    };

    const handleAgregarAlCarrito = (prod, cantidad) => {
        agregarAlCarrito(prod, cantidad);
    };

    return (
        <div>
        <h1>Favoritos</h1>
        {favoritos.length > 0 ? (
            favoritos.map((prod) => (
            <div key={prod.id}>
                <h3>{prod.nameProduct}</h3>
                <p>Precio unitario: ${prod.price}</p>
                <p>Precio total: ${prod.price * prod.cantidad}</p>
                <p>Stock disponible: {prod.stock}</p>
                <p>Cantidad de Productos: {prod.cantidad}</p>
                <button onClick={() => handleAgregarAlCarrito(prod, prod.cantidad)}>
                Agregar al carrito
                </button>
            </div>
            ))
        ) : (
            <h2>Tu lista de favoritos está vacía</h2>
        )}
        {favoritos.length > 0 && (
            <button onClick={handleVaciar}>Vaciar Favoritos</button>
        )}
        </div>
    );
};

export default Favoritos;
