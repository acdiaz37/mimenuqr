import React from "react";

const Plato = ({ plato }) => {
  return (
    <>
      <tr>
        <td>{plato.nombrePlato}</td>
        <td>$ {plato.precioPlato}</td>
        <td>{plato.comentarioPlato}</td>
        <div className="btn-group" data-toggle="buttons">
            <button type="button" className="btn btn-sm btn-success">Editar</button>
            <button type="button" className="btn btn-sm btn-danger">Eliminar</button>
        </div>
      </tr>
    </>
  );
};

export default Plato;
