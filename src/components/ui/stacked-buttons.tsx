"use client";

import { GitBranch, ArrowUpRight } from 'lucide-react';

interface StackedButtonsProps {
  githubUrl?: string;
  externalUrl?: string;
  className?: string;
}

export function StackedButtons({
  githubUrl = 'https://github.com',
  externalUrl = '#',
  className = '',
}: StackedButtonsProps) {
  return (
    <div className={`stacked-buttons ${className}`}>
      {/* <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="stacked-buttons__btn stacked-buttons__btn--github"
        aria-label="GitHub"
      >
        <GitBranch />
      </a> */}
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="stacked-buttons__btn stacked-buttons__btn--arrow"
        aria-label="View more"
      >
        <ArrowUpRight />
      </a>
    </div>
  );
}
