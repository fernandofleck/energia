import React from 'react';

function Tabla(props) {
  return (
    <div className="w-100 table-responsive vh-100 px-3 mb-3 overflow-auto">
        <table className="table table-striped table-sm align-middle">
            <thead className="position-sticky top-0 table-dark">
                <tr>
                    <th scope="col" className="text-uppercase text-center align-middle col-1">Año</th>
                    <th scope="col" className="text-uppercase text-center align-middle">Central</th>
                    <th scope="col" className="text-uppercase text-center align-middle">Agente</th>
                    <th scope="col" className="text-uppercase text-center align-middle">Fuente de Generación</th>
                    <th scope="col" className="text-uppercase text-center align-middle">Tecnología</th>
                    <th scope="col" className="text-uppercase text-center align-middle">Potencia (MW)</th>
                </tr>
            </thead>
            <tbody>
                {props.potencias.map(p => {
                    return(
                        <tr className="">
                            <th scope="row" className="text-center">{p.Año}</th>
                            <td className="text-uppercase fst-italic">{p.central}</td>
                            <td className="text-uppercase fst-italic">{p.agente_descripcion}</td>
                            <td className="text-uppercase fst-italic">{p.fuente_generacion}</td>
                            <td className="text-uppercase fst-italic">{p.tecnologia}</td>
                            <th scope="row" className="text-end">{p.MW}</th>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  );
}

export default Tabla;