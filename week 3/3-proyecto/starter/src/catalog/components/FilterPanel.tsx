import React, { useState } from "react";

export const FilterPanel: React.FC<{
  cities: string[];
  onFilterChange: (filters: { city?: string; onlyAvailable?: boolean; minPrice?: number; maxPrice?: number }) => void;
}> = ({ cities, onFilterChange }) => {
  const [city, setCity] = useState<string>("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const apply = () => {
    onFilterChange({ city: city || undefined, onlyAvailable, minPrice: minPrice ? Number(minPrice) : undefined, maxPrice: maxPrice ? Number(maxPrice) : undefined });
  };

  const clear = () => {
    setCity("");
    setOnlyAvailable(false);
    setMinPrice("");
    setMaxPrice("");
    onFilterChange({});
  };

  return (
    <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 6 }}>
      <h4>Filtros</h4>
      <div style={{ marginBottom: 8 }}>
        <label>Ciudad</label>
        <select value={city} onChange={(e) => setCity(e.target.value)} style={{ width: "100%", padding: 6 }}>
          <option value="">Todas</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: 8 }}>
        <label>
          <input type="checkbox" checked={onlyAvailable} onChange={(e) => setOnlyAvailable(e.target.checked)} /> Sólo disponibles
        </label>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <input placeholder="Precio min" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} style={{ flex: 1, padding: 6 }} />
        <input placeholder="Precio max" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} style={{ flex: 1, padding: 6 }} />
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={apply}>Aplicar</button>
        <button onClick={clear}>Limpiar</button>
      </div>
    </div>
  );
};

export default FilterPanel;
