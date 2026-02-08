import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 max-w-[800px] mx-auto scroll-mt-24 mb-24">
      <div className="flex items-center justify-center gap-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate">Education & Certifications</h2>
        <div className="h-px bg-lightest-navy w-32 md:w-64"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">

        {/* Degrees */}
        <div className="space-y-8">
          <h3 className="text-green font-mono text-lg">Academic</h3>
          {EDUCATION.map((edu, index) => (
            <div key={index} className="bg-light-navy p-6 rounded hover:-translate-y-1 transition-transform duration-300 border border-lightest-navy hover:border-green/30">
              <h4 className="text-lightest-slate font-bold text-lg">{edu.degree}</h4>
              <p className="text-slate text-sm mt-1">{edu.institution}</p>
              <div className="flex justify-between mt-4 font-mono text-xs text-light-slate">
                <span>{edu.year}</span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certs */}
        <div className="space-y-8">
          <h3 className="text-green font-mono text-lg">Certifications</h3>
          <div className="bg-light-navy p-6 rounded hover:-translate-y-1 transition-transform duration-300 h-fit border border-lightest-navy hover:border-green/30">
            <ul className="space-y-6">
              {CERTIFICATIONS.map((cert, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  {/* Logo Container */}
                  <div className="shrink-0 w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {cert.name.includes("AWS") && (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                        alt="AWS Logo"
                        className="w-full h-full object-contain"
                      />
                    )}
                    {cert.name.includes("Oracle") && (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
                        alt="Java Logo"
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lightest-slate font-medium text-sm group-hover:text-green transition-colors leading-tight mt-1">{cert.name}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;