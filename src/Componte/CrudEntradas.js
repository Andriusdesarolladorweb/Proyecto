import "../css/CrudEntradas.css";
import React, { useState } from "react";

//Array para mostra datos en la tabla
export default function CrudEntradas() {
  const mostrar = [
    { id: 1, monto: 15000, fecha: "14/6/ 2024", concepto: "Pago Quincena" },
    { id: 1, monto: 15000, fecha: "14/6/ 2024", concepto: "Pago Quincena" },
    { id: 1, monto: 15000, fecha: "14/6/ 2024", concepto: "Pago Quincena" },
    { id: 1, monto: 15000, fecha: "14/6/ 2024", concepto: "Pago Quincena" },
    { id: 1, monto: 15000, fecha: "14/6/ 2024", concepto: "Pago Quincena" },
  ];

  const [data, setData] = useState(mostrar);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const insertar = () => {
    var ValorInsertar = mostrar;
    ValorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(ValorInsertar);
    setData(dataNueva);
  };

  return (
    <div>
      <div className="container-primary d-flex  justify-content-center p-5">
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
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
                <tr>
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
