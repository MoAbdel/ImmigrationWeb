import { google } from 'googleapis';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from '../src/data/blogPosts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://www.socalimmigrationservices.com';
const MAX_URLS = 200;

const parseDate = (dateStr) => {
  const parsed = new Date(dateStr);
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
};

const urls = blogPosts
  .slice()
  .sort((a, b) => parseDate(b.date) - parseDate(a.date))
  .map((post) => `${SITE_URL}/blog/${post.slug}/`)
  .filter((url, index, list) => list.indexOf(url) === index)
  .slice(0, MAX_URLS);

async function submitToIndexingAPI() {
  try {
    // Load credentials
    const credentialsPath = path.join(__dirname, '..', 'gsc-credentials.json');
    const auth = new google.auth.GoogleAuth({
      keyFile: credentialsPath,
      scopes: ['https://www.googleapis.com/auth/indexing']
    });

    const indexing = google.indexing({ version: 'v3', auth });

    console.log('Submitting URLs to Google Indexing API...\n');

    const results = [];
    for (const url of urls) {
      try {
        const response = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED'
          }
        });
        console.log(`✓ Submitted: ${url}`);
        console.log(`  Status: ${response.status}`);
        results.push({ url, status: 'success', response: response.status });
      } catch (error) {
        console.log(`✗ Failed: ${url}`);
        console.log(`  Error: ${error.message}`);
        results.push({ url, status: 'error', error: error.message });
      }
    }

    console.log('\n--- Summary ---');
    const successful = results.filter(r => r.status === 'success').length;
    const failed = results.filter(r => r.status === 'error').length;
    console.log(`Successful: ${successful}`);
    console.log(`Failed: ${failed}`);

    return results;
  } catch (error) {
    console.error('Error initializing Google API:', error.message);
    throw error;
  }
}

submitToIndexingAPI().catch(console.error);
