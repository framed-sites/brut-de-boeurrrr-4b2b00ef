import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Countries - Bruttt',
  description: 'Discover the countries where Bruttt operates and invests in renewable energy infrastructure.',
  openGraph: {
    title: 'Countries - Bruttt',
    description: 'Discover the countries where Bruttt operates and invests in renewable energy infrastructure.',
    url: 'https://bruttt.com/countries',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Countries - Bruttt',
    description: 'Discover the countries where Bruttt operates and invests in renewable energy infrastructure.',
  },
  alternates: {
    canonical: 'https://bruttt.com/countries',
  },
};

export default function CountriesPage() {
  return (
    <section id="section-countries" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Countries</h1>
        <p className="text-muted-foreground">This is a placeholder for the countries page.</p>
      </div>
    </section>
  );
}
