import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Bruttt',
  description: 'Get in touch with Bruttt for inquiries about our renewable energy and infrastructure projects.',
  openGraph: {
    title: 'Contact Us - Bruttt',
    description: 'Get in touch with Bruttt for inquiries about our renewable energy and infrastructure projects.',
    url: 'https://bruttt.com/contact',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Bruttt',
    description: 'Get in touch with Bruttt for inquiries about our renewable energy and infrastructure projects.',
  },
  alternates: {
    canonical: 'https://bruttt.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <section id="section-contact-form" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Form</h1>
          <p className="text-muted-foreground">This is a placeholder for the contact form section.</p>
        </div>
      </section>

      <section id="section-contact-info" className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Details</h2>
          <p className="text-muted-foreground">This is a placeholder for the contact details section.</p>
        </div>
      </section>

      <section id="section-contact-map" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Location Map</h2>
          <p className="text-muted-foreground">This is a placeholder for the location map section.</p>
        </div>
      </section>
    </>
  );
}
