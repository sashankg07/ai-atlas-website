'use client'

import { NewsItem } from '@/lib/openai'

interface NewsCardProps {
  news: NewsItem
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2">
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            {news.title}
          </a>
        </h3>
        <p className="text-gray-600 mb-4">{news.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{news.source}</span>
          <time dateTime={news.publishedAt}>
            {new Date(news.publishedAt).toLocaleDateString()}
          </time>
        </div>
      </div>
    </article>
  )
} 