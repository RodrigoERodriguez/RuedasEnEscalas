import { doc, getDoc } from "firebase/firestore";
import { baseDeDatos } from "../../FireBase/config";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem ] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        const productoBaseDeDato = doc( baseDeDatos, "Productos", id ); 

        getDoc(productoBaseDeDato)
            .then((respuesta) => {
                setItem({ ...respuesta.data(), id: respuesta.id });
            })
    }, [id])
    

    return (
        <div>
            {item && <ItemDetail item= {item} />}
        </div>
    )
}

export default ItemDetailContainer