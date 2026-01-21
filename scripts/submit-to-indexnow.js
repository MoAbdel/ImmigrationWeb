import { blogPosts } from '../src/data/blogPosts.js';
import { config } from 'dotenv';
config();

const SITE_URL = 'https://www.socalimmigrationservices.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const MAX_URLS = 200;

if (!INDEXNOW_KEY) {
  console.error('INDEXNOW_KEY environment variable is required');
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

async function submitToIndexNow() {
  console.log(`Submitting ${urls.length} URLs to IndexNow...\n`);

  // IndexNow accepts batch submissions
  const payload = {
    host: 'www.socalimmigrationservices.com',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls
  };

  try {
    // Submit to multiple IndexNow endpoints for wider coverage
    const endpoints = [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
      'https://yandex.com/indexnow'
    ];

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(payload)
        });

        if (response.ok || response.status === 200 || response.status === 202) {
          console.log(`✓ ${endpoint}: Success (${response.status})`);
        } else {
          console.log(`⚠ ${endpoint}: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.log(`✗ ${endpoint}: ${error.message}`);
      }
    }

    console.log(`\n--- Summary ---`);
    console.log(`URLs submitted: ${urls.length}`);
    console.log(`\nFirst 5 URLs:`);
    urls.slice(0, 5).forEach(url => console.log(`  ${url}`));
    console.log(`\nLast 5 URLs:`);
    urls.slice(-5).forEach(url => console.log(`  ${url}`));

  } catch (error) {
    console.error('Error submitting to IndexNow:', error.message);
    throw error;
  }
}

submitToIndexNow().catch(console.error);
