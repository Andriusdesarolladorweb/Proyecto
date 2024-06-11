import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Menu from ".//Componte/Menu";
import CrudEntradas from ".//Componte/CrudEntradas";
import Gastos from ".//Componte/Gastos";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Menu />
    <CrudEntradas />
    <Gastos />
  </StrictMode>,
);
