"use client";

import { IconType } from 'react-icons';
import { LucideIcon, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTelegram, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa';
import type { SocialPlatform } from '@/graphql/generated';

// Map platform to icon
const platformIconMap: Record<SocialPlatform | string, IconType | LucideIcon> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  telegram: FaTelegram,
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
  email: Mail,
  other: FaGlobe,
};

export const getPlatformIcon = (platform: SocialPlatform | string): IconType | LucideIcon => {
  return platformIconMap[platform] || FaGlobe;
};

interface SocialLinkProps {
  icon: IconType | LucideIcon;
  label: string;
  href: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function SocialLink({
  icon: Icon,
  label,
  href,
  showLabel = true,
  size = 'md',
  className = '',
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-link social-link--${size} ${className}`}
      aria-label={label}
    >
      <Icon className="social-link__icon" />
      {showLabel && <span className="social-link__label">{label}</span>}
    </a>
  );
}

// Social Links Group
interface SocialItem {
  icon: IconType | LucideIcon;
  label: string;
  href: string;
}

interface SocialLinksProps {
  links: SocialItem[];
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function SocialLinks({
  links,
  showLabels = true,
  size = 'md',
  className = '',
}: SocialLinksProps) {
  return (
    <div className={`social-links ${className}`}>
      {links.map((link) => (
        <SocialLink
          key={link.label}
          icon={link.icon}
          label={link.label}
          href={link.href}
          showLabel={showLabels}
          size={size}
        />
      ))}
    </div>
  );
}
