import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContex/CartContex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div>
            <Link to="/carrito">
                <FontAwesomeIcon icon={faCartShopping} /> 
                <span> {cantidadEnCarrito()}</span>
            </Link>
        </div>
    )
}

export default CartWidget