import React from "react";

export const SortSelector: React.FC<{
  value: string;
  direction: "asc" | "desc";
  onChange: (value: string, direction: "asc" | "desc") => void;
}> = ({ value, direction, onChange }) => {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <select value={value} onChange={(e) => onChange(e.target.value, direction)}>
        <option value="price">Precio</option>
        <option value="bedrooms">Habitaciones</option>
        <option value="city">Ciudad</option>
      </select>
      <button onClick={() => onChange(value, direction === "asc" ? "desc" : "asc")}>{direction === "asc" ? "Asc" : "Desc"}</button>
    </div>
  );
};

export default SortSelector;
