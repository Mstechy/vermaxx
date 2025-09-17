'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Vermaxx" width={40} height={40} unoptimized priority />
          <div>
            <div className="font-logo text-2xl">Vermaxx</div>
            <div className="text-sm text-gray-500 -mt-1">Maximum Growth. Maximum Impact.</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium hover:text-vermaxx-green">Home</Link>

          {/* About dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              aria-expanded={aboutOpen}
              aria-controls="about-menu"
              className="font-medium hover:text-vermaxx-green"
              onFocus={() => setAboutOpen(true)}
              onBlur={() => setAboutOpen(false)}
            >
              About ▾
            </button>

            {aboutOpen && (
              <div id="about-menu" role="menu" className="absolute right-0 mt-3 w-44 bg-white border rounded-md shadow-md py-2">
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-50">About Us</Link>
                <Link href="/team" className="block px-4 py-2 hover:bg-gray-50">Team</Link>
                <Link href="/services" className="block px-4 py-2 hover:bg-gray-50">Services</Link>
              </div>
            )}
          </div>

          <Link href="/work" className="font-medium hover:text-vermaxx-green">Work</Link>
          <Link href="/contact" className="font-medium hover:text-vermaxx-green">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://wa.me/2348012345678" target="_blank" className="btn-ghost">WhatsApp</a>
          <Link href="/book" className="btn-primary">Consultation</Link>
        </div>

        {/* Mobile toggler */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(v => !v)} className="btn-ghost">{mobileOpen ? 'Close' : 'Menu'}</button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/team">Team</Link>
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
            <Link href="/contact">Contact</Link>
            <a href="https://wa.me/2348012345678" className="btn-ghost">WhatsApp</a>
            <Link href="/book" className="btn-primary w-full text-center">Consultation</Link>
          </div>
        </div>
      )}
    </header>
  );
}