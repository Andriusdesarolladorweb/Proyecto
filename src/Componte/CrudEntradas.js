import "../css/CrudEntradas.css";
import React, { useState } from "react";

export default function CrudEntradas() {
  const mostrar = [
    { id: 1, monto: 15000, fecha: 2 / 5 / 2024, concepto: "Mami" },
    { id: 1, monto: 15000, fecha: 2 / 5 / 2024, concepto: "Mami" },
    { id: 1, monto: 15000, fecha: 2 / 5 / 2024, concepto: "Mami" },
    { id: 1, monto: 15000, fecha: 2 / 5 / 2024, concepto: "Mami" },
    { id: 1, monto: 15000, fecha: 2 / 5 / 2024, concepto: "Mami" },
  ];
  const [data, setData] = useState(mostrar);

  return (
    <div>
      <h2 className="text-center p-5"> Registro De Entradas fijas </h2>
      <div className="user-form d-flex  justify-content-center ">
        <form className=" bg-secondary p-5 rounded-5 text-white">
          <br />
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
            className="btn btn-primary submit-btn bg-black text-center m-auto"
          >
            Agregar
          </button>
        </form>
        <div className=" p-5">
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Concepto</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.monto}</td>
                  <td>{elemento.fecha}</td>
                  <td>{elemento.concepto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
