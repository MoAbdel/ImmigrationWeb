const path = require('path');
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

// Skip prerender on Vercel (no Puppeteer) - prerender locally with PRERENDER=1
const shouldPrerender = process.env.PRERENDER === '1';

module.exports = async () => {
  const plugins = [react()];

  if (shouldPrerender) {
    const vitePrerender = require('vite-plugin-prerender');
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

    plugins.push(
      vitePrerender({
        staticDir: path.join(__dirname, 'dist'),
        routes,
        renderer: new vitePrerender.PuppeteerRenderer({
          renderAfterTime: 5000,
          maxConcurrentRoutes: 4
        })
      })
    );
  }

  return defineConfig({ plugins });
};
