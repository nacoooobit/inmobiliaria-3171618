import React, { createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { ConfigState, Theme } from '../types';

const STORAGE_KEY = 'inmobiliaria_config_v1';

const defaultConfig: ConfigState = {
  theme: 'system',
  fontSize: 'medium',
  density: 'normal',
  notifications: { email: true, push: false, sound: true },
};

type ConfigContextType = {
  config: ConfigState;
  setConfig: (next: Partial<ConfigState>) => void;
  reset: () => void;
};

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

function detectSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stored, setStored] = useLocalStorage<ConfigState | null>(STORAGE_KEY, null);

  const initial = stored ?? defaultConfig;

  useEffect(() => {
    if (initial.theme === 'system') {
      const sys = detectSystemTheme();
      setStored({ ...initial, theme: sys });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setConfig = (next: Partial<ConfigState>) => {
    const updated: ConfigState = { ...initial, ...next, notifications: { ...initial.notifications, ...(next.notifications || {}) } };
    setStored(updated);
  };

  const reset = () => setStored(defaultConfig);

  const value = { config: (stored ?? initial) as ConfigState, setConfig, reset };

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};

export function useConfig() {
  const ctx = useContext(ConfigContext);
  if (!ctx) throw new Error('useConfig must be used within ConfigProvider');
  return ctx;
}
