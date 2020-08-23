import React, {useContext} from 'react'
import {MenuContext} from "../../context/MenuContext"

const MostrandoMenu = () => {

    //const {idcurrentmenu} = useContext(MenuContext);
    const {idcurrentmenu} = useContext(MenuContext);

    console.log("desde mnu")
    console.log(idcurrentmenu)
    

    return ( <>
        <h3>{idcurrentmenu}</h3>
    </>);
}
 
export default MostrandoMenu;