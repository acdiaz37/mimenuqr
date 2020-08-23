import React, { useContext } from 'react'
import {MenuContext} from "../context/MenuContext"




const MenuLista = () => {
    
    //declarando el uso del context
   const {listadoPlatos, listaCategorias , nombreRest} = useContext(MenuContext);
   
   return (
        <>        
        <small className="text-muted float-right ">--Previsualiza tu menu--</small>
        <br/>
        
        <div className="card border border-success">
            {nombreRest.NombreRestaurante ? <>
                <small className="text-muted text-center ">--NombreRestaurante--</small>
                <h3 className="card-title text-center text-uppercase text-success">
                    <strong>{nombreRest.NombreRestaurante}</strong>
                </h3>
                
            </>
            :null}
               {
                    listaCategorias.map(listado=>(<>
                        <small className="text-muted ">--Categoria--</small>
                        <h3>{listado}</h3>
                        <div className="d-inline-block mx-3">                                        
                            <small className="text-muted d-md-inline-block ">--Item--</small>
                            <small className="text-muted d-md-inline-block float-right">--Precio--</small>                                      
                        </div>                 
                        {
                            listadoPlatos.filter(listado2=> listado2.categoria==listado).map(listado2=>(<>                        
                                        <div className="d-inline-block bg-secondary mx-3">                                        
                                            <h4 className="d-md-inline-block">{listado2.nombrePlato}</h4>
                                            <h4 className="d-md-inline-block float-right">$ {listado2.precioPlato}</h4>                                        
                                        </div>
                                        <h6 className="text-success mx-5 mb-1">**{listado2.comentarioPlato}</h6>
                                        

                                     
                                        
                                    
                                    
                                
                            </>))
                        }
                    </>))
                
                }
        
        </div>
        
        
     

        
        </>
      );

    }
export default MenuLista;