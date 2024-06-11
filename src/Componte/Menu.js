import "../css/menu.css";
export default function Menu() {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg bg-black  ">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            Control de ahorros
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse   " id="navbarNavDropdown">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link  " aria-current="page" href="#">
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
                <a
                  class="nav-link  "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tajertas de credito
                </a>
              </li>

              <li class="nav-item ">
                <a
                  class="nav-link  "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
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
