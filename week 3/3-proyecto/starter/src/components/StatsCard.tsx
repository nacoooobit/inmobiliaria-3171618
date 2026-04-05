import React, { useEffect, useState } from "react";
import { fetchActiveListings, fetchPercentAvailable, fetchTotalProperties } from "../utils/api";

export const StatsCard: React.FC = () => {
  const [total, setTotal] = useState<number | null>(null);
  const [activeListings, setActiveListings] = useState<number | null>(null);
  const [percentAvailable, setPercentAvailable] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const v = await fetchTotalProperties();
      if (!cancelled) setTotal(v);
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const v = await fetchActiveListings();
      if (!cancelled) setActiveListings(v);
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const v = await fetchPercentAvailable();
      if (!cancelled) setPercentAvailable(v);
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <h3>Stats</h3>
      <div style={{ display: "flex", gap: 12 }}>
        <div>
          <div style={{ fontSize: 20 }}>{total ?? "—"}</div>
          <div>Total porpiedades</div>
        </div>
        <div>
          <div style={{ fontSize: 20 }}>{activeListings ?? "—"}</div>
          <div>Listados activos</div>
        </div>
        <div>
          <div style={{ fontSize: 20 }}>{percentAvailable !== null ? `${percentAvailable}%` : "—"}</div>
          <div>Disponibles %</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
