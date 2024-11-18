import { Subject } from '../../types';

export const subjects: Subject[] = [
  {
    name: "উচ্চতর গণিত ১ম পত্র",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800&h=400",
    description: "উচ্চতর গণিত ১ম পত্র - HSC প্রথম বর্ষের জন্য সম্পূর্ণ পাঠ্যক্রম",
    chapters: [
      {
        number: "1",
        title: "ম্যাট্রিক্স ও নির্ণায়ক",
        description: "Matrix and Determinant - সারণি এবং নির্ণায়ক সম্পর্কিত গাণিতিক ধারণা",
        categories: [
          {
            title: "মৌলিক ধারণা",
            resources: []
          }
        ]
      },
      {
        number: "2",
        title: "ভেক্টর",
        description: "Vector - দিক্ সহ রাশির গাণিতিক প্রয়োগ",
        categories: [
          {
            title: "ভেক্টরের মৌলিক ধারণা",
            resources: [
              {
                subject: "Higher Math I",
                chapter: "2",
                type: "Video",
                title: "ভেক্টরের পরিচিতি",
                channel: "Onnorokom Pathshala",
                playlistLink: "https://www.youtube.com/watch?v=NobC4CGiim8",
                topics: "ভেক্টরের সংজ্ঞা, স্কেলার ও ভেক্টর রাশি",
                category: "basics",
                views: "100K+"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "পদার্থবিজ্ঞান ১ম পত্র",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800&h=400",
    description: "পদার্থবিজ্ঞান ১ম পত্র - HSC প্রথম বর্ষের জন্য সম্পূর্ণ পাঠ্যক্রম",
    chapters: [
      {
        number: "1",
        title: "ভৌত জগত ও পরিমাপ",
        description: "Physical World and Measurement",
        categories: [
          {
            title: "মৌলিক ধারণা",
            resources: []
          }
        ]
      }
    ]
  },
  {
    name: "রসায়ন ১ম পত্র",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800&h=400",
    description: "রসায়ন ১ম পত্র - HSC প্রথম বর্ষের জন্য সম্পূর্ণ পাঠ্যক্রম",
    chapters: [
      {
        number: "1",
        title: "পরমাণুর গঠন",
        description: "Atomic Structure",
        categories: [
          {
            title: "মৌলিক ধারণা",
            resources: []
          }
        ]
      }
    ]
  },
  {
    name: "জীববিজ্ঞান ১ম পত্র",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800&h=400",
    description: "জীববিজ্ঞান ১ম পত্র - HSC প্রথম বর্ষের জন্য সম্পূর্ণ পাঠ্যক্রম",
    chapters: [
      {
        number: "1",
        title: "কোষ ও এর গঠন",
        description: "Cell Biology - জীবের গঠন ও কার্যকরী একক",
        categories: [
          {
            title: "মৌলিক ধারণা",
            resources: []
          }
        ]
      }
    ]
  },
  {
    name: "ইংরেজি",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800&h=400",
    description: "HSC English - Develop your English language skills",
    chapters: [
      {
        number: "1",
        title: "Reading Comprehension",
        description: "Improve your reading and understanding skills",
        categories: [
          {
            title: "Basic Concepts",
            resources: []
          }
        ]
      }
    ]
  },
  {
    name: "তথ্য ও যোগাযোগ প্রযুক্তি",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=400",
    description: "ICT - আধুনিক প্রযুক্তি ও ডিজিটাল দক্ষতা বিকাশ",
    chapters: [
      {
        number: "1",
        title: "কম্পিউটার ও তথ্য প্রযুক্তি",
        description: "Computer and Information Technology Fundamentals",
        categories: [
          {
            title: "মৌলিক ধারণা",
            resources: []
          }
        ]
      }
    ]
  }
];