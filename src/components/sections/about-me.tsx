"use client";

import Image from 'next/image';
import { useSkills } from '@/features/portfolio';
import { SkillVariant } from '@/graphql/generated';
import { usePublicSettings } from '@/contexts/PublicSettingsContext';
import { getImageUrl } from '@/utils/image';

// Fallback skill categories
const fallbackSkillCategories = [
  {
    id: '1',
    title: 'Front-end',
    variant: SkillVariant.Frontend,
    skills: ['TypeScript', 'React', 'Vue', 'Vuex', 'Redux Toolkit', 'NextJs', 'Nuxt', 'Jest', 'GraphQL', 'React Native', 'Puppeteer', 'Enzyme'],
  },
  {
    id: '2',
    title: 'Styles',
    variant: SkillVariant.Styles,
    skills: ['SCSS', 'SASS', 'PostCSS', 'Ant.d', 'MUI', 'Material UI'],
  },
  {
    id: '3',
    title: 'Back-end',
    variant: SkillVariant.Backend,
    skills: ['Golang', 'Gin', 'GORM', 'PostgreSQL', 'MySQL', 'MongoDB', 'gRPC', 'Redis', 'Kafka', 'Node', 'Nest', 'TypeORM', 'Microservices'],
  },
  {
    id: '4',
    title: 'DevOps',
    variant: SkillVariant.Devops,
    skills: ['Nginx', 'Brotli', 'Docker', '(CI/CD)', 'k8s', 'Bash'],
  },
];

// Map variant to CSS class
const variantClassMap: Record<SkillVariant, string> = {
  [SkillVariant.Frontend]: 'skill-card--frontend',
  [SkillVariant.Styles]: 'skill-card--styles',
  [SkillVariant.Backend]: 'skill-card--backend',
  [SkillVariant.Devops]: 'skill-card--devops',
};

interface SkillCategory {
  id: string;
  title: string;
  variant: SkillVariant;
  skills: string[];
}

export function AboutMe() {
  const { getSetting } = usePublicSettings();
  // Fetch skills from API
  const { data: skillsData } = useSkills(true);

  // Transform API skills to component format
  const apiSkills = skillsData?.skills as Array<{
    _id: string;
    title: string;
    variant: SkillVariant;
    order: number;
    items: Array<{ name: string; order: number }>;
  }> | undefined;

  const skillCategories: SkillCategory[] = apiSkills && apiSkills.length > 0
    ? apiSkills
        .toSorted((a, b) => a.order - b.order)
        .map((skill) => ({
          id: skill._id,
          title: skill.title,
          variant: skill.variant,
          skills: skill.items
            .toSorted((a, b) => a.order - b.order)
            .map((item) => item.name),
        }))
    : [];

  // Get skill by variant
  const getSkillByVariant = (variant: SkillVariant): SkillCategory => {
    return skillCategories.find((s) => s.variant === variant) || fallbackSkillCategories.find((s) => s.variant === variant)!;
  };

  const frontendSkill = getSkillByVariant(SkillVariant.Frontend);
  const stylesSkill = getSkillByVariant(SkillVariant.Styles);
  const backendSkill = getSkillByVariant(SkillVariant.Backend);
  const devopsSkill = getSkillByVariant(SkillVariant.Devops);
  const imageUrl = getSetting('ABOUT_PROFILE_PHOTO')

  return (
    <section className="about-me">
      <div className="about-me__container container-gb">
        {/* Header */}
        <div className="about-me__header">
          <span className="about-me__label">{getSetting('ABOUT_LABEL', '... /About me ...')}</span>
          <div className="about-me__intro">
            <p className="about-me__intro-text">
              {getSetting('ABOUT_INTRO_TEXT', `Hello! I'm ${getSetting('FIRST_NAME', 'Nikita')}, I'm a full-stack developer.`)}
            </p>
            <p className="about-me__intro-text">
              {getSetting('ABOUT_EXPERIENCE_TEXT', `More than ${getSetting('EXPERIENCE_YEARS', '5')} years experience.`)}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="about-me__content">
          {/* Skills Column */}
          <div className="about-me__skills">
            {/* Front-end Card */}
            <div className={`skill-card ${variantClassMap[frontendSkill.variant]}`}>
              <h3 className="skill-card__title">{frontendSkill.title}</h3>
              <p className="skill-card__list">
                {frontendSkill.skills.join(' / ')}
              </p>
            </div>

            {/* Styles Card */}
            <div className={`skill-card ${variantClassMap[stylesSkill.variant]}`}>
              <div className="skill-card__content">
                <h3 className="skill-card__title">{stylesSkill.title}</h3>
                <p className="skill-card__list">
                  {stylesSkill.skills.join(' / ')}
                </p>
              </div>
            </div>

            {/* Back-end Card */}
            <div className={`skill-card ${variantClassMap[backendSkill.variant]}`}>
              <h3 className="skill-card__title">{backendSkill.title}</h3>
              <p className="skill-card__list">
                {backendSkill.skills.join(' / ')}
              </p>
            </div>

            {/* Bottom Row */}
            <div className="about-me__bottom-row">
              <p className="about-me__favorite">
                {getSetting('ABOUT_FAVORITE_TEXT', 'Some of my favorite technologies, topics, or tools that I worked with')}
              </p>

              {/* DevOps Card */}
              <div className={`skill-card ${variantClassMap[devopsSkill.variant]}`}>
                <h3 className="skill-card__title">{devopsSkill.title}</h3>
                <p className="skill-card__list">
                  {devopsSkill.skills.join(' / ')}
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="about-me__image-wrapper">
            <div className="about-me__image-frame">
              <Image
                src={imageUrl ? getImageUrl(imageUrl) : '/photo'}
                alt="Profile photo"
                fill
                className="about-me__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
