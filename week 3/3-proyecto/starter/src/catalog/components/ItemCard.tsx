import React from "react";
import { CatalogProperty } from "../types";

export const ItemCard: React.FC<{ item: CatalogProperty; onDelete?: (id: number) => void; onView?: (id: number) => void }> = ({ item, onDelete, onView }) => {
  return (
    <div style={{ border: "1px solid #e0e0e0", padding: 12, borderRadius: 6 }}>
      <h4 style={{ margin: "0 0 8px 0" }}>{item.title}</h4>
      <div style={{ fontSize: 14, color: "#333" }}>{item.address}, {item.city}</div>
      <div style={{ marginTop: 8 }}>
        <strong>{item.bedrooms} hab.</strong> — <span>${item.price.toLocaleString()}</span>
      </div>
      <div style={{ marginTop: 8 }}>
        <span style={{ padding: "4px 8px", background: item.available ? "#e6ffe6" : "#fff0f0", borderRadius: 4 }}>
          {item.available ? "Disponible" : "No disponible"}
        </span>
      </div>
      <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
        <button onClick={() => onView?.(item.id)}>Ver</button>
        <button onClick={() => onDelete?.(item.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCard;
