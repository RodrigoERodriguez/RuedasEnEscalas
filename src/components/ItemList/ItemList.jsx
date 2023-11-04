import { toCapital } from "../../helpers/toCapital";
import Item from "../Item/Item";

const ItemList = ( { productos, titulo } ) => {

    console.log(productos);
    return (
        <div>
            <h2>{toCapital(titulo)}</h2>
            <div className="productos">
                { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
            </div>
        </div>
    )
}

export default ItemList