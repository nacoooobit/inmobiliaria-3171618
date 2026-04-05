import React from 'react';
import { ConfigProvider } from './contexts/ConfigContext';
import Layout from './components/Layout/Layout';
import SettingsPanel from './components/SettingsPanel/SettingsPanel';
import { ITEMS } from './data/items';
import { Card } from './components/Card/Card';
import './styles.css';

export const App: React.FC = () => {
  return (
    <ConfigProvider>
      <Layout>
        <div style={{ display: 'flex', gap: 24 }}>
          <main style={{ flex: 1 }}>
            <h1>Inmobiliaria — Catálogo</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
              {ITEMS.map((p) => (
                <Card key={p.id}>
                  <Card.Header>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Actions>{p.available ? 'Disponible' : 'No disponible'}</Card.Actions>
                  </Card.Header>
                  <Card.Body>
                    <div>{p.address}</div>
                    <div>{p.city}</div>
                    <div>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(p.price)}</div>
                    <div>{p.bedrooms} hab.</div>
                  </Card.Body>
                  <Card.Footer>
                    <button disabled={!p.available}>{p.available ? 'Contactar' : 'Ver más'}</button>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          </main>

          <aside style={{ width: 320 }}>
            <SettingsPanel />
          </aside>
        </div>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
