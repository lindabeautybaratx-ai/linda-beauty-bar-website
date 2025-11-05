import { Brush, Smile, Heart, Eye, Dumbbell, Sparkles, Droplet, LucideIcon } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  {
    id: 'eyebrow-services',
    name: 'Eyebrow Services',
    icon: Brush,
  },
  {
    id: 'lip-services',
    name: 'Lip Services',
    icon: Smile,
  },
  {
    id: 'lash-extensions',
    name: 'Lash Extensions',
    icon: Eye,
  },
  {
    id: 'paramedical-tattoo',
    name: 'Paramedical Tattoo',
    icon: Heart,
  },
  {
    id: 'body-sculpting',
    name: 'Body Sculpting',
    icon: Dumbbell,
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening',
    icon: Sparkles,
  },
];

export const allCategories = ['All Services', ...categories.map(cat => cat.name)];

// Helper function to get category by ID
export function getCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}

// Helper function to get category by name
export function getCategoryByName(name: string): Category | undefined {
  return categories.find(cat => cat.name === name);
}

// Helper function to get category icon by name
export function getCategoryIcon(name: string): LucideIcon {
  const category = getCategoryByName(name);
  return category ? category.icon : Droplet;
}

// Helper function to get category ID by name
export function getCategoryIdByName(name: string): string | undefined {
  const category = getCategoryByName(name);
  return category ? category.id : undefined;
}

