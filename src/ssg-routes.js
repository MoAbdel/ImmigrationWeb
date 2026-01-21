import { blogPosts } from './data/blogPosts';

const staticRoutes = [
  '/',
  '/services/visas-family',
  '/services/status-citizenship',
  '/services/legal-documents',
  '/services/professional-services',
  '/family-immigration',
  '/asylum-services',
  '/citizenship-naturalization',
  '/daca-services',
  '/green-card-services',
  '/irvine',
  '/anaheim',
  '/los-angeles',
  '/santa-ana',
  '/blog'
];

const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

export const ssgRoutes = Array.from(new Set([...staticRoutes, ...blogRoutes]));
