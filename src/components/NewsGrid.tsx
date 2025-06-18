'use client';

import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import AdComponent from './AdComponent';

interface NewsItem {
  title: string;
  description: string;
  source: string;
  url: string;
  category: string;
  publishedAt: string;
}

export default function NewsGrid() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading news...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item, index) => (
        <div key={index}>
          <NewsCard news={item} />
          {(index + 1) % 3 === 0 && <AdComponent />}
        </div>
      ))}
    </div>
  );
} 