
export enum PricingTier {
  BUDGET = 'Budget',
  STANDARD = 'Standard',
  LUXURY = 'Luxury'
}

export interface Region {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface DayPlan {
  day: number;
  activity: string;
  mustSee: string[];
  accommodation: {
    name: string;
    type: string;
  };
}

export interface Itinerary {
  region: string;
  tier: PricingTier;
  duration: number;
  days: DayPlan[];
  estimatedTotal: number;
}
