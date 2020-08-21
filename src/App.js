import React, { useState, useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";


import NombreRestaurante from "./components/NombreRestaurante";
import Categorias from "./components/Categorias";
import ContenedorMenu from "./components/ContenendorMenu";
import MenuProvider from "./context/MenuContext"


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
    <MenuProvider>      
      <Navbar />
      <div className="container-fluid">
      <ContenedorMenu/>
        <NombreRestaurante
          nombreRestaurante={nombreRestaurante}
          setnombreRestaurante={setnombreRestaurante}
        />
      </div>

      <Categorias/>
      
    {/*   
      <div className="container p-4">        
          <FormularioMenu
            crearPlato={crearPlato}
          />
      </div>         
     
         */}
        
        
      
    </MenuProvider>
  );
}

export default App;
/*
  
*/