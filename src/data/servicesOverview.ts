import { LucideIcon } from 'lucide-react';
import { Sparkles, Eye, Smile, Brush, Heart, Dumbbell } from 'lucide-react';

export interface ServiceHighlight {
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const serviceHighlights: ServiceHighlight[] = [
  {
    category: 'Eyebrow Services',
    title: 'Brow Services',
    description: 'From microblading to ombre powder brows and henna tinting - we offer complete eyebrow enhancement services.',
    icon: Brush,
  },
  {
    category: 'Lip Services',
    title: 'Lip Blush',
    description: 'Semi-permanent lip color for naturally fuller, beautifully tinted lips without daily lipstick.',
    icon: Smile,
  },
  {
    category: 'Lash Extensions',
    title: 'Lash Extensions',
    description: 'Classic, volume, hybrid, and wet lash sets. Wake up with beautiful lashes every day.',
    icon: Eye,
  },
  {
    category: 'Paramedical Tattoo',
    title: 'Paramedical Services',
    description: 'Areola reconstruction and scar camouflage tattooing to restore confidence and natural appearance.',
    icon: Heart,
  },
  {
    category: 'Body Sculpting',
    title: 'Body Sculpting',
    description: 'Non-invasive body contouring with cavitation, RF, lipo laser, and wood therapy treatments.',
    icon: Dumbbell,
  },
  {
    category: 'Teeth Whitening',
    title: 'Teeth Whitening',
    description: 'Professional laser teeth whitening for a brighter, more confident smile in just one session.',
    icon: Sparkles,
  },
];

