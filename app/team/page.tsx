import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team - Bruttt',
  description: 'Meet the team behind Bruttt and our renewable energy infrastructure investments.',
  openGraph: {
    title: 'Team - Bruttt',
    description: 'Meet the team behind Bruttt and our renewable energy infrastructure investments.',
    url: 'https://bruttt.com/team',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team - Bruttt',
    description: 'Meet the team behind Bruttt and our renewable energy infrastructure investments.',
  },
  alternates: {
    canonical: 'https://bruttt.com/team',
  },
};

export default function TeamPage() {
  return (
    <section id="section-team" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Team</h1>
        <p className="text-muted-foreground">This is a placeholder for the team page.</p>
      </div>
    </section>
  );
}
