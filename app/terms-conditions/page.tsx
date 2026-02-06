import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Bruttt',
  description: 'Read our terms and conditions to understand the rules and guidelines for using our services.',
  openGraph: {
    title: 'Terms & Conditions - Bruttt',
    description: 'Read our terms and conditions to understand the rules and guidelines for using our services.',
    url: 'https://bruttt.com/terms-conditions',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions - Bruttt',
    description: 'Read our terms and conditions to understand the rules and guidelines for using our services.',
  },
  alternates: {
    canonical: 'https://bruttt.com/terms-conditions',
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <section id="section-terms-intro" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">This is a placeholder for the legal introduction section.</p>
        </div>
      </section>

      <section id="section-terms-content" className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Legal Content</h2>
          <p className="text-muted-foreground">This is a placeholder for the legal content section.</p>
        </div>
      </section>
    </>
  );
}
