"use client";

import Image from 'next/image';
import { StackedButtons, SectionTitle } from '../ui';
import { useProjects } from '@/features/portfolio';
import { getImageUrl } from '@/utils/image';
import { ProjectStatus } from '@/graphql/generated';

interface ProjectImage {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

interface Project {
  id: string;
  title: string;
  tags: string[];
  content: React.ReactNode;
  images: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
  layout: 'left' | 'right';
}

// Fallback projects
const fallbackProjects: Project[] = [
  {
    id: '1',
    title: 'Gostat',
    tags: ['Golang', 'TypeScript', 'Gin', 'NextJs', 'PostgreSQL', 'Redis'],
    content: (
      <>
        <p>
          <strong>GOStat</strong> - a cutting-edge <em>microservice-based</em> application designed to handle <em>HTTP request authentication</em> and statistics with finesse.
        </p>
        <p>
          This project comprises several <em>key microservices</em>, each contributing to its overall functionality and prowess.
        </p>
      </>
    ),
    images: [
      { src: '/projects/gostat-1.jpg', alt: 'Gostat dashboard', size: 'large' },
      { src: '/projects/gostat-2.jpg', alt: 'Gostat analytics', size: 'medium' },
      { src: '/projects/gostat-3.jpg', alt: 'Gostat stats', size: 'small' },
    ],
    githubUrl: 'https://github.com',
    layout: 'left',
  },
  {
    id: '2',
    title: 'Kana Master',
    tags: ['TypeScript', 'ReactNative', 'Redux Toolkit', 'i18n', 'iOS'],
    content: (
      <>
        <p>
          Kana Master is an <em>iOS application</em> designed for <em>learning Katakana and Hiragana</em>. It includes various <em>tests</em> and <em>practical exercises</em> that help in learning and memorizing Japanese characters.
        </p>
        <p>
          The app also offers <em>audio training for correct pronunciation</em> and demonstrates how to properly <em>draw each character</em>.
        </p>
      </>
    ),
    images: [
      { src: '/projects/kana-1.jpg', alt: 'Kana Master learning', size: 'large' },
      { src: '/projects/kana-2.jpg', alt: 'Kana Master practice', size: 'medium' },
      { src: '/projects/kana-3.jpg', alt: 'Kana Master character', size: 'small' },
    ],
    githubUrl: 'https://github.com',
    layout: 'right',
  },
];

// Size mapping for images based on index
const imageSizeByIndex = ['large', 'medium', 'small'] as const;

export function Projects() {
  // Fetch projects from API
  const { data: projectsData } = useProjects({
    isActive: true,
    isFeatured: true,
    status: ProjectStatus.Published,
  });

  // Transform API data to component format
  const apiProjects = projectsData?.projects as Array<{
    _id: string;
    title: string;
    description: string | null;
    content: string | null;
    technologies: string[];
    thumbnail: { url: string | null } | null;
    images: Array<{
      url: { url: string | null } | null;
      alt: string | null;
      order: number;
    }>;
    links: Array<{
      type: string;
      url: string;
      label: string | null;
    }>;
    order: number;
  }> | undefined;

  const projects: Project[] = apiProjects && apiProjects.length > 0
    ? apiProjects
        .toSorted((a, b) => a.order - b.order)
        .map((project, index) => {
          // Find github and live links
          const githubLink = project.links.find((l) => l.type === 'github');
          const liveLink = project.links.find((l) => l.type === 'live' || l.type === 'demo');

          // Transform images
          const projectImages: ProjectImage[] = project.images && project.images.length > 0
            ? project.images
                .toSorted((a, b) => a.order - b.order)
                .map((img, imgIndex) => ({
                  src: getImageUrl(img.url, '/projects/placeholder.jpg'),
                  alt: img.alt || project.title,
                  size: imageSizeByIndex[imgIndex] || 'medium',
                }))
            : [
                {
                  src: getImageUrl(project.thumbnail, '/projects/placeholder.jpg'),
                  alt: project.title,
                  size: 'large' as const,
                },
              ];

          return {
            id: project._id,
            title: project.title,
            tags: project.technologies,
            content: project.content ? (
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            ) : (
              <p>{project.description}</p>
            ),
            images: projectImages,
            githubUrl: githubLink?.url,
            liveUrl: liveLink?.url,
            layout: (index % 2 === 0 ? 'left' : 'right') as 'left' | 'right',
          };
        })
    : [];

  return (
    <section className="projects">
      <div className="projects__container container-gb">
        <SectionTitle>... /Projects ...</SectionTitle>

        <div className="projects__list">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project-item project-item--${project.layout}`}
            >
              {/* Content Side */}
              <div className="project-item__info">
                <h3 className="project-item__title">{project.title}</h3>

                <div className="project-item__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-item__tag">{tag}</span>
                  ))}
                </div>

                <div className="project-item__content">
                  {project.content}
                </div>

                <div className="project-item__actions">
                  <StackedButtons
                    githubUrl={project.githubUrl}
                    externalUrl={project.liveUrl}
                  />
                </div>
              </div>

              {/* Images Side */}
              <div className="project-item__images">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className={`project-item__image project-item__image--${image.size || 'medium'}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="project-item__img"
                    />
                  </div>
                ))}
                {/* Floating stacked button on images */}
                <div className="project-item__image-action">
                  <StackedButtons externalUrl={project.liveUrl} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
