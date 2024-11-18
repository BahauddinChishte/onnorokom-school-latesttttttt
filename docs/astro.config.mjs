import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    starlight({
      title: 'EduHub Documentation',
      description: 'Free Educational Resources for Everyone',
      social: {
        github: 'https://github.com/yourusername/eduhub',
      },
      sidebar: [
        {
          label: 'Subjects',
          items: [
            { label: 'Higher Math I', link: '/subjects/higher-math-1/' },
            { label: 'Physics I', link: '/subjects/physics-1/' },
            { label: 'Chemistry I', link: '/subjects/chemistry-1/' },
            { label: 'Biology I', link: '/subjects/biology-1/' },
            { label: 'English', link: '/subjects/english/' },
            { label: 'ICT', link: '/subjects/ict/' },
          ],
        },
        {
          label: 'About',
          items: [
            { label: 'About EduHub', link: '/about/' },
            { label: 'Contributing', link: '/contributing/' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
    }),
    tailwind(),
  ],
});