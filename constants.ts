import { Region, PricingTier } from './types';

/**
 * AUTHENTIC ETHIOPIAN PHOTOGRAPHY:
 * Curated high-fidelity shots provided by the user.
 */
const LALIBELA_URL = "https://i.postimg.cc/Vv9CMmYL/lalibela.jpg";
const DANAKIL_URL = "https://i.postimg.cc/jdmD5D67/Danakil_Depression.jpg";
const OMO_VALLEY_URL = "https://i.postimg.cc/nL0yTDh2/Omo_Valley.jpg";
const ADDIS_ABABA_URL = "https://i.postimg.cc/8PNq84rg/addis-ababa.jpg";

export const REGIONS: Region[] = [
  {
    id: 'north',
    name: 'Northern Circuit',
    description: 'The historic heart of Ethiopia featuring the rock-hewn churches of Lalibela, the castles of Gondar, and the Simien Mountains.',
    highlights: ['Rock-hewn churches of Lalibela', 'Fasil Ghebbi Castles', 'Aksum Stelae Field', 'Simien Mountains National Park'],
    image: LALIBELA_URL
  },
  {
    id: 'east',
    name: 'Eastern Frontier',
    description: 'Explore the walled city of Harar, the lowlands of the Danakil Depression, and the vibrant Afar culture.',
    highlights: ['Harar Jugol Walled City', 'Hyena Man Feeding', 'Erta Ale Volcano', 'Dallol Salt Flats'],
    image: DANAKIL_URL
  },
  {
    id: 'south',
    name: 'Southern Omo Valley',
    description: 'A cultural journey into the Omo Valley tribes and the dramatic landscapes of the Bale Mountains.',
    highlights: ['Omo Valley Tribes (Mursi, Hamer)', 'Bale Mountains National Park', 'Arba Minch Lakes', 'Konso Cultural Landscape'],
    image: OMO_VALLEY_URL
  },
  {
    id: 'addis',
    name: 'Addis Ababa & Central',
    description: 'The diplomatic capital of Africa, home to world-class museums, jazz scenes, and the Entoto Mountains.',
    highlights: ['National Museum (Lucy)', 'Holy Trinity Cathedral', 'Merkato Market', 'Entoto Park'],
    image: ADDIS_ABABA_URL
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