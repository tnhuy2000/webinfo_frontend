"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useNavigations } from '@/features/portfolio';
import { usePublicSettings } from '@/contexts/PublicSettingsContext';
import { getImageUrl } from '@/utils/image';
import Image from 'next/image';
// Fallback navigation items (used when API is loading or fails)
const fallbackNavItems = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Articles', href: '/articles' },
  { label: 'Contacts', href: '/contact' },
];

const languages = [
  { code: 'En', label: 'English' },
  { code: 'Vi', label: 'Vietnamese' },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('En');
  const { getSetting } = usePublicSettings();

  // Fetch navigation items from API
  const { data: navData } = useNavigations(true);

  // Use API data if available, otherwise fallback to static data
  const apiNavItems = navData?.navigations as Array<{
    label: string;
    href: string;
    order: number;
  }> | undefined;

  const navItems = apiNavItems && apiNavItems.length > 0
    ? apiNavItems
        .toSorted((a, b) => a.order - b.order)
        .map((nav) => ({ label: nav.label, href: nav.href }))
    : fallbackNavItems;

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const faviconURL = getSetting('FAVICON_WEBSITE')
  const siteLogoURL = getSetting('SITE_LOGO')
  return (
    <header className="header">
      <link rel="icon" type="image/x-icon" href={getImageUrl(faviconURL) ? getImageUrl(faviconURL) : ''} />
      <div className="header__container container-gb">
        {/* Logo */}
        <Link href="/" className="header__logo">
          <Image
            src={getImageUrl(siteLogoURL) ? getImageUrl(siteLogoURL) : ''}
            alt="Site logo"
            fill
            className="header__logo-image"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="header__menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Navigation - Fullscreen Mobile Menu */}
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          {/* Close Button inside menu */}
          <button
            className="header__menu-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X />
          </button>

          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`header__nav-item ${isActive ? 'header__nav-item--active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Language Switcher */}
        {/* <div className="header__language">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`header__language-btn ${activeLanguage === lang.code ? 'header__language-btn--active' : ''}`}
              onClick={() => setActiveLanguage(lang.code)}
              aria-label={lang.label}
            >
              {lang.code}
            </button>
          ))}
        </div> */}
      </div>
    </header>
  );
}
