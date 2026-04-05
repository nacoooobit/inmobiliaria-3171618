export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  city: string;
  available: boolean;
}

export interface Stats {
  totalProperties: number;
  activeListings: number;
  percentAvailable: number;
}

export interface RealTimeData {
  value: number;
  lastUpdated: string;
}
