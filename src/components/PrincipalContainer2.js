import React, { useState, useContext } from "react";
import "../App.css";
import Navbar from "./Navbar";
//COMPONENTES
import ContenedorMenu from "./ContenendorMenu";
import MenuLista from "./MenuLista";
//CONTEXT
import MenuProvider from "../context/MenuContext"
import MostrandoMenu from "./menuFinal/MostrandoMenu";


const PrincipalContainer2 = () => {
    
    
    return ( <>    
    <MenuProvider>      
      <Navbar />
      <MostrandoMenu/>
    </MenuProvider>         
    </> 
    );
}
 
export default PrincipalContainer2;  