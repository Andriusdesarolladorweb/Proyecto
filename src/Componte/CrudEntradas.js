import "../css/CrudEntradas.css";
export default function CrudEntradas() {
  return (
    <div className="hearder">
      <div className="container bg-secondary rounded text-black">
        <br />
        <h2> Registro De Entradas </h2>
        <br />
        <form action="">
          <div className="">
            <label>Monto: </label>
            <input type="text" />
            <br />
            <br />
            <label>Fecha:</label>
            <input type="date" />
            <br />
            <br />
            <label>Concepto:</label>
            <input type="text" />
          </div>
          <br />
          <div className="">
            <button className="btn btn-info ">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
