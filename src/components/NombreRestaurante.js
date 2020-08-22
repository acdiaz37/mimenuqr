import React, { useState, useContext }  from 'react'
import {MenuContext} from "../context/MenuContext"

const NombreRestaurante = () => {

    

    const [nombrelleno, setNombrelleno] = useState(false)   

    const handleInputChange = (e) => {
        setnombreRest({
          ...nombreRest,          
          [e.target.name]: e.target.value
        });
                
      };

      

      const guardandoNombre = (e) =>{
        e.preventDefault();
       /*  window.alert("guardndo nombre restaurante");
        window.alert(nombreRest.NombreRestaurante);
         */

        // validando el campo
        if(nombreRest.NombreRestaurante===''){
          window.alert("debe completar todos los campos para el nombre del restaurante ");
          setNombrelleno(false); //quitar
          setbanderaNombre(false);
          
        }else{
          //window.alert("si hay nombre de rest ");

          setNombrelleno(true);//quitar
          setbanderaNombre(true);
          //const InputNombreRest = nombreRest;          
          //window.alert(InputNombreRest);
          //setnombreRest(InputNombreRest);
          return;
        }
        
        
        
      }

      const cambiandoNombreLleno=(e)=>{
        setNombrelleno(false);
        //window.alert(nombreRest.NombreRestaurante);

      }

    //declarando el uso del context
    const {nombreRest, setnombreRest, setbanderaNombre} = useContext(MenuContext);

    return ( 
        <>    
          
            {nombrelleno ? 
                <><h2>{nombreRest.NombreRestaurante}</h2>
                <a className="btn btn-success" 
                    onClick={cambiandoNombreLleno} 
                    
                    
                >Editar</a></>
                :
                <><div className="border border-warning my-3">
                <form onSubmit={guardandoNombre}>
                <input
                  type="text"
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Nombre Restaurante"
                  name="NombreRestaurante"
                                   
                />
                <button className="btn btn-warning">GUARDAR</button>

                </form>
                </div>
                
                
                </>

            }                 
        </>
     );
}
 
export default NombreRestaurante;