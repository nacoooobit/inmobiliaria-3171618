import React from "react";

export const Navbar: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="brand">Catálogo</h1>
        <nav className="nav-links">
          <a href="#">Inicio</a>
          <a href="#">Filtros</a>
          <a href="#">Acerca</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
