export interface PortfolioImage {
  id: number;
  category: string;
  alt: string;
}

export interface PortfolioImages {
  all: PortfolioImage[];
  microblading: PortfolioImage[];
  'powder-brows': PortfolioImage[];
  eyeliner: PortfolioImage[];
  'lip-blush': PortfolioImage[];
}

export const portfolioImages: PortfolioImages = {
  all: [
    { id: 1, category: 'microblading', alt: 'Microblading before and after' },
    { id: 2, category: 'powder-brows', alt: 'Powder brows transformation' },
    { id: 3, category: 'eyeliner', alt: 'Permanent eyeliner results' },
    { id: 4, category: 'lip-blush', alt: 'Lip blush before and after' },
    { id: 5, category: 'microblading', alt: 'Natural microblading results' },
    { id: 6, category: 'powder-brows', alt: 'Ombre powder brows' },
  ],
  microblading: [
    { id: 1, category: 'microblading', alt: 'Microblading before and after' },
    { id: 5, category: 'microblading', alt: 'Natural microblading results' },
  ],
  'powder-brows': [
    { id: 2, category: 'powder-brows', alt: 'Powder brows transformation' },
    { id: 6, category: 'powder-brows', alt: 'Ombre powder brows' },
  ],
  eyeliner: [
    { id: 3, category: 'eyeliner', alt: 'Permanent eyeliner results' },
  ],
  'lip-blush': [
    { id: 4, category: 'lip-blush', alt: 'Lip blush before and after' },
  ],
};

