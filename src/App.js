import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FormularioMenu from "./components/FormularioMenu";
import Plato from "./components/Plato";

function App() {
  //state de los platos

  const [platos, setPlatos] = useState([]);

  //funcion que toma los platos actuales y agrega uno nuevo
  const crearPlato = plato=>{
    console.log(plato)
    setPlatos([
      ...platos,plato
    ])
  }

  return (
    <>
      <Navbar />
      <div className="container p-4">        
          <FormularioMenu
            crearPlato={crearPlato}
          />
      </div>         
      {platos.length>0 ?(<>            
            <div className=" container p-10">
              <div className="card card-body">
                <h3>Lista de platos</h3>

                <table className=" table table-striped">
            <thead>
              <th scope="col">Nombre Plato</th>
              <th scope="col">Precio</th>              
              <th scope="col">Comentarios</th>   
            </thead>
            <tbody>
              
            {platos.map(plato => (
                <Plato  
                    key= {plato.id}           
                    plato={plato}         
                />
              ))}
              
            </tbody>
          </table>


       
          </div>
          </div></>
            
            
            ): (<h3>No hay datos {platos.length}</h3>)}
        
        
        
      
    </>
  );
}

export default App;
/*
  
*/