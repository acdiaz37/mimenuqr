import React, { useState, useContext } from 'react'
import {MenuContext} from "../context/MenuContext"
import Swal from 'sweetalert2';

const Categorias = () => {    
   
    //funcion que guarda las categorias en el context
    const handleCategoria = (e) =>{        
        setcurrentCategoria({...currentCategoria, [e.target.name]:e.target.value})
    }

    const guardandoCategoria=(e)=>{

        e.preventDefault();    
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
         

        setlistaCategorias([...listaCategorias, currentCategoria.nombreCategoria])
        setcurrentCategoria({nombreCategoria:""})
        setbanderaCategorias(true)
        Toast.fire({
            icon: 'success',
            title: 'Se ha Agregado una Categoria'
          })

    }

    const [currentCategoria, setcurrentCategoria] = useState("")
    
    //declarando el uso del context
    const {setlistaCategorias,listaCategorias, setbanderaCategorias} = useContext(MenuContext);
    
    return ( 
    <>
        <small className="text-white-50 text-light float-right">--Ingresa Nombre Categoria--</small>
        <form onSubmit={guardandoCategoria}
            className="border border-warning p-2 input-group"
        > 
        
        
        <input onChange={handleCategoria}
            type="text"
            className="form-control"
            placeholder="Nombre Categoria"
            name="nombreCategoria"   
            value={currentCategoria.nombreCategoria}
            
        />
        <div className="input-group-append btn-group btn-group-sm">
            <button className="btn btn-warning"> Agregar</button>    
        </div>
        
        </form>    
    </>
    );
}
 
export default Categorias;