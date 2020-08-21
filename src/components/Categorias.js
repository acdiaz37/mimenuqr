import React, { useState, useContext } from 'react'
import {MenuContext} from "../context/MenuContext"

const Categorias = () => {    
   
    //funcion que guarda las categorias en el context
    const handleCategoria = (e) =>{        
        setcurrentCategoria({...currentCategoria, [e.target.name]:e.target.value})
    }

    const guardandoCategoria=(e)=>{
        e.preventDefault();    
        setlistaCategorias([...listaCategorias, currentCategoria.nombreCategoria])
        setcurrentCategoria({nombreCategoria:""})
        setbanderaCategorias(true)

    }

    const [currentCategoria, setcurrentCategoria] = useState("")
    
    //declarando el uso del context
    const {setlistaCategorias,listaCategorias, setbanderaCategorias} = useContext(MenuContext);
    
    return ( 
    <>
        <form onSubmit={guardandoCategoria}> 
        <input onChange={handleCategoria}
            type="text"
            className="form-control"
            placeholder="Nombre Categoria"
            name="nombreCategoria"   
            value={currentCategoria.nombreCategoria}
            
        />
        <button className="btn btn-warning"> Agregar Categoria</button>
        </form>    
    </>
    );
}
 
export default Categorias;