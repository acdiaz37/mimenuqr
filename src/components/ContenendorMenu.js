import React, {useContext} from 'react';
import NombreRestaurante from "../components/NombreRestaurante";
import Categorias from "../components/Categorias";
import Plato from "../components/Plato";
import FormularioMenu from "../components/FormularioMenu";

import {MenuContext} from "../context/MenuContext"

const ContenedorMenu = () => {
    const {banderaNombre,listaCategorias,banderaCategorias} = useContext(MenuContext);
    console.log(listaCategorias);
    console.log("Imprimiendo Categorias");

    
    return ( <>
        <h1>----------------</h1>
        <NombreRestaurante/>
        {banderaNombre ? <Categorias/>:<h2>No hay nombre res</h2>}
        {banderaCategorias ?<FormularioMenu/>: <h2>No hay categorias</h2>}
        <h1>----------------</h1>
        
    </> );
}
 
export default ContenedorMenu;