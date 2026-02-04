
import { Region, PricingTier } from './types';

export const REGIONS: Region[] = [
  {
    id: 'north',
    name: 'Northern Circuit',
    description: 'The historic heart of Ethiopia featuring the rock-hewn churches of Lalibela, the castles of Gondar, and the Simien Mountains.',
    highlights: ['Rock-hewn churches of Lalibela', 'Fasil Ghebbi Castles', 'Aksum Stelae Field', 'Simien Mountains National Park'],
    image: 'https://picsum.photos/id/1015/800/400'
  },
  {
    id: 'east',
    name: 'Eastern Frontier',
    description: 'Explore the walled city of Harar, the lowlands of the Danakil Depression, and the vibrant Afar culture.',
    highlights: ['Harar Jugol Walled City', 'Hyena Man Feeding', 'Erta Ale Volcano', 'Dallol Salt Flats'],
    image: 'https://picsum.photos/id/1011/800/400'
  },
  {
    id: 'south',
    name: 'Southern Omo Valley',
    description: 'A cultural journey into the Omo Valley tribes and the dramatic landscapes of the Bale Mountains.',
    highlights: ['Omo Valley Tribes (Mursi, Hamer)', 'Bale Mountains National Park', 'Arba Minch Lakes', 'Konso Cultural Landscape'],
    image: 'https://picsum.photos/id/1040/800/400'
  },
  {
    id: 'addis',
    name: 'Addis Ababa & Central',
    description: 'The diplomatic capital of Africa, home to world-class museums, jazz scenes, and the Entoto Mountains.',
    highlights: ['National Museum (Lucy)', 'Holy Trinity Cathedral', 'Merkato Market', 'Entoto Park'],
    image: 'https://picsum.photos/id/1025/800/400'
  }
];

export const TIER_INFO = {
  [PricingTier.BUDGET]: {
    range: '$50–$100/day',
    focus: 'Local guesthouses, traditional eateries, public or shared transport.',
    icon: '🏠'
  },
  [PricingTier.STANDARD]: {
    range: '$150–$250/day',
    focus: 'Mid-range hotels, domestic flights for long distances, guided group tours.',
    icon: '🏨'
  },
  [PricingTier.LUXURY]: {
    range: '$500+/day',
    focus: 'High-end boutique lodges (Limalimo, Kuriftu), private 4x4 transport, specialized private guides.',
    icon: '✨'
  }
};
