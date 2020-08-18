import React, { useState }  from 'react'

const NombreRestaurante = ({nombreRestaurante, setnombreRestaurante}) => {

    const [nombreRest, setnombreRest] = useState({
        NombreRestaurante : ""
    })

    const [nombrelleno, setNombrelleno] = useState(false)   

    const handleInputChange = (e) => {
        setnombreRest({
          ...NombreRestaurante,          
          [e.target.name]: e.target.value
        });
        console.log(e.target.value)        
      };

      

      const guardandoNombre = (e) =>{
        e.preventDefault();
        //window.alert("guardndo nombre restaurante");
        //window.alert(nombreRest.NombreRestaurante);
        

        // validando el campo
        if(nombreRest.NombreRestaurante===''){
          window.alert("debe completar todos los campos para el nombre del restaurante ");
          setNombrelleno(false);
        }else{
          //window.alert("si hay nombre de rest ");

          setNombrelleno(true);
          const InputNombreRest = nombreRestaurante;          
          window.alert(InputNombreRest);
          setnombreRestaurante(InputNombreRest);
          return;
        }
        
        
        
      }

      const cambiandoNombreLleno=(e)=>{
        setNombrelleno(false);
        //window.alert(nombreRest.NombreRestaurante);

      }

    return ( 
        <>
          
          <div className="container p-10">
            <div className="card card-body">
            {nombrelleno ? 
                <><h1>{nombreRest.NombreRestaurante}</h1>
                <a className="btn btn-success" 
                    onClick={cambiandoNombreLleno} 
                    
                    
                >Editar</a></>
                :
                <><input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Restaurante"
                  name="NombreRestaurante"
                 
                />
                <a className="btn btn-warning" onClick={guardandoNombre}>GUARDAR</a>
                
                </>

            }
            </div>
          </div>
          
           
           
          
      
         
        
        </>
     );
}
 
export default NombreRestaurante;