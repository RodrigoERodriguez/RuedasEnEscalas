const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar, handleFavoritos} ) => {
    return (
        <div>
            <div>
                <button onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button onClick={handleAgregar}>Agregar al carrito</button>
            <button onClick={handleFavoritos}>Favoritos</button>
        </div>
    )
}

export default ItemCount