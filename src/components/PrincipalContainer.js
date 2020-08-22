import React, { useState, useContext } from "react";
import "../App.css";
import Navbar from "./Navbar";
//COMPONENTES
import ContenedorMenu from "./ContenendorMenu";
import MenuLista from "./MenuLista";
//CONTEXT
import MenuProvider from "../context/MenuContext"


const PrincipalContainer = () => {
    
    
    return ( <>    
    <MenuProvider>      
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4"><ContenedorMenu/></div>
          <div className="col-md-8"><MenuLista/></div>
        </div>           
      </div>      
    </MenuProvider>         
    </> 
    );
}
 
export default PrincipalContainer;