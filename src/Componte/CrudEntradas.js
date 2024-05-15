import "../css/CrudEntradas.css";
import React, { useState } from "react";

export default function CrudEntradas() {
  return (
    <div>
      <h2 className="text-center p-5"> Registro De Entradas fijas </h2>
      <div className="user-form d-flex  justify-content-center ">
        <form className=" bg-secondary p-5 rounded-5 text-white">
          <br />
          <div className="mb-3 ">
            <label for="Usuario" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="Usuario"
              name="Usuario"
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
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Minutos (por día)</th>
              <th>Acciones</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
