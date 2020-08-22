import React, {useContext} from 'react';
import NombreRestaurante from "../components/NombreRestaurante";
import Categorias from "../components/Categorias";
import FormularioMenu from "../components/FormularioMenu";

import {MenuContext} from "../context/MenuContext"

const ContenedorMenu = () => {
    const {banderaNombre,listaCategorias,banderaCategorias} = useContext(MenuContext);
    
    return ( <>
    
    <div className="container-fluid my-3">
        <NombreRestaurante/>
        {banderaNombre ? <Categorias/>:null}
        {banderaCategorias ?<FormularioMenu/>:null}
    </div>            
    </> 
    );
}
 
export default ContenedorMenu;