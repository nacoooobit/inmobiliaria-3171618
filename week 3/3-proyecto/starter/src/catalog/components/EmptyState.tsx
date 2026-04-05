import React from "react";

export const EmptyState: React.FC<{ message?: string }> = ({ message = "No se encontraron propiedades." }) => (
  <div style={{ padding: 20, textAlign: "center", color: "#666" }}>{message}</div>
);

export default EmptyState;
