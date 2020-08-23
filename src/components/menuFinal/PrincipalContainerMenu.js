import React from 'react'
import MostrandoMenu from './MostrandoMenu'

import MenuProvider2 from "../../context/MenuContext"


const PrincipalContainerMenu = () => {
    
    return ( <>
        <MenuProvider2>
            <MostrandoMenu/>
        </MenuProvider2>
     </>);
}
 
export default PrincipalContainerMenu;