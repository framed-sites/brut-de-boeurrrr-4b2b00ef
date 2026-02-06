import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News - Bruttt',
  description: 'Stay updated with the latest news and updates from Bruttt about renewable energy and infrastructure.',
  openGraph: {
    title: 'News - Bruttt',
    description: 'Stay updated with the latest news and updates from Bruttt about renewable energy and infrastructure.',
    url: 'https://bruttt.com/news',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News - Bruttt',
    description: 'Stay updated with the latest news and updates from Bruttt about renewable energy and infrastructure.',
  },
  alternates: {
    canonical: 'https://bruttt.com/news',
  },
};

export default function NewsPage() {
  return (
    <section id="section-news" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">News</h1>
        <p className="text-muted-foreground">This is a placeholder for the news page.</p>
      </div>
    </section>
  );
}
