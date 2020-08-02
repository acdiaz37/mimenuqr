import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FormularioMenu = ({crearPlato}) => {
  //state del nombre del restaurante
 

  const [plato, setPlato] = useState({    
    nombrePlato: "",
    precioPlato: "",
    comentarioPlato: ""
  }); 

  const [error, setError] = useState(false)

  const handleInputChange = (e) => {
    setPlato({
      ...plato,
      [e.target.name]: e.target.value
    })
  };

  //estraer valores 
  const {nombrePlato, precioPlato, comentarioPlato} = plato;

  const submitFormulario = (e) => {    
    e.preventDefault();
    console.log("enviando form");
    
    //validar el formulario
    if(nombrePlato.trim()==='' || precioPlato.trim()===''
    || comentarioPlato.trim()==='' ){
      console.log("Hay un error, debe completar los campos");
      setError(true)
      return;
    }
    //Asignar un ID
    console.log(plato)
    plato.id = uuidv4();

    //Crear una cita para ser listada
    crearPlato(plato);    

    //Reiniciar el form
    setPlato({
      nombrePlato: "",
      precioPlato: "",
      comentarioPlato: ""
    })

    
    
  };

  return (
    <>
      <form className="card card-body" onSubmit={submitFormulario}>
        {error ? (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Error! </strong> Todos los campos son obligatorios
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

        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">description</i>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Restaurante"
            name="nombrerestaurante"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group">
          <input
            className="form-control"
            placeholder="Nombre plato"
            name="nombrePlato"
            type="text"
            onChange={handleInputChange}
            value={nombrePlato}
          />
        </div>

        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">attach_money</i>
          </div>
          <input
            className="form-control"
            placeholder="Precio"
            name="precioPlato"
            type="number"
            min="0.00"
            max="10000.00"
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

        <div className="form-group input-group">
          <button className="btn-warning btn-block">Agregar</button>
        </div>
      </form>
    </>
  );
};

export default FormularioMenu;
