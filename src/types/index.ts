export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  media: string;
  images: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  // Live, shipped products get the featured treatment across the site
  featured?: boolean;
  tagline?: string;
  icon?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  highlights?: { value: string; label: string; sub: string }[];
  features?: string[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Testimonial {
  id?: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  submittedAt: Date;
  source: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: Date;
  source: string;
}
