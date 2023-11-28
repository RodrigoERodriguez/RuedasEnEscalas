import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { pedidos } from '../../FireBase/config';

const Pedidos = () => {
    const [codigoPedido, setCodigoPedido] = useState('');
    const [item, setItem] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if (codigoPedido.trim() === '') {
        return;
        }

        const pedidoBaseDeDato = doc(pedidos, 'PedidosDeCompra', codigoPedido);

        getDoc(pedidoBaseDeDato)
        .then((respuesta) => {
            if (respuesta.exists()) {
            setItem({ ...respuesta.data(), id: respuesta.id });
            } else {
            setItem(null);
            setError('El pedido ingresado no existe');
            }
        })
    }, [codigoPedido]);

    const handleBuscarClick = () => {
        if (codigoPedido.trim() === '') {
        setError('Por favor, ingresa un codigo de pedido');
        return;
        }

        setError('');
    };

    return (
        <div className="container">
        <h1 className="main-title">Mis Pedidos</h1>
        <p>Ingresa el codigo de tu pedido o tu email</p>

        <input
            type="text"
            placeholder="Codigo de pedido"
            value={codigoPedido}
            onChange={(e) => setCodigoPedido(e.target.value)}
        />
        <button className="enviar" type="submit" onClick={handleBuscarClick}>
            Buscar
        </button>

        {error && <p className="error-message">{error}</p>}

        {item && (
            <div>
            <h2>Detalles del Pedido:</h2>
            <p>ID: {item.id}</p>
            </div>
        )}
        </div>
    );
};

export default Pedidos;
