import React from 'react';
import { useConfig } from '../../contexts/ConfigContext';

export const SettingsPanel: React.FC = () => {
  const { config, setConfig, reset } = useConfig();

  return (
    <aside className="settings-panel">
      <h2>Configuración</h2>

      <section>
        <label>Theme</label>
        <select value={config.theme} onChange={(e) => setConfig({ theme: e.target.value as any })}>
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
          <option value="system">Sistema</option>
        </select>
      </section>

      <section>
        <label>Tamaño de texto</label>
        <select value={config.fontSize} onChange={(e) => setConfig({ fontSize: e.target.value as any })}>
          <option value="small">Pequeño</option>
          <option value="medium">Mediano</option>
          <option value="large">Grande</option>
        </select>
      </section>

      <section>
        <label>Densidad</label>
        <select value={config.density} onChange={(e) => setConfig({ density: e.target.value as any })}>
          <option value="compact">Compacto</option>
          <option value="normal">Normal</option>
          <option value="spacious">Espacioso</option>
        </select>
      </section>

      <section>
        <label>Notificaciones</label>
        <div>
          <label>
            <input type="checkbox" checked={config.notifications.email} onChange={(e) => setConfig({ notifications: { ...config.notifications, email: e.target.checked } })} />
            Email
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={config.notifications.push} onChange={(e) => setConfig({ notifications: { ...config.notifications, push: e.target.checked } })} />
            Push
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={config.notifications.sound} onChange={(e) => setConfig({ notifications: { ...config.notifications, sound: e.target.checked } })} />
            Sonido
          </label>
        </div>
      </section>

      <div style={{ marginTop: 12 }}>
        <button onClick={reset}>Resetear a valores por defecto</button>
      </div>
    </aside>
  );
};

export default SettingsPanel;
