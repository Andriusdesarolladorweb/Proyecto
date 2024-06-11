import "../css/Gastos.css";
import React, { useState } from "react";

//Array para mostrar datos en la tabla
export default function Gastos() {
  const mostrar = [
    { id: 1, monto: 3000, fecha: "14/7/2024", concepto: "Pago Deuda" },
    { id: 2, monto: 1500, fecha: "14/6/2024", concepto: "Compre unos Zapatos" },
  ];

  const [data, setData] = useState(mostrar);
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  const [concepto, setConcepto] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Monto") {
      setMonto(value);
    } else if (name === "Fecha") {
      setFecha(value);
    } else if (name === "Concepto") {
      setConcepto(value);
    }
  };

  const insertar = () => {
    const id = data.length + 1;
    const nuevaEntrada = { id, monto, fecha, concepto };
    setData([...data, nuevaEntrada]);
    setMonto("");
    setFecha("");
    setConcepto("");
  };

  return (
    <div>
      <div className="container-primary d-flex justify-content-center p-5">
        <div className="Container-formulario">
          <form className=" Formulario bg-white text-black">
            <div className="Container-titulo bg-primary">
              <h4 className="text-center text-white">Registro De Gastos</h4>
            </div>
            <div className="container">
              <div className="mb-3 ">
                <label htmlFor="Monto" className="form-label">
                  Monto
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Monto"
                  name="Monto"
                  value={monto}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="Fecha" className="form-label">
                  Fecha
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="Fecha"
                  name="Fecha"
                  value={fecha}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Concepto" className="form-label">
                  Concepto
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Concepto"
                  name="Concepto"
                  value={concepto}
                  onChange={handleChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary submit-btn text-center d-flex m-auto "
                onClick={insertar}
              >
                Agregar
              </button>
              <br />
            </div>
          </form>
        </div>
        <div className="container-table ">
          <table className="table table-bordered table-striped ">
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
                <tr key={elemento.id}>
                  <td>{elemento.id}</td>
                  <td>{elemento.monto}</td>
                  <td>{elemento.fecha}</td>
                  <td>{elemento.concepto}</td>
                  <td className="d-flex ">
                    <button className="btn btn-primary ">Editar</button>
                    <button className="btn btn-danger ">Eliminar</button>
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
