import React from "react";
import ItemList from "./ItemList";
import StatsCard from "./StatsCard";
import RealTimeIndicator from "./RealTimeIndicator";

export const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <header>
        <h1>estado del dashboard</h1>
        <p>Montoreo de propiedades en tiempo real</p>
      </header>

      <main style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20, marginTop: 20 }}>
        <section style={{ background: "#fff", padding: 12, borderRadius: 6 }}>
          <ItemList />
        </section>

        <aside style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: "#fff", padding: 12, borderRadius: 6 }}>
            <StatsCard />
          </div>
          <div style={{ background: "#fff", padding: 12, borderRadius: 6 }}>
            <RealTimeIndicator intervalMs={5000} />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Dashboard;
