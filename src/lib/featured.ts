import type { Project } from '@/types';

// NoCom — our flagship product, live on both the App Store and Google Play.
// Single source of truth for the home spotlight, portfolio cards and the projects API.
export const NOCOM_LINKS = {
  website: 'https://nocom.app',
  appStore: 'https://apps.apple.com/in/app/nocom/id6798361428',
  playStore: 'https://play.google.com/store/apps/details?id=com.nocom.nocom',
};

export const nocomProject: Project = {
  id: 'nocom',
  title: 'NoCom',
  tagline: 'Skip the broker. Meet the real owner.',
  description:
    "NoCom is India's broker-free marketplace for used cars and bikes. Every seller is Aadhaar-verified and matched against the official RC before a listing goes live, so buyers only ever deal with real owners — at zero commission. Sellers just type their registration number and NoCom auto-fills the listing from the official RC in seconds. Designed, engineered and shipped end-to-end by AppSetz, and live on both the App Store and Google Play.",
  techStack: ['Live on iOS & Android', 'Marketplace', 'Aadhaar eKYC', 'DigiLocker', 'RC Lookup'],
  images: ['/images/nocom.jpg'],
  icon: '/images/nocom-icon.png',
  githubUrl: '',
  liveDemoUrl: NOCOM_LINKS.website,
  appStoreUrl: NOCOM_LINKS.appStore,
  playStoreUrl: NOCOM_LINKS.playStore,
  featured: true,
  highlights: [
    { value: '0%', label: 'Commission', sub: 'buyers deal directly with owners' },
    { value: '<2 min', label: 'To list a vehicle', sub: 'RC auto-fill from the registration number' },
    { value: '100%', label: 'Verified sellers', sub: 'Aadhaar eKYC + RC owner-name match' },
  ],
  features: [
    'RC auto-fill — a full listing from just the registration number',
    'Aadhaar OTP eKYC identity verification for every seller',
    'RC owner-name match before any listing goes live',
    'Direct call, WhatsApp & in-app chat with owners',
    'Admin review on every listing',
    'NoCom Plus subscription for buyers',
  ],
  isPublished: true,
  createdAt: new Date('2026-09-01'),
  updatedAt: new Date('2026-09-11'),
  media: '',
};
