import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FormularioMenu from "./components/FormularioMenu";
import Plato from "./components/Plato";
import NombreRestaurante from "./components/NombreRestaurante";
import Categorias from "./components/Categorias";

function App() {
  //state de los platos

  const [platos, setPlatos] = useState([]);

  const [nombreRestaurante, setnombreRestaurante] = useState("")

  const [menucompleto, setMenucompleto] = useState([
    { id: 1,
      nombreRestaurante: "Restaurante el mico",
      menu:[{
          idCategoria: 1,
          nombreCategoria: "Platos Fuertes",
          articulosMenu: [{
            idArticulo: 1,
            nombreArticulo: "Plato fuerte 1",
            precioArticulo: 4000
          },
          {
            idArticulo: 2,
            nombreArticulo: "Plato fuerte 2",
            precioArticulo: 5000  
          }],
          idCategoria: 2,
          nombreCategoria: "Bebidas",
          articulosMenu:[{
            idArticulo: 1,
            nombreArticulo: "Bebida 1",
            precioArticulo: 4000
          },
          {
            idArticulo: 2,
            nombreArticulo: "Bebida 2",
            precioArticulo: 5000  
          }]

          }]

    }])

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
      <div className="container-fluid">
        <NombreRestaurante
          nombreRestaurante={nombreRestaurante}
          setnombreRestaurante={setnombreRestaurante}
        />
      </div>

      <Categorias
        
      />
      
      
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
              <th scope="col">##</th>   
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