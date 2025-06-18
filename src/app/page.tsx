import NewsGrid from '@/components/NewsGrid';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">AI Atlas</h1>
        <NewsGrid />
      </div>
    </main>
  );
} 