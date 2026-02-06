import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Bruttt - Home',
  description: 'Welcome to Bruttt. We invest in renewable energy and modern infrastructure.',
  openGraph: {
    title: 'Bruttt - Home',
    description: 'Welcome to Bruttt. We invest in renewable energy and modern infrastructure.',
    url: 'https://bruttt.com',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bruttt - Home',
    description: 'Welcome to Bruttt. We invest in renewable energy and modern infrastructure.',
  },
  alternates: {
    canonical: 'https://bruttt.com',
  },
};

export default function HomePage() {
  return (
    <>
      <section id="section-home-hero" className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Echte champagne om te geven én te vieren</h1>
          <p className="text-lg mb-6">
            Verras je team, werknemers en relaties dit jaar met échte champagne. Champagne zoals de Fransen hem zelf drinken. Opgehaald bij een authentiek familiebedrijf.
          </p>
        </div>
      </section>

      <section id="section-home-features" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Features Section</h2>
          <p className="text-muted-foreground">This is a placeholder for the features section.</p>
        </div>
      </section>

      <section id="section-home-cta" className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Call-to-Action</h2>
          <p className="text-muted-foreground">This is a placeholder for the call-to-action section.</p>
        </div>
      </section>
    </>
  );
}
