"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Base Button
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: ButtonProps) {
  const classes = `btn btn--${variant} btn--${size} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

// Icon Button
interface IconButtonProps {
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  'aria-label'?: string;
}

export function IconButton({
  icon,
  href,
  onClick,
  variant = 'outline',
  size = 'md',
  className = '',
  external = false,
  'aria-label': ariaLabel,
}: IconButtonProps) {
  const classes = `icon-btn icon-btn--${variant} icon-btn--${size} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {icon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} aria-label={ariaLabel}>
      {icon}
    </button>
  );
}

// Button Group (Button + IconButton)
interface ButtonGroupProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

export function ButtonGroup({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: ButtonGroupProps) {
  return (
    <div className={`btn-group ${className}`}>
      <Button href={href} onClick={onClick} variant={variant} size={size} external={external}>
        {label}
      </Button>
      <IconButton
        icon={<ArrowRight />}
        href={href}
        onClick={onClick}
        variant="outline"
        size={size}
        external={external}
        aria-label={label}
      />
    </div>
  );
}
