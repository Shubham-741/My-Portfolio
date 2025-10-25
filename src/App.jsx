import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ResumeViewer from './components/ResumeViewer';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import SkillList from './components/SkillList';
import CertificationList from './components/CertificationList';
import AchievementList from './components/AchievementList';

function App() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-blue-50 via-purple-50 to-gray-100">
      <Navbar />
      <main className="pt-20 pb-10 px-2 sm:px-0">
        <Hero />
        <Section id="education" title="Education">
          <EducationCard />
        </Section>
        <Section id="experience" title="Experience">
          <ExperienceCard />
        </Section>
        <Section id="projects" title="Projects">
          <ProjectCard />
        </Section>
        <Section id="skills" title="Technical Skills">
          <SkillList />
        </Section>
        <Section id="certifications" title="Certifications">
          <CertificationList />
        </Section>
        <Section id="achievements" title="Achievements">
          <AchievementList />
        </Section>
        <Section id="resume" title="Resume">
          <ResumeViewer />
        </Section>
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Shubham. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
