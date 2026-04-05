export type Theme = 'light' | 'dark' | 'system';
export type FontSize = 'small' | 'medium' | 'large';
export type Density = 'compact' | 'normal' | 'spacious';

export interface ConfigState {
  theme: Theme;
  fontSize: FontSize;
  density: Density;
  notifications: {
    email: boolean;
    push: boolean;
    sound: boolean;
  };
}

export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  city: string;
  available: boolean;
}
