export interface Property {
  id: number;
  title: string; // e.g. '2-bed apartment'
  address: string;
  price: number; // in local currency
  bedrooms: number;
  city: string;
  available: boolean; // listing available for sale/rent
}

export interface Stats {
  totalProperties: number;
  activeListings: number;
  percentAvailable: number; // 0-100
}

export interface RealTimeData {
  value: number; // e.g. current visitors or active inquiries
  lastUpdated: string; // ISO timestamp
}
