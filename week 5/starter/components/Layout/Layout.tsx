import React from 'react';
import { useConfig } from '../../contexts/ConfigContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { config } = useConfig();

  const dataTheme = config.theme === 'system' ? 'light' : config.theme;

  return (
    <div data-theme={dataTheme} className={`font-${config.fontSize} density-${config.density}`}>
      <header className="site-header">
        <div className="container">
          <h1 className="brand">Starter Week 5</h1>
          <nav className="nav-links">
            <a href="#">Inicio</a>
            <a href="#">Ajustes</a>
            <a href="#">Ayuda</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
