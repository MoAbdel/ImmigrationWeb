/**
 * URL Indexing Request Script
 *
 * This script helps request indexing for pages that are "Crawled - currently not indexed"
 *
 * Methods used:
 * 1. IndexNow API (Bing, Yandex, Seznam)
 * 2. Google Sitemap Ping
 * 3. Outputs URLs for manual GSC submission
 */

const https = require('https');
const http = require('http');

// Configuration
const SITE_URL = 'https://www.socalimmigrationservices.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'aa592b132c124198839632770dd57912';

// URLs that are "Crawled - currently not indexed" from GSC
const affectedUrls = [
  '/blog/eb1a-extraordinary-ability-la-jolla/',
  '/blog/asylum-application-el-cajon-syrian/',
  '/blog/citizenship-oath-ceremony-yorba-linda/',
  '/blog/b1-b2-visa-extension-fullerton/',
  '/blog/k1-vs-cr1-visa-pros-and-cons/',
  '/blog/u-visa-crime-victims-san-diego/',
  '/blog/sb1-returning-resident-visa-moreno-valley/',
  '/blog/withholding-of-removal-glendale/',
  '/blog/civics-test-study-corona/',
  '/blog/green-card-photo-service-lake-elsinore/',
  '/blog/immigration-bond-hearing-san-bernardino/',
  '/blog/stokes-interview-preparation-brea/',
  '/blog/tps-temporary-protected-status-el-cajon/',
  '/blog/removal-proceedings-defense-long-beach/',
  '/blog/f1-stem-opt-extension-fountain-valley/',
  '/blog/visa-bulletin-guide-orange-county/',
  '/blog/cat-protection-escondido/',
  '/blog/lebanese-community-resources-orange-county/',
  '/blog/daca-renewal-santa-ana/',
  '/blog/daca-renewal-news-2026/',
  '/blog/cancellation-of-removal-pomona/',
  '/blog/adjustment-of-status-interview-tustin/',
  '/blog/eb2-niw-strategy-guide/',
  '/blog/bia-immigration-appeals-santa-ana/',
  '/blog/widow-widower-immigration-riverside/',
  '/blog/sudanese-tps-national-city/'
];

// Convert to full URLs
const fullUrls = affectedUrls.map(path => `${SITE_URL}${path}`);

/**
 * Submit URLs to IndexNow API
 */
async function submitToIndexNow() {
  console.log('\n📤 Submitting to IndexNow (Bing, Yandex, Seznam)...\n');

  const data = JSON.stringify({
    host: 'www.socalimmigrationservices.com',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: fullUrls
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`✅ IndexNow: Successfully submitted ${fullUrls.length} URLs (HTTP ${res.statusCode})`);
          resolve(true);
        } else {
          console.log(`⚠️ IndexNow: HTTP ${res.statusCode} - ${body}`);
          resolve(false);
        }
      });
    });

    req.on('error', (e) => {
      console.log(`❌ IndexNow Error: ${e.message}`);
      reject(e);
    });

    req.write(data);
    req.end();
  });
}

/**
 * Ping Google with updated sitemap
 */
async function pingGoogleSitemap() {
  console.log('\n📤 Pinging Google Sitemap...\n');

  const sitemapUrl = encodeURIComponent(`${SITE_URL}/sitemap.xml`);
  const pingUrl = `https://www.google.com/ping?sitemap=${sitemapUrl}`;

  return new Promise((resolve) => {
    https.get(pingUrl, (res) => {
      if (res.statusCode === 200) {
        console.log('✅ Google Sitemap Ping: Success');
        resolve(true);
      } else {
        console.log(`⚠️ Google Sitemap Ping: HTTP ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (e) => {
      console.log(`❌ Google Ping Error: ${e.message}`);
      resolve(false);
    });
  });
}

/**
 * Output URLs for manual GSC submission
 */
function outputManualInstructions() {
  console.log('\n📋 Manual Google Search Console Instructions:\n');
  console.log('1. Go to https://search.google.com/search-console');
  console.log('2. Select your property: www.socalimmigrationservices.com');
  console.log('3. Go to "URL Inspection" in the left menu');
  console.log('4. Paste each URL and click "Request Indexing"\n');

  console.log('URLs to submit manually (prioritized by importance):');
  console.log('─'.repeat(60));

  fullUrls.forEach((url, i) => {
    console.log(`${i + 1}. ${url}`);
  });

  console.log('\n💡 Tip: Focus on 5-10 most important URLs first.');
  console.log('Google allows ~10 manual requests per day per property.\n');
}

/**
 * Main execution
 */
async function main() {
  console.log('═'.repeat(60));
  console.log('  🔍 URL Indexing Request Tool');
  console.log('  Requesting indexing for "Crawled - not indexed" pages');
  console.log('═'.repeat(60));
  console.log(`\n📊 Total URLs to process: ${fullUrls.length}\n`);

  // Submit to IndexNow
  await submitToIndexNow();

  // Ping Google Sitemap
  await pingGoogleSitemap();

  // Output manual instructions
  outputManualInstructions();

  console.log('═'.repeat(60));
  console.log('  ✅ Indexing requests completed!');
  console.log('═'.repeat(60));
}

main().catch(console.error);
