import "../css/CrudEntradas.css";
import React, { useState, useEffect } from "react";

export default function CrudEntradas() {
  const mostrarDatos = [
    { id: 1, monto: 15000, fecha: "2024-06-14", concepto: "Pago Quincena" },
    { id: 2, monto: 15000, fecha: "2024-06-14", concepto: "Pago Quincena" },
    { id: 3, monto: 15000, fecha: "2024-06-14", concepto: "Pago Quincena" },
    { id: 4, monto: 15000, fecha: "2024-06-14", concepto: "Pago Quincena" },
    { id: 5, monto: 15000, fecha: "2024-06-14", concepto: "Pago Quincena" },
  ];

  // Cargar datos desde localStorage o usar datos predeterminados
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("entradas");
    return storedData ? JSON.parse(storedData) : mostrarDatos;
  });
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  const [concepto, setConcepto] = useState("");
  const [editId, setEditId] = useState(null);

  // Guardar datos en localStorage cuando 'data' cambia
  useEffect(() => {
    localStorage.setItem("entradas", JSON.stringify(data));
  }, [data]);

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

  // Insertar registro
  const handleInsertClick = () => {
    if (!editId) {
      const id = data.length ? Math.max(data.map((d) => d.id)) + 1 : 1;
      const nuevaEntrada = { id, monto, fecha, concepto };
      setData([...data, nuevaEntrada]);
      setMonto("");
      setFecha("");
      setConcepto("");
    }

    //Alerta de que se registro correctamente
    alert("!Se ha registrado correctamente¡");
  };

  // Editar registros
  const handleEditClick = (id) => {
    const entryToEdit = data.find((entry) => entry.id === id);
    if (entryToEdit) {
      setMonto(entryToEdit.monto);
      setFecha(entryToEdit.fecha);
      setConcepto(entryToEdit.concepto);
      setEditId(id);
    }
  };

  const handleSaveClick = () => {
    const newData = data.map((entry) => {
      if (entry.id === editId) {
        return {
          ...entry,
          monto: monto,
          fecha: fecha,
          concepto: concepto,
        };
      }
      return entry;
    });
    setData(newData);
    setMonto("");
    setFecha("");
    setConcepto("");
    setEditId();

    //Alerta de que se edito correctamente
    alert("Se ha editado correctamente¡");
  };

  const handleDeleteClick = (id) => {
    const newData = data.filter((entry) => entry.id !== id);
    setData(newData);

    //Alerta de que se elimino correctamente
    alert("Se ha eliminado correctamente¡");
  };

  return (
    <div>
      <div className="container-primary d-flex justify-content-center p-5">
        <div className="Container-formulario">
          <form className="Formulario bg-white text-black">
            <div className="Container-titulo bg-primary">
              <h4 className="text-center text-white">Registro De Entradas</h4>
            </div>
            <div className="container">
              <div className="mb-3">
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
                className="btn btn-primary submit-btn text-center d-flex m-auto"
                onClick={editId ? handleSaveClick : handleInsertClick}
              >
                {editId ? "Actualizar" : "Agregar"}
              </button>
              <br />
            </div>
          </form>
        </div>
        <div className="container-table">
          <table className="table table-bordered table-striped">
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
                  <td className="d-flex">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditClick(elemento.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteClick(elemento.id)}
                    >
                      Eliminar
                    </button>
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
