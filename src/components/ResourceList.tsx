import React from 'react';
import { ExternalLink, Youtube, Book } from 'lucide-react';
import { Resource } from '../types';

interface ResourceListProps {
  resources: Resource[];
}

export function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="space-y-4">
      {resources.map((resource, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              {resource.type.toLowerCase().includes('video') ? (
                <Youtube className="w-5 h-5 text-red-600" />
              ) : (
                <Book className="w-5 h-5 text-blue-600" />
              )}
              <div>
                <h4 className="font-medium text-gray-900">{resource.channel}</h4>
                <p className="text-sm text-gray-500">{resource.type}</p>
              </div>
            </div>
            <a
              href={resource.playlistLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800"
            >
              <span>Open</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          {resource.topics && (
            <div className="mt-2 text-sm text-gray-600">
              <p>{resource.topics}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}