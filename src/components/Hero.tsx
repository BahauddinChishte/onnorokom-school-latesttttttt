import { GraduationCap, BookOpen, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-primary-600 py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-2">
            {t('hero.title')}
          </h1>
          <p className="text-2xl text-primary-100 mb-4 font-semibold">
            {t('hero.subtitle')}
          </p>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: GraduationCap,
                title: "৫০০০+",
                description: t('stats.students')
              },
              {
                icon: BookOpen,
                title: "১০০+",
                description: t('stats.resources')
              },
              {
                icon: Users,
                title: "৫০+",
                description: t('stats.teachers')
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <stat.icon className="w-8 h-8 text-primary-100 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.title}</h3>
                <p className="text-primary-100">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}