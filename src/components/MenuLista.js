import React, { useContext } from 'react'
import {MenuContext} from "../context/MenuContext"




const MenuLista = () => {
    
    //declarando el uso del context
    const {listadoPlatos, listaCategorias , nombreRest} = useContext(MenuContext);

    
  /*   const filtrandofinal = () =>{
    
    const arrFiltradosFinal = {}
    for(var i=0; i<listaCategorias.length; i++){
        arrFiltradosFinal = listadoPlatos
            .filter(listado=> listado.categoria==listaCategorias[i]).map(listado=>(<>
                <h3>{listado.categoria}</h3>
                <h4>{listado.nombrePlato}</h4>                        
                </>))
    }
    return arrFiltradosFinal */

    

    return (
        <>
        <h1>{nombreRest.NombreRestaurante}</h1>
        {
            listaCategorias.map(listado=>(<>
                <h3>{listado}</h3>{
                    listadoPlatos.filter(listado2=> listado2.categoria==listado).map(listado2=>(<>                        
                        <h4>{listado2.nombrePlato}</h4>
                        <h4>$ {listado2.precioPlato}</h4>                        
                    </>))
                }
            </>))
        }

        
        </>
      );

    }
export default MenuLista;