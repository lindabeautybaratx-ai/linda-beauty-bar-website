export interface Testimonial {
  id: number;
  name: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    service: 'Microblading',
    rating: 5,
    text: 'Linda is an absolute artist! My eyebrows look so natural and perfectly shaped. I wake up every morning feeling confident. Best decision I\'ve ever made!',
    date: 'October 2025',
  },
  {
    id: 2,
    name: 'Emily Chen',
    service: 'Powder Brows',
    rating: 5,
    text: 'I was nervous at first, but Linda made me feel so comfortable. The results are stunning - my brows look like I just had them filled in with makeup. Absolutely love it!',
    date: 'September 2025',
  },
  {
    id: 3,
    name: 'Jessica Martinez',
    service: 'Lip Blush',
    rating: 5,
    text: 'The lip blush procedure gave me the perfect natural tint I was looking for. Linda is so professional and talented. I recommend her to everyone!',
    date: 'September 2025',
  },
  {
    id: 4,
    name: 'Amanda Thompson',
    service: 'Permanent Eyeliner',
    rating: 5,
    text: 'I save so much time in the morning now! My eyeliner looks perfect every day. Linda\'s attention to detail is incredible. Thank you for making me feel beautiful!',
    date: 'August 2025',
  },
];

