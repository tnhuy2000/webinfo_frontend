"use client";

interface SectionTitleProps {
  children: string;
  variant?: 'default' | 'monospace';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionTitle({
  children,
  variant = 'monospace',
  align = 'center',
  className = '',
}: SectionTitleProps) {
  return (
    <h2
      className={`section-title section-title--${variant} section-title--${align} ${className}`}
    >
      {children}
    </h2>
  );
}
