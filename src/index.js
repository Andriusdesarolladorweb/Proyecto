import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Menu from ".//Componte/Menu";
import CrudEntradas from ".//Componte/CrudEntradas";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Menu />
    <CrudEntradas />
  </StrictMode>
);
