import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {
    return (
        <div className="card w-25">
            <img src={producto.image} className="card-img-top"/>
            <div className="card-body">
                <p>Nombre: {producto.nameProduct}</p>
                <p>Categoria: {producto.category}</p>
                <p>Precio: ${producto.price}</p>
                <Link to={`/item/${producto.id}`}>Ver Mas</Link>
            </div>
        </div>
    )
}

export default Item