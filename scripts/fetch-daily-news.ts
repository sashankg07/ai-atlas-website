import fs from 'fs';
import path from 'path';
import { searchAndSummarizeNews } from '../src/lib/openai';

const CATEGORIES = [
  'Latest News',
  'AI Tools',
  'Research Papers',
  'Industry Updates',
  'Tutorials',
  'Interviews'
];

async function fetchAndStoreNews() {
  const date = new Date().toISOString().split('T')[0];
  const newsData: Record<string, any> = {};

  for (const category of CATEGORIES) {
    try {
      console.log(`Fetching news for category: ${category}`);
      const news = await searchAndSummarizeNews(category);
      newsData[category] = news;
    } catch (error) {
      console.error(`Error fetching news for ${category}:`, error);
    }
  }

  // Create data directory if it doesn't exist
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }

  // Save the news data
  const filePath = path.join(dataDir, `news-${date}.json`);
  fs.writeFileSync(filePath, JSON.stringify(newsData, null, 2));
  console.log(`News data saved to ${filePath}`);

  // Update the latest news file
  const latestPath = path.join(dataDir, 'latest-news.json');
  fs.writeFileSync(latestPath, JSON.stringify(newsData, null, 2));
  console.log('Latest news file updated');
}

// Run the script
fetchAndStoreNews().catch(console.error); 