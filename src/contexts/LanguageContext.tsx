import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'bn' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  bn: {
    'nav.start': 'শুরু করুন',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.contact': 'যোগাযোগ',
    'hero.title': 'Learn Without Limits',
    'hero.subtitle': 'সহজ শিক্ষা, সবার জন্য',
    'hero.description': 'বাংলাদেশের শিক্ষার্থীদের জন্য বিনামূল্যে শিক্ষা সামগ্রী। আমাদের সাথে যুক্ত হন এবং নিজের গতিতে শিখুন।',
    'stats.students': 'সক্রিয় শিক্ষার্থী',
    'stats.resources': 'বিনামূল্যে রিসোর্স',
    'stats.teachers': 'অভিজ্ঞ শিক্ষক',
    'subjects.title': 'আমাদের বিষয়সমূহ',
    'subjects.chapters': 'টি অধ্যায়',
    'subjects.resources': 'টি রিসোর্স',
    // Subject names
    'subject.higherMath': 'উচ্চতর গণিত ১ম পত্র',
    'subject.physics': 'পদার্থবিজ্ঞান ১ম পত্র',
    'subject.chemistry': 'রসায়ন ১ম পত্র',
    'subject.biology': 'জীববিজ্ঞান ১ম পত্র',
    'subject.english': 'ইংরেজি',
    'subject.ict': 'তথ্য ও যোগাযোগ প্রযুক্তি'
  },
  en: {
    'nav.start': 'Get Started',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'hero.title': 'Learn Without Limits',
    'hero.subtitle': 'Easy Learning for Everyone',
    'hero.description': 'Free educational resources for students in Bangladesh. Join us and learn at your own pace.',
    'stats.students': 'Active Students',
    'stats.resources': 'Free Resources',
    'stats.teachers': 'Expert Teachers',
    'subjects.title': 'Our Subjects',
    'subjects.chapters': 'Chapters',
    'subjects.resources': 'Resources',
    // Subject names
    'subject.higherMath': 'Higher Mathematics Part I',
    'subject.physics': 'Physics Part I',
    'subject.chemistry': 'Chemistry Part I',
    'subject.biology': 'Biology Part I',
    'subject.english': 'English',
    'subject.ict': 'Information & Communication Technology'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('bn');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'bn' ? 'en' : 'bn');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['bn']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}