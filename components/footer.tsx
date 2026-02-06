import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer-main" className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bruttt</h3>
            <p className="text-sm">Modern infrastructure investment in renewable energy.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" id="footer-link-about" className="text-sm hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" id="footer-link-portfolio" className="text-sm hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" id="footer-link-contact" className="text-sm hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/news" id="footer-link-news" className="text-sm hover:text-accent transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" id="footer-link-privacy" className="text-sm hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" id="footer-link-terms" className="text-sm hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bruttt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
