import { useState } from 'react';
import { Subject } from './types';
import { subjects } from './data/subjects';
import { SubjectCard } from './components/SubjectCard';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Navbar } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import { SubjectDocs } from './components/SubjectDocs';
import { LanguageProvider } from './contexts/LanguageContext';

export function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        {selectedSubject ? (
          <SubjectDocs 
            subject={selectedSubject} 
            onBack={() => setSelectedSubject(null)} 
          />
        ) : (
          <>
            <Navbar />
            <Hero />
            
            <section id="subjects" className="max-w-7xl mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                আমাদের বিষয়সমূহ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {subjects.map((subject) => (
                  <SubjectCard
                    key={subject.name}
                    subject={subject}
                    onClick={() => setSelectedSubject(subject)}
                  />
                ))}
              </div>
            </section>

            <section id="about">
              <AboutSection />
            </section>

            <Testimonials />
            
            <section id="contact">
              <ContactSection />
            </section>
          </>
        )}
      </div>
    </LanguageProvider>
  );
}