import React, {createContext, useState} from 'react'

//creando el context

export const MenuContext = createContext();

//porovider es donde se encuentras las funciones y state

const MenuProvider = (props)=>{
    //creando el state del context
    //espacion para states
    //STATE PARA NOMBRE DE RESTAURANTE
    const [nombreRest, setnombreRest] = useState({
        NombreRestaurante : ""
    })
    //STATE BANDERA PARA ACTIVAR LISTADO CATEGORIAS
    const [banderaNombre, setbanderaNombre] = useState(false)

    //STATE BANDERA PARA ACTIVAR FORMULARIO PLATOS
    const [banderaCategorias, setbanderaCategorias] = useState(false)

    //STATE BNDERA PARA ACTIVAR BOTON DE FINALIZAR CUANDO EXISTAN PLATOS
    const [banderaPlatos, setbanderaPlatos] = useState(false)
    
    //STATE LISTADO DE CATEGORIAS
    const [listaCategorias, setlistaCategorias] = useState([])

    //STATE PARA LISTADO DE PLATOS
    const [listadoPlatos, setlistadoPlatos] = useState([])

    //STATE QUE TOMA EL ID DADO POR FIREBASE UNA VEZ GUARDADO EL MENU
    const [idcurrentmenu, setidcurrentmenu] = useState("")

    return(
        <MenuContext.Provider
            value={{
                nombreRest,setnombreRest,
                banderaNombre,setbanderaNombre,
                listaCategorias,setlistaCategorias,
                listadoPlatos, setlistadoPlatos,
                banderaCategorias, setbanderaCategorias,
                banderaPlatos, setbanderaPlatos,
                idcurrentmenu, setidcurrentmenu
            }}
        >
            {props.children}
        </MenuContext.Provider>
    )
}
export default MenuProvider;