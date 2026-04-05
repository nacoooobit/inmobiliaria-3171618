import React, { useEffect, useState } from "react";
import { Property } from "../types";
import { fetchProperties } from "../utils/api";

export const ItemList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const items = await fetchProperties(controller.signal);
        setProperties(items);
      } catch (err: any) {
        if (err && err.name === "AbortError") return;
        setError(err?.message ?? "Error fetching books");
      } finally {
        setLoading(false);
      }
    };

    load();
    return () => controller.abort();
  }, []);

  if (loading) return <div>Loading properties...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <div>
      <h3>Propiedades</h3>
      <ul>
        {properties.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.address}, {p.city} — {p.bedrooms} bed(s) — {p.available ? "Available" : "Not available"} — ${p.price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
