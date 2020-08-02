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
        <div>
          <FormularioMenu
            crearPlato={crearPlato}
          />
          {platos.map(plato => (
            <Plato  
                key= {plato.id}           
                plato={plato}         
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
/*
  
*/