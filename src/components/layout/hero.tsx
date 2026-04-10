"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTelegram, FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import { Button, IconButton, SocialLinks, getPlatformIcon } from '../ui';
import { useSocialLinks, useArticles } from '@/features/portfolio';
import { getImageUrl } from '@/utils/image';
import { usePublicSettings } from '@/contexts/PublicSettingsContext';
import { ArticleStatus } from '@/graphql/generated';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Fallback social links
const fallbackSocialLinks = [
  { icon: FaGithub, label: 'Github', href: 'https://github.com' },
  { icon: FaLinkedin, label: 'Linkedin', href: 'https://linkedin.com' },
  { icon: FaTelegram, label: 'Telegram', href: 'https://telegram.org' },
  { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
];

// Fallback articles
const fallbackArticles = [
  {
    id: '1',
    title: 'The simplest example is kafka + golang',
    description: 'This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.',
    image: '/images/article-1.jpg',
    href: '/articles/1',
  },
  {
    id: '2',
    title: 'Building scalable APIs with NestJS',
    description: 'Learn how to build production-ready APIs using NestJS framework with best practices and design patterns.',
    image: '/images/article-2.jpg',
    href: '/articles/2',
  },
  {
    id: '3',
    title: 'React performance optimization tips',
    description: 'Discover essential techniques to optimize your React applications for better performance and user experience.',
    image: '/images/article-3.jpg',
    href: '/articles/3',
  },
];

export function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);
  const { getSetting } = usePublicSettings();

  // Fetch social links from API
  const { data: socialData } = useSocialLinks(true);

  // Fetch featured articles from API
  const { data: articlesData } = useArticles({
    isActive: true,
    isFeatured: true,
    status: ArticleStatus.Published,
  });

  // Transform API social links
  const socialLinks = socialData?.socialLinks?.length
    ? (socialData.socialLinks as Array<{
        platform: string;
        label: string;
        href: string;
        order: number;
      }>)
        .toSorted((a, b) => a.order - b.order)
        .map((link) => ({
          icon: getPlatformIcon(link.platform),
          label: link.label,
          href: link.href,
        }))
    : [];
  // Transform API articles
  const apiArticles = articlesData?.articles as Array<{
    _id: string;
    title: string;
    description: string | null;
    excerpt: string | null;
    thumbnail: { url: string | null } | null;
    coverImage: { url: string | null } | null;
    slug: string;
    order: number;
  }> | undefined;

  const articles = apiArticles && apiArticles.length > 0
    ? apiArticles
        .toSorted((a, b) => a.order - b.order)
        .slice(0, 5) // Limit to 5 featured articles
        .map((article) => ({
          id: article._id,
          title: article.title,
          description: article.excerpt || article.description || '',
          image: getImageUrl(article.coverImage || article.thumbnail, '/images/article-placeholder.jpg'),
          href: `/articles/${article.slug}`,
        }))
    : [];

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="hero">
      <div className="hero__container container-gb">
        {/* Top Content - Grid Layout */}
        <div className="hero__grid">
          {/* Row 1 - Col 1: Full-stack */}
          <h1 className="hero__title">
            <span className="hero__title-line">{getSetting('HERO_TITLE_LINE1', 'Full-stack')}</span>
          </h1>

          {/* Row 1 - Col 2: CTA Buttons */}
          <div className="hero__cta">
            <Button href={getSetting('HERO_CTA_LINK', '/projects')} size="lg">
              {getSetting('HERO_CTA_TEXT', 'Projects')}
            </Button>
            <IconButton
              icon={<ArrowRight />}
              href={getSetting('HERO_CTA_LINK', '/projects')}
              size="lg"
              aria-label="View projects"
            />
          </div>

          {/* Row 2 - Col 1: Description */}
          <p className="hero__description">
            {getSetting('HERO_DESCRIPTION', 'My goal is to write maintainable, clean and understandable code to process development was enjoyable.')}
          </p>

          {/* Row 2 - Col 2: Developer */}
          <span className="hero__title-line hero__title-line--outline">{getSetting('HERO_TITLE_LINE2', 'Developer')}</span>
        </div>

        {/* Social Links */}
        <SocialLinks links={socialLinks} className="hero__social" />

        {/* Articles Slider */}
        <div className="hero__slider">
          <IconButton
            icon={<ArrowLeft />}
            onClick={handlePrev}
            size="md"
            className="hero__slider-btn hero__slider-btn--prev"
            aria-label="Previous slide"
          />

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.1}
            centeredSlides={true}
            initialSlide={1}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
            }}
            className="hero__swiper"
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <article className="article-card">
                  <div className="article-card__image">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="article-card__img"
                    />
                  </div>
                  <div className="article-card__content">
                    <h3 className="article-card__title">{article.title}</h3>
                    <p className="article-card__description">{article.description}</p>
                    <div className="article-card__actions">
                      <Button href={article.href} size="sm">
                        Read more
                      </Button>
                      <IconButton
                        icon={<ArrowRight />}
                        href={article.href}
                        size="sm"
                        aria-label="Read more"
                      />
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <IconButton
            icon={<ArrowRight />}
            onClick={handleNext}
            size="md"
            className="hero__slider-btn hero__slider-btn--next"
            aria-label="Next slide"
          />
        </div>
      </div>
    </section>
  );
}
