'use client';
import { Hero } from '@/components/layout';
import { Articles, Projects, WorkExperience } from '@/components/sections';
import { AboutMe } from '@/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      <AboutMe />
      
      {/* WorkExperience Section */}
      <WorkExperience />


      {/* Projects Section */}
      <Projects />

      {/* Articles Section */}
      {/* <Articles /> */}

    </div>
  );
}
