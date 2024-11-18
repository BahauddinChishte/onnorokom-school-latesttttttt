import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Chapter } from '../types';
import { ResourceList } from './ResourceList';

interface ChapterAccordionProps {
  chapter: Chapter;
}

export function ChapterAccordion({ chapter }: ChapterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="w-full px-4 py-3 bg-gray-50 flex items-center justify-between hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <span className="font-medium">Chapter {chapter.number}</span>
          <span className="text-gray-600">-</span>
          <span className="text-gray-600">{chapter.title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          <ResourceList resources={chapter.resources} />
        </div>
      )}
    </div>
  );
}