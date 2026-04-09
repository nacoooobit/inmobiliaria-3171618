import React from "react";
import { createRoot } from "react-dom/client";
// Mostrar el catálogo inmobiliario en español
import AppCatalog from "./AppCatalog";

import "./styles/global.css";

const root = document.getElementById("root")!;
createRoot(root).render(
  <React.StrictMode>
    <AppCatalog />
  </React.StrictMode>
);
