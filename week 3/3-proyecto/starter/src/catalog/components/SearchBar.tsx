import React from "react";

export const SearchBar: React.FC<{ value: string; onChange: (v: string) => void; onClear: () => void }> = ({ value, onChange, onClear }) => {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
      <input
        aria-label="Buscar"
        placeholder="Buscar propiedades (dirección, ciudad, título...)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ flex: 1, padding: 8 }}
      />
      <button onClick={onClear}>Limpiar</button>
    </div>
  );
};

export default SearchBar;
