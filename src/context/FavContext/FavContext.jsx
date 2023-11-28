import { createContext, useEffect, useState } from "react";

export const FavContext = createContext();

const favoritosInicial =  JSON.parse(localStorage.getItem('favoritos')) || [];

export const FavProvider = ({children}) =>{

    const [favoritos, setFavoritos] = useState(favoritosInicial);

    const agregarAFavoritos = (item, cantidad) => {

        const itemAgregadoFavoritos = {...item, cantidad};

        const nuevoFavorito = [...favoritos]
        const estaEnDeseos = nuevoFavorito.find((producto) => producto.id === itemAgregadoFavoritos.id);

        Swal.fire(
            "Producto agregado con exito!",
            "El producto fue agregado a lista de favoritos!",
            "success"
        );

        if (estaEnDeseos){
            nuevoFavorito.cantidad += cantidad;
        }else{
            nuevoFavorito.push(itemAgregadoFavoritos);
        }

        setFavoritos(nuevoFavorito);
    }   

    const cantidadEnFavoritos = () => {
        return favoritos.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioAproximado = () => {
        return favoritos.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0);
    }

    const vaciarFavoritos = () => {
        setFavoritos([]);
    }

    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    },[favoritos]);

    return (
        <FavContext.Provider value={ {favoritos, agregarAFavoritos, cantidadEnFavoritos, precioAproximado, vaciarFavoritos} }>
            {children}
        </FavContext.Provider>
    )
}