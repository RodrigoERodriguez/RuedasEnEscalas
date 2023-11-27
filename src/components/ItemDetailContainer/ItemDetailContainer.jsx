import { doc, getDoc } from "firebase/firestore";
import { baseDeDatos } from "../../FireBase/config";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link, useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState();
    const id = useParams().id;

    useEffect(() => {
        const productoBaseDeDato = doc(baseDeDatos, "Productos", id);

        getDoc(productoBaseDeDato)
            .then((respuesta) => {
                if (respuesta.exists()) {
                    setItem({ ...respuesta.data(), id: respuesta.id });
                } else {
                    setError("El producto ingresado no existe o no se encuenta disponible. Prueba buscando en nuestro catalogo");
                }
            })
    }, [id]);

    return (
        <div>
            {error ? (
                <p>{error} <Link to="/productos">Catalogo</Link></p>
            ) : (
                item && <ItemDetail item={item} />
            )}
        </div>
    );
};

export default ItemDetailContainer;
