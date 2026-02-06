import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Bruttt',
  description: 'Learn about Bruttt, our story, team, and values in renewable energy and infrastructure investment.',
  openGraph: {
    title: 'About Us - Bruttt',
    description: 'Learn about Bruttt, our story, team, and values in renewable energy and infrastructure investment.',
    url: 'https://bruttt.com/about',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Bruttt',
    description: 'Learn about Bruttt, our story, team, and values in renewable energy and infrastructure investment.',
  },
  alternates: {
    canonical: 'https://bruttt.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <section id="section-about-story" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-muted-foreground">This is a placeholder for our story section.</p>
        </div>
      </section>

      <section id="section-about-team" className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Team Section</h2>
          <p className="text-muted-foreground">This is a placeholder for the team section.</p>
        </div>
      </section>

      <section id="section-about-values" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground">This is a placeholder for our values section.</p>
        </div>
      </section>
    </>
  );
}
