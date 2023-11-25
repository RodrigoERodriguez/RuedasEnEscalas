import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContex/CartContex";


const ItemDetail = ( {item} ) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <div>
                <img src= {item.image} alt= {item.nameProduct}/>
                <div>
                    <h3>{item.nameProduct}</h3>
                    <p>{item.description}</p>
                    <p>Categoria: {item.category}</p>
                    <p>${item.price}</p>
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar} 
                        handleRestar={handleRestar} 
                        handleAgregar={() => {agregarAlCarrito(item, cantidad) }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail