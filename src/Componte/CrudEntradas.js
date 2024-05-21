import "../css/CrudEntradas.css";
import React, { useState } from "react";

export default function CrudEntradas() {
  const mostrar = [
    { id: 1, monto: 15000, fecha: "14/6/ 2024", concepto: "Pago Quincena" },
    { id: 1, monto: 15000, fecha: "14/6/ 2024", concepto: "Pago Quincena" },
    { id: 1, monto: 15000, fecha: "14/6/ 2024", concepto: "Pago Quincena" },
  ];
  const [data, setData] = useState(mostrar);

  return (
    <div>
      <div className="user-form d-flex  justify-content-center p-5">
        <div className="Container-formulario">
          <form className=" Formulario bg-white    text-black">
            <div className="Container-titulo bg-primary">
              <h4 className="text-center  text-white">Registro De Entradas</h4>
            </div>
            <div className="container">
              <div className="mb-3 ">
                <label for="Monto" className="form-label">
                  Monto
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Monto"
                  name="Monto"
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="Fecha" className="form-label">
                  Fecha
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="Fecha"
                  name="Fecha"
                />
              </div>
              <div className="mb-3">
                <label for="Concepto" className="form-label">
                  Concepto
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Concepto"
                  name="Concepto"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary submit-btn bg-primary text-center "
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
        <div className="container-table ">
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Concepto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.monto}</td>
                  <td>{elemento.fecha}</td>
                  <td>{elemento.concepto}</td>
                  <td className="d-flex">
                    <button className="btn btn-primary">Editar</button>
                    {"   "}
                    <button className="btn btn-danger">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
