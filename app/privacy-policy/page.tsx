import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Bruttt',
  description: 'Read our privacy policy to understand how we collect, use, and protect your data.',
  openGraph: {
    title: 'Privacy Policy - Bruttt',
    description: 'Read our privacy policy to understand how we collect, use, and protect your data.',
    url: 'https://bruttt.com/privacy-policy',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Bruttt',
    description: 'Read our privacy policy to understand how we collect, use, and protect your data.',
  },
  alternates: {
    canonical: 'https://bruttt.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section id="section-privacy-intro" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">This is a placeholder for the legal introduction section.</p>
        </div>
      </section>

      <section id="section-privacy-content" className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Legal Content</h2>
          <p className="text-muted-foreground">This is a placeholder for the legal content section.</p>
        </div>
      </section>
    </>
  );
}
