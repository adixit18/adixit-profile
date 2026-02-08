import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 max-w-[900px] mx-auto scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate whitespace-nowrap">Where I've Worked</h2>
        <div className="h-px bg-lightest-navy w-full max-w-[300px]"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-4">

        {/* Tab List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l-2 border-lightest-navy w-full md:w-48 scrollbar-hide shrink-0 pb-px md:pb-0">
          {EXPERIENCES.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:-mb-0 md:-ml-[2px] ${activeTab === index
                  ? 'text-green border-green bg-light-navy'
                  : 'text-slate border-transparent hover:bg-light-navy hover:text-green'
                }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="w-full md:px-4 py-2">
          <div className="mb-1">
            <h3 className="text-xl font-bold text-lightest-slate">
              {EXPERIENCES[activeTab].role} <span className="text-green">@ {EXPERIENCES[activeTab].company}</span>
            </h3>
          </div>
          <p className="font-mono text-xs text-light-slate mb-6">
            {EXPERIENCES[activeTab].period} | {EXPERIENCES[activeTab].location}
          </p>

          <ul className="space-y-4">
            {EXPERIENCES[activeTab].highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate text-sm md:text-base leading-relaxed">
                <span className="text-green font-mono mt-1">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;