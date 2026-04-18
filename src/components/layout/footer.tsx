"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTelegram, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { SectionTitle, SocialLinks, getPlatformIcon } from '../ui';
import { useSocialLinks, useNavigations } from '@/features/portfolio';
import { usePublicSettings } from '@/contexts/PublicSettingsContext';

// Fallback social links (used when API is loading or fails)
const fallbackSocialLinks = [
  { icon: FaGithub, label: 'Github', href: 'https://github.com' },
  { icon: FaLinkedin, label: 'Linkedin', href: 'https://linkedin.com' },
  { icon: Mail, label: 'E-mail', href: 'mailto:email@example.com' },
  { icon: FaTelegram, label: 'Telegram', href: 'https://telegram.org' },
  { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
];

// Fallback nav links
const fallbackNavLinks = [
  { label: 'Main', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Articles', href: '/articles' },
];

export function Footer() {
  const { getSetting } = usePublicSettings();
  // Fetch social links from API
  const { data: socialData } = useSocialLinks(true);
  // Fetch navigation from API
  const { data: navData } = useNavigations(true);

  // Transform API social links to component format
  const apiSocialLinks = socialData?.socialLinks as Array<{
    platform: string;
    label: string;
    href: string;
    order: number;
  }> | undefined;

  const socialLinks = apiSocialLinks && apiSocialLinks.length > 0
    ? apiSocialLinks
        .toSorted((a, b) => a.order - b.order)
        .map((link) => ({
          icon: getPlatformIcon(link.platform),
          label: link.label,
          href: link.href,
        }))
    : fallbackSocialLinks;

  // Transform API navigation to footer links (add Main link)
  const apiNavLinks = navData?.navigations as Array<{
    label: string;
    href: string;
    order: number;
  }> | undefined;

  const navLinks = apiNavLinks && apiNavLinks.length > 0
    ? [
        ...apiNavLinks
          .toSorted((a, b) => a.order - b.order)
          .map((nav) => ({ label: nav.label, href: nav.href })),
      ]
    : fallbackNavLinks;

  return (
    <footer className="footer">
      <div className="footer__container container-gb">
        {/* Main Content */}
        <div className="footer__content">
          {/* Left Side - Name */}
          <div className="footer__brand">
            <h2 className="footer__name">
              <span className="footer__firstname">{getSetting('FIRST_NAME', '')}</span>
              <span className="footer__lastname">{getSetting('LAST_NAME', '')}</span>
            </h2>
            <p className="footer__role">
              {getSetting('ROLE', 'Full-stack\ndeveloper').split('\n').map((line: string, i: number) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </p>
          </div>

          {/* Right Side - Contact & Info */}
          <div className="footer__info">
            <SectionTitle variant="monospace" align="left" className="footer__contact-header">
              ... /Contacts ...
            </SectionTitle>

            {/* Navigation */}
            <nav className="footer__nav">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer__nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Site Info Card */}
            <div className="footer__site-card">
              <div className="footer__site-title">Site</div>
              <div className="footer__site-item">
                Handcrafted by <span>ME</span> /
              </div>
              <div className="footer__site-item">
                Designed by <span>{getSetting('FOOTER_DESIGNER_NAME', '')}</span> /
              </div>
              <div className="footer__site-item">
                Powered by <span>{getSetting('FOOTER_POWERED_BY', '')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks links={socialLinks} />
      </div>
    </footer>
  );
}
