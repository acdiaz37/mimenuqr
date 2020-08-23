import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { MenuContext } from "../context/MenuContext";

const FormularioMenu = () => {
  const [plato, setPlato] = useState({
    nombrePlato: "",
    precioPlato: "",
    comentarioPlato: "",
    categoria:"",
  });

  const [catePlatos, setcatePlatos] = useState([])

  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setPlato({
      ...plato,
      [e.target.name]: e.target.value,
    });
  };

  //estraer valores
  const { nombrePlato, precioPlato, comentarioPlato, categoria } = plato;

  const submitFormulario = (e) => {
    e.preventDefault();
    //console.log("enviando form");

    //validar el formulario
    if (
      nombrePlato.trim() === "" ||
      precioPlato.trim() === ""       
    ) {
      //console.log("Hay un error, debe completar los campos");
      setError(true);      
      return;
    }

    if(categoria === "--Categorias--"){    
      window.alert("Debe Seleccionar una Categoria");
      return;
    }
    //Asignar un ID
    plato.id = uuidv4();

    //Crear una cita para ser listada
    setbanderaPlatos(true)
    setlistadoPlatos([...listadoPlatos, plato]);

    

    //Reiniciar el form
    setPlato({
      nombrePlato: "",
      precioPlato: "",
      comentarioPlato: ""      
    });
  };

  //declarando el uso del context
  const { listadoPlatos, setbanderaPlatos, setlistadoPlatos, listaCategorias } = useContext(MenuContext);

 /*  console.log(listaCategorias)
  console.log("debio salir categorias") */


  return (
    <>
      <form className="card card-body" onSubmit={submitFormulario}>
        {error ? (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Error! </strong> El nombre y precio son obligatorios
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ) : null}
        <small className="text-white-50 text-light float-right">--Ingresa Nombre Categoria--</small>
        <div className="form-group input-group">        
        <br/>
          <input
            className="form-control"
            placeholder="*Nombre plato"
            name="nombrePlato"
            type="text"
            onChange={handleInputChange}
            value={nombrePlato}
          />
        </div>

        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons bg-dark">attach_money</i>
          </div>
          <input
            className="form-control"
            placeholder="*Precio"
            name="precioPlato"
            type="number"
            min="0.00"
            step="0.01"
            onChange={handleInputChange}
            value={precioPlato}
          />
        </div>

        <div className="form-group input-group">
          <textarea
            className="form-control"
            placeholder="Comentarios"
            name="comentarioPlato"
            onChange={handleInputChange}
            value={comentarioPlato}
          />
        </div>

        <small>Seleccione una Categoria</small>
        <select name="categoria" onChange={handleInputChange}  className="form-control mb-1">
        <option>--Categorias--</option>          
          {listaCategorias.map(categoria=>(
            <option 
              key={categoria}
              value={categoria}   
                       
            >{categoria}</option>  
          ))}
          
        </select>

        <div className="form-group input-group">
          <button className="btn-warning btn-block">Agregar</button>
        </div>
      </form>
    </>
  );
};

export default FormularioMenu;
