import React from "react";

export const Navbar: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="brand">Catálogo Semana 4</h1>
        <nav className="nav-links">
          <a href="#">Inicio</a>
          <a href="#">Buscar</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
