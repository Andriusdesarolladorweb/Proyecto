import "../css/menu.css";
import Gastos from "./Gastos";
import CrudEntradas from "./CrudEntradas";

export default function Menu({ changeComponent }) {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg bg-black  ">
        <div class="container-fluid">
          <a class="navbar-brand text-white " href="#">
            Control de ahorros
          </a>

          <div class="collapse navbar-collapse   " id="navbarNavDropdown">
            <ul class="navbar-nav  ">
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  onClick={() => changeComponent(<CrudEntradas />)}
                >
                  Entradas
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  onClick={() => changeComponent(<Gastos />)}
                >
                  Gastos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Ahorros
                </a>
              </li>

              <li class="nav-item ">
                <a class="nav-link  " href="#">
                  Tajertas de credito
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link  " href="#">
                  Pagos de deudas
                </a>
              </li>

              <li class="nav-item ">
                <a class="nav-link  " href="#">
                  Todos los reportes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
