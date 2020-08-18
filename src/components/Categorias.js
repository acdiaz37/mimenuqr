import React, { useState } from 'react'

const Categorias = () => {
    
    //nombre de la categoria actual
    const [currentcategoria, setCurrentcategoria] = useState({
        nombreCategoria : ""
    });

    
   
    
    return ( 
    <>
    <h2>Agregando Categorias</h2>
        <input 
            type="text"
            className="form-control"
            placeholder="Nombre Categoria"
            name="nombreCategoria"
        />
        <a className="btn btn-warning" onClick>GUARDAR CATEGORIA</a>

    </>
    );
}
 
export default Categorias;