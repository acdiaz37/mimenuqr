import React from "react";

const Plato = ({ plato }) => {
  return (
    <>
      <tr>
        <td>NOMBRE}</td>
        <td>$ PRECIO}</td>
        <td>COMENTARIO</td>
        <td>
        
            <button type="button" className="btn btn-sm btn-success">Er</button>
            <button type="button" className ="btn btn-sm btn-danger">El</button>
        
        </td>
      </tr>
    </>
  );
};

export default Plato;
