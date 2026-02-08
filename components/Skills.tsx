import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Flatten skills for a simple display or keep categories? 
  // The Brittany Chiang theme usually lists "Here are a few technologies I've been working with recently:"

  return (
    <section id="skills" className="py-24 max-w-[900px] mx-auto scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate whitespace-nowrap">Some Things I've Built With</h2>
        <div className="h-px bg-lightest-navy w-full max-w-[300px]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {SKILLS.map((category, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lightest-slate font-bold text-lg border-b border-lightest-navy pb-2 inline-block">
              {category.title}
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate text-sm font-mono">
                  <span className="text-green text-xs">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;