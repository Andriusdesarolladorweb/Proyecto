import React, { useEffect, useState } from "react";
import ReporteEntradas from "./ReportesEntradas";

export default function VistaEntradas() {
  // Cargar datos desde localStorage o usar datos predeterminados
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("entradas");
    return storedData ? JSON.parse(storedData) : mostrarDatos;
  });

  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  const [concepto, setConcepto] = useState("");
  const [editId, setEditId] = useState(null);

  return (
    <div>
      <ReporteEntradas data={data} />
    </div>
  );
}
