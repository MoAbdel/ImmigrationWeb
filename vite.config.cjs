const path = require('path');
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const vitePrerender = require('vite-plugin-prerender');

module.exports = async () => {
  const { blogPosts } = await import('./src/data/blogPosts.js');

  const staticRoutes = [
    '/',
    '/services/visas-family/',
    '/services/status-citizenship/',
    '/services/legal-documents/',
    '/services/professional-services/',
    '/family-immigration/',
    '/asylum-services/',
    '/citizenship-naturalization/',
    '/daca-services/',
    '/green-card-services/',
    '/irvine/',
    '/anaheim/',
    '/los-angeles/',
    '/santa-ana/',
    '/blog/'
  ];

  const blogRoutes = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 100)
    .map((post) => `/blog/${post.slug}/`);
  const routes = Array.from(new Set([...staticRoutes, ...blogRoutes]));

  return defineConfig({
    plugins: [
      react(),
      vitePrerender({
        staticDir: path.join(__dirname, 'dist'),
        routes,
        renderer: new vitePrerender.PuppeteerRenderer({
          renderAfterTime: 5000,
          maxConcurrentRoutes: 4
        })
      })
    ]
  });
};
