/*import React, { useState, useEffect } from "react";

export default function ReporteEntradas({ data }) {
  const [reporteMensual, setReporteMesual] = useState([]);
  const [totalGeneral, setTotalGeneral] = useState(0);

  useEffect(() => {
    const calcularReporte = () => {
      const agrupadoPorMes = data.reduce((acc, entrada) => {
        const mes = entrada.fecha.slice(0, 7);
        if (!acc[mes]) {
          acc[mes] = { totalmensula: 0, entrada: [] };
        }
        acc[mes].totalMensual += parseFloat(entrada.monto);
        acc[mes].entradas.push(entrada);
        return acc;
      }, {});

      const reporte = Object.keys(agrupadoPorMes).map((mes) => ({
        mes,
        totalMensual: agrupadoPorMes[mes].totalMensual,
        entradas: agrupadoPorMes[mes].entradas,
      }));

      const total = data.reduce(
        (sum, entrada) => sum + parseFloat(entrada.monto),
        0,
      );

      setReporteMesual(reporte);
      setTotalGeneral(total);
    };

    calcularReporte();
  }, [data]);

  return (
    <div>
      <h1>Reporte de Entradas mensuales</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Mes</th>
            <th>Total Mensual</th>
          </tr>
        </thead>
        <tbody>
          {reporteMensual.map((reporte) => (
            <tr key={reporte.mes}>
              <td>{reporte.mes}</td>
              <td>{reporte.totalMensual.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total General: {totalGeneral.toFixed(2)}</h3>
    </div>
  );
}
*/
