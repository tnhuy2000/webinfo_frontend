"use client";

import { useWorkExperiences } from '@/features/portfolio';

interface WorkItem {
  id: string;
  period: string;
  duration: string;
  company: string;
  position: string;
  technologies: string;
  isHighlighted: boolean;
}


// Calculate total experience from work data
const calculateTotalExperience = (data: WorkItem[]): string => {
  let totalMonths = 0;

  data.forEach((item) => {
    const durationStr = item.duration.toLowerCase();
    const yearMatch = durationStr.match(/(\d+)\s*year/);
    const monthMatch = durationStr.match(/(\d+)\s*month/);

    if (yearMatch) totalMonths += parseInt(yearMatch[1]) * 12;
    if (monthMatch) totalMonths += parseInt(monthMatch[1]);
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) {
    return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
  } else if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''}`;
  } else {
    return `${months} month${months > 1 ? 's' : ''}`;
  }
};

export function WorkExperience() {
  // Fetch work experiences from API
  const { data: workData } = useWorkExperiences(true);

  // Transform API data to component format
  const apiWorkData = workData?.workExperiences as Array<{
    _id: string;
    period: string;
    duration: string;
    company: string;
    position: string;
    technologies: string;
    isHighlighted: boolean;
    order: number;
  }> | undefined;

  const workItems: WorkItem[] = apiWorkData && apiWorkData.length > 0
    ? apiWorkData
        .toSorted((a, b) => a.order - b.order)
        .map((item) => ({
          id: item._id,
          period: item.period,
          duration: item.duration,
          company: item.company,
          position: item.position,
          technologies: item.technologies,
          isHighlighted: item.isHighlighted,
        }))
    : [];

  const totalExperience = workItems.length > 0
    ? calculateTotalExperience(workItems)
    : 0;

  return (
    <section className="work-experience">
      <div className="work-experience__container container-gb">
        <h2 className="work-experience__title">Work</h2>

        <div className="work-experience__list">
          {workItems.map((item) => (
            <div
              key={item.id}
              className={`work-experience__item ${item.isHighlighted ? 'work-experience__item--active' : ''}`}
            >
              <div className="work-experience__period">
                <span className="work-experience__years">{item.period}</span>
                <span className="work-experience__duration">{item.duration}</span>
              </div>
              <div className="work-experience__company">{item.company}</div>
              <div className="work-experience__role">
                <span className="work-experience__position">{item.position}</span>
                <span className="work-experience__separator">|</span>
                <span className="work-experience__tech">{item.technologies}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="work-experience__footer">
          <span className="work-experience__label">Work experience</span>
          <span className="work-experience__total">{totalExperience}</span>
        </div>
      </div>
    </section>
  );
}
