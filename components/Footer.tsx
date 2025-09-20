import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-vermaxx-green text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="font-logo text-2xl mb-2">Vermaxx</div>
          <p className="text-sm text-vermaxx-offwhite">
            Maximum Growth. Maximum Impact.  
            We build strategies, websites, and skills that scale.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-vermaxx-gold">About Us</Link></li>
            <li><Link href="/services" className="hover:text-vermaxx-gold">Services</Link></li>
            <li><Link href="/work" className="hover:text-vermaxx-gold">Work</Link></li>
            <li><Link href="/contact" className="hover:text-vermaxx-gold">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold mb-3">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/book" className="hover:text-vermaxx-gold">Consulting</Link></li>
            <li><Link href="/enroll" className="hover:text-vermaxx-gold">Courses</Link></li>
            <li><Link href="/seo" className="hover:text-vermaxx-gold">SEO</Link></li>
            <li><Link href="/design" className="hover:text-vermaxx-gold">Design</Link></li>
          </ul>
        </div>

        {/* Social & Legal */}
        <div>
          <h4 className="font-heading font-semibold mb-3">Connect</h4>
          <div className="flex gap-4 mb-4">
            <a href="https://twitter.com" target="_blank" className="hover:text-vermaxx-gold"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-vermaxx-gold"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" className="hover:text-vermaxx-gold"><FaGithub /></a>
          </div>
          <div className="text-xs text-vermaxx-offwhite">
            <Link href="/privacy" className="hover:text-vermaxx-gold mr-3">Privacy</Link>
            <Link href="/terms" className="hover:text-vermaxx-gold">Terms</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-vermaxx-teal text-center py-4 text-sm text-vermaxx-offwhite">
        © {year} Vermaxx. Built with care & creativity.
      </div>
    </footer>
  );
}