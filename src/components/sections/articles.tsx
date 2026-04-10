"use client";

import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { SectionTitle, Button, IconButton } from '../ui';
import { useArticles } from '@/features/portfolio';
import { ArticleStatus } from '@/graphql/generated';

interface Article {
  id: string;
  title: string;
  description: string;
  href: string;
}

// Fallback articles
const fallbackArticles: Article[] = [
  {
    id: '1',
    title: 'The simplest example is kafka + golang',
    description: 'This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.',
    href: '/articles/1',
  },
  {
    id: '2',
    title: 'The simplest example is kafka + golang',
    description: 'This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.',
    href: '/articles/2',
  },
  {
    id: '3',
    title: 'The simplest example is kafka + golang',
    description: 'This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.',
    href: '/articles/3',
  },
  {
    id: '4',
    title: 'The simplest example is kafka + golang',
    description: 'This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.',
    href: '/articles/4',
  },
];

// Number of articles per page
const ARTICLES_PER_PAGE = 4;

export function Articles() {
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch articles from API
  const { data: articlesData } = useArticles({
    isActive: true,
    isFeatured: true,
    status: ArticleStatus.Published,
  });

  // Transform API data to component format
  const apiArticles = articlesData?.articles as Array<{
    _id: string;
    title: string;
    description: string | null;
    excerpt: string | null;
    slug: string;
    order: number;
  }> | undefined;

  const articles: Article[] = apiArticles && apiArticles.length > 0
    ? apiArticles
        .toSorted((a, b) => a.order - b.order)
        .map((article) => ({
          id: article._id,
          title: article.title,
          description: article.excerpt || article.description || '',
          href: `/articles/${article.slug}`,
        }))
    : [];

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  // Get articles for current page
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  return (
    <section className="articles">
      <div className="articles__container container-gb">
        <SectionTitle variant="default" align="right">Articles</SectionTitle>

        <div className="articles__wrapper">
          {/* Pagination Sidebar */}
          <div className="articles__pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`articles__page-btn ${currentPage === page ? 'articles__page-btn--active' : ''}`}
                onClick={() => handlePageClick(page)}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            ))}
            <button
              className="articles__page-btn articles__page-btn--arrow"
              onClick={handleNextPage}
              aria-label="Next page"
            >
              <ArrowDown />
            </button>
          </div>

          {/* Articles Grid */}
          <div className="articles__grid">
            {currentArticles.map((article) => (
              <article key={article.id} className="article-card-v2">
                <h3 className="article-card-v2__title">{article.title}</h3>
                <p className="article-card-v2__description">{article.description}</p>
                <div className="article-card-v2__actions">
                  <Button href={article.href} size="sm">
                    Read more
                  </Button>
                  <IconButton
                    icon={<ArrowDown style={{ transform: 'rotate(-90deg)' }} />}
                    href={article.href}
                    size="sm"
                    aria-label="Read more"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
