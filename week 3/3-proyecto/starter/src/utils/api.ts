import { Property, RealTimeData } from "../types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

const MOCK_PROPERTIES: Property[] = [
  { id: 1, title: "2-bed apartment", address: "Av. Central 123", price: 120000, bedrooms: 2, city: "Madrid", available: true },
  { id: 2, title: "Studio loft", address: "Calle Luna 8", price: 80000, bedrooms: 1, city: "Seville", available: false },
  { id: 3, title: "House with garden", address: "Paseo del Sol 45", price: 250000, bedrooms: 4, city: "Valencia", available: true },
  { id: 4, title: "1-bed flat", address: "Plaza Mayor 2", price: 90000, bedrooms: 1, city: "Barcelona", available: true },
  { id: 5, title: "Duplex downtown", address: "Rambla 10", price: 180000, bedrooms: 3, city: "Barcelona", available: false }
];

export const fetchProperties = async (signal: AbortSignal): Promise<Property[]> => {
  await delay(800);
  if (signal.aborted) throw new DOMException("Aborted", "AbortError");
  return MOCK_PROPERTIES;
};

export const fetchTotalProperties = async (): Promise<number> => {
  await delay(300);
  return MOCK_PROPERTIES.length;
};

export const fetchActiveListings = async (): Promise<number> => {
  await delay(350);
  return MOCK_PROPERTIES.filter((p) => p.available).length;
};

export const fetchPercentAvailable = async (): Promise<number> => {
  await delay(250);
  const available = MOCK_PROPERTIES.filter((p) => p.available).length;
  return Math.round((available / MOCK_PROPERTIES.length) * 100);
};

export const fetchRealTimeVisits = async (): Promise<RealTimeData> => {
  // Simula visitas/consultas en tiempo real
  await delay(200);
  const value = Math.max(0, Math.floor(Math.random() * 20));
  return { value, lastUpdated: new Date().toISOString() };
};
