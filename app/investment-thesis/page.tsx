import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Thesis - Bruttt',
  description: 'Discover our investment thesis and approach to renewable energy and infrastructure projects.',
  openGraph: {
    title: 'Investment Thesis - Bruttt',
    description: 'Discover our investment thesis and approach to renewable energy and infrastructure projects.',
    url: 'https://bruttt.com/investment-thesis',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Thesis - Bruttt',
    description: 'Discover our investment thesis and approach to renewable energy and infrastructure projects.',
  },
  alternates: {
    canonical: 'https://bruttt.com/investment-thesis',
  },
};

export default function InvestmentThesisPage() {
  return (
    <section id="section-investment-thesis" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Investment Thesis</h1>
        <p className="text-muted-foreground">This is a placeholder for the investment thesis page.</p>
      </div>
    </section>
  );
}
