import "../css/menu.css";
export default function Menu() {
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
                <a class="nav-link " href="#">
                  Entradas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Gastos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Ahorros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  " href="#">
                  Plan de pagos
                </a>
              </li>

              <li class="nav-item ">
                <a class="nav-link  " href="#">
                  Tajertas de credito
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
