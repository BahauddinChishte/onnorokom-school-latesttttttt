import { ExternalLink } from 'lucide-react';
import { Chapter } from '../types';

interface ChapterListProps {
  chapters: Chapter[];
}

export function ChapterList({ chapters }: ChapterListProps) {
  return (
    <div className="space-y-6">
      {chapters.map((chapter) => (
        <div key={chapter.number} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Chapter {chapter.number}: {chapter.title}
          </h3>
          <div className="space-y-4">
            {chapter.resources.map((resource, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-700">{resource.channel}</p>
                  <p className="text-gray-600 text-sm mt-1">{resource.topics}</p>
                </div>
                <a
                  href={resource.playlistLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                >
                  <span>Watch</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}