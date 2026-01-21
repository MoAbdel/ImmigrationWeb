import { blogPosts } from '../src/data/blogPosts.js';
import { config } from 'dotenv';
config();

const SITE_URL = 'https://www.socalimmigrationservices.com';
const BING_API_KEY = process.env.BING_WEBMASTER_API_KEY;
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const MAX_URLS = 200;

if (!BING_API_KEY) {
  console.error('BING_WEBMASTER_API_KEY environment variable is required');
  process.exit(1);
}

const parseDate = (dateStr) => {
  const parsed = new Date(dateStr);
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
};

// Get most recent URLs
const urls = blogPosts
  .slice()
  .sort((a, b) => parseDate(b.date) - parseDate(a.date))
  .map((post) => `${SITE_URL}/blog/${post.slug}/`)
  .filter((url, index, list) => list.indexOf(url) === index)
  .slice(0, MAX_URLS);

async function submitSitemapToBing() {
  console.log('Submitting sitemap to Bing Webmaster Tools...\n');

  const sitemapSubmitUrl = `https://ssl.bing.com/webmaster/api.svc/json/SubmitSitemap?apikey=${BING_API_KEY}&siteUrl=${encodeURIComponent(SITE_URL)}&sitemapUrl=${encodeURIComponent(SITEMAP_URL)}`;

  try {
    const response = await fetch(sitemapSubmitUrl, {
      method: 'GET'
    });

    if (response.ok) {
      console.log(`✓ Sitemap submitted to Bing: ${SITEMAP_URL}`);
    } else {
      const text = await response.text();
      console.log(`⚠ Sitemap submission response: ${response.status} - ${text}`);
    }
  } catch (error) {
    console.log(`✗ Sitemap submission error: ${error.message}`);
  }
}

async function submitUrlsToBing() {
  console.log(`\nSubmitting ${urls.length} URLs to Bing URL Submission API...\n`);

  // Bing URL Submission API (batch)
  const submitUrl = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=${BING_API_KEY}`;

  // Bing accepts batches of up to 500 URLs
  const batchSize = 100;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);

    try {
      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          siteUrl: SITE_URL,
          urlList: batch
        })
      });

      if (response.ok) {
        console.log(`✓ Batch ${Math.floor(i/batchSize) + 1}: ${batch.length} URLs submitted`);
        successCount += batch.length;
      } else {
        const text = await response.text();
        console.log(`⚠ Batch ${Math.floor(i/batchSize) + 1}: ${response.status} - ${text}`);
        failCount += batch.length;
      }
    } catch (error) {
      console.log(`✗ Batch ${Math.floor(i/batchSize) + 1}: ${error.message}`);
      failCount += batch.length;
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Total URLs: ${urls.length}`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${failCount}`);
}

async function main() {
  await submitSitemapToBing();
  await submitUrlsToBing();
}

main().catch(console.error);
