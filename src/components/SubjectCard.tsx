import { BookOpen } from 'lucide-react';
import { Subject } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
}

export function SubjectCard({ subject, onClick }: SubjectCardProps) {
  const { t } = useLanguage();

  // Calculate total resources across all chapters
  const totalResources = subject.chapters.reduce((chapterAcc, chapter) => {
    return chapterAcc + chapter.categories.reduce((categoryAcc, category) => {
      return categoryAcc + category.resources.length;
    }, 0);
  }, 0);

  // Map subject names to translation keys
  const getSubjectTranslationKey = (name: string) => {
    const mapping: { [key: string]: string } = {
      'উচ্চতর গণিত ১ম পত্র': 'subject.higherMath',
      'পদার্থবিজ্ঞান ১ম পত্র': 'subject.physics',
      'রসায়ন ১ম পত্র': 'subject.chemistry',
      'জীববিজ্ঞান ১ম পত্র': 'subject.biology',
      'ইংরেজি': 'subject.english',
      'তথ্য ও যোগাযোগ প্রযুক্তি': 'subject.ict'
    };
    return mapping[name] || name;
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
    >
      <div className="h-36 overflow-hidden">
        <img 
          src={subject.image} 
          alt={t(getSubjectTranslationKey(subject.name))}
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-800">
            {t(getSubjectTranslationKey(subject.name))}
          </h3>
        </div>
        <p className="text-sm text-gray-600">
          {subject.chapters.length} {t('subjects.chapters')} • {totalResources} {t('subjects.resources')}
        </p>
      </div>
    </div>
  );
}