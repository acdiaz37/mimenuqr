/* import React, {useContext} from 'react';
import NombreRestaurante from "../components/NombreRestaurante";
import Categorias from "../components/Categorias";
import FormularioMenu from "../components/FormularioMenu";
import {Link } from "react-router-dom";
import {MenuContext} from "../context/MenuContext"
import { db } from '../firebase';
import Swal from 'sweetalert2';

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

        const valores =()=>{
            return(<h4>{idcurrentmenu}</h4>)
        
        
            
        } 
        Swal.fire({
            title: '<strong>Felicidades,<br/>Tu menu ha sido creado</strong>',
            icon: 'success',
            html:valores,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
          })
    }

    const {listadoPlatos, setidcurrentmenu, idcurrentmenu, nombreRest, banderaNombre,banderaCategorias, banderaPlatos} = useContext(MenuContext);
    
    return ( <>
    
    <div className="container-fluid my-3">
        <NombreRestaurante/>
        {banderaNombre ? <Categorias/>:null}
        {banderaCategorias ?<FormularioMenu/>:null}
        {banderaPlatos ?
            <a className="btn btn-success btn-block"
                onClick={sendingFirebase}
            >Finalizar Menu</a>
            :
            <h2>NO</h2>
        }
        <h2>{idcurrentmenu}</h2>
    </div>            
    </> 
    );
}
 
export default ContenedorMenu; */