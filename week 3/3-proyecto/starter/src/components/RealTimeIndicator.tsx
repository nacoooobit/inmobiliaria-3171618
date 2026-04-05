import React, { useEffect, useState } from "react";
import { RealTimeData } from "../types";
import { fetchRealTimeVisits } from "../utils/api";

export const RealTimeIndicator: React.FC<{ intervalMs?: number }> = ({ intervalMs = 5000 }) => {
  const [data, setData] = useState<RealTimeData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const update = async () => {
      try {
        const r = await fetchRealTimeVisits();
        if (!mounted) return;
        setData(r);
      } catch (err: any) {
        if (!mounted) return;
        setError(err?.message ?? String(err));
      }
    };

    update();
    const id = setInterval(update, intervalMs);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, [intervalMs]);

  return (
    <div>
      <h3>visita en tiempo real</h3>
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
      <div style={{ fontSize: 24 }}>{data ? data.value : "—"}</div>
      <div style={{ fontSize: 12, color: "#666" }}>{data ? new Date(data.lastUpdated).toLocaleTimeString() : "—"}</div>
    </div>
  );
};

export default RealTimeIndicator;
