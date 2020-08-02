import React from 'react'


const Plato = ({plato}) => {


    return ( 
        <>
        <h5>Desde Lista de platos</h5>
       
        <ul>
                <li>{plato.nombrePlato}</li>
                <li>{plato.precioPlato}</li>
                <li>{plato.comentarioPlato}</li>
            </ul>
        
        </>

     );
}
 
export default Plato;

