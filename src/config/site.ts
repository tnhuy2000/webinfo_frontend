export const siteConfig = {
  name: 'Company Portfolio',
  description: 'Professional company website built with Next.js and NestJS',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/images/og.jpg',
  links: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
} as const;
