import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Bruttt',
  description: 'Explore our portfolio of renewable energy and infrastructure projects.',
  openGraph: {
    title: 'Portfolio - Bruttt',
    description: 'Explore our portfolio of renewable energy and infrastructure projects.',
    url: 'https://bruttt.com/portfolio',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Bruttt',
    description: 'Explore our portfolio of renewable energy and infrastructure projects.',
  },
  alternates: {
    canonical: 'https://bruttt.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <section id="section-portfolio" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-muted-foreground">This is a placeholder for the portfolio page.</p>
      </div>
    </section>
  );
}
