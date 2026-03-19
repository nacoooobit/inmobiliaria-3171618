
// Types y Interfaces
export type PropertyType = 'venta' | 'arriendo';
export type PropertyStatus = 'disponible' | 'vendida' | 'arrendada';

export interface Property {
  id: number;
  direccion: string;
  precio: number;
  type: PropertyType;
  status: PropertyStatus;
}

export type ClientRole = 'arrendatario' | 'comprador';

export interface Client {
  id: number;
  name: string;
  role: ClientRole;
}

export type AgentRole = 'vendedor' | 'arrendador';

export interface Agent {
  id: number;
  name: string;
  role: AgentRole;
}

// Alias en español para compatibilidad con el código existente
export type propiedad = Property;