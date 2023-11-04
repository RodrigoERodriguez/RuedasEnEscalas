import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos , setproductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;
    console.log(categoria);

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (categoria){
                    setproductos(res.filter((prod) => prod.category === categoria));
                    setTitulo(categoria);
                } else{
                    setproductos(res);
                    setTitulo("Productos");
                }
                
            })
    }, [categoria])
    

    return (
        <div>
            <ItemList productos = {productos} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer