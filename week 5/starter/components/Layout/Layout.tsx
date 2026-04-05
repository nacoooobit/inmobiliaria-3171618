import React from 'react';
import { useConfig } from '../../contexts/ConfigContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { config } = useConfig();

  const dataTheme = config.theme === 'system' ? 'light' : config.theme;

  return (
    <div data-theme={dataTheme} className={`font-${config.fontSize} density-${config.density}`}>
      {children}
    </div>
  );
};

export default Layout;
