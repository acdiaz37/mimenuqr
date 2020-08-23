import React, {useContext} from 'react';
import NombreRestaurante from "../components/NombreRestaurante";
import Categorias from "../components/Categorias";
import FormularioMenu from "../components/FormularioMenu";
import {Link } from "react-router-dom";
import {MenuContext} from "../context/MenuContext"
import { db } from '../firebase';

const ContenedorMenu = () => {

    const sendingFirebase = () =>{
        
        const currentMenuFB = db.collection('FinalPlatos').doc()       
                
        currentMenuFB.set({
            NombreRestaurante: nombreRest.NombreRestaurante,
            platos: listadoPlatos,
            created: +new Date
        })
        .then(function(docRef){
            setidcurrentmenu(currentMenuFB.ua.path.segments[1])
            console.log(currentMenuFB.ua.path.segments[1])
        })
    }

    const {listadoPlatos, setidcurrentmenu, idcurrentmenu, nombreRest, banderaNombre,banderaCategorias, banderaPlatos} = useContext(MenuContext);
    
    return ( <>
    
    <div className="container-fluid my-3">
        <NombreRestaurante/>
        {banderaNombre ? <Categorias/>:null}
        {banderaCategorias ?<FormularioMenu/>:null}
        {banderaPlatos ?
            <Link to="/menu"><a className="btn btn-success btn-block"
                onClick={sendingFirebase}
            >Finalizar Menu</a></Link>
            :
            <h2>NO</h2>
        }
        <h2>{idcurrentmenu}</h2>
    </div>            
    </> 
    );
}
 
export default ContenedorMenu;