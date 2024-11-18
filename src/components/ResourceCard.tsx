import React, { useState } from 'react';
import { Youtube, ChevronDown, ChevronUp } from 'lucide-react';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ResourceCard({ resource, isExpanded, onToggle }: ResourceCardProps) {
  // Helper function to get YouTube video ID
  function getYouTubeId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  const videoId = getYouTubeId(resource.playlistLink);
  const embedUrl = videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : resource.playlistLink;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Youtube className="w-6 h-6 text-red-600 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-medium text-gray-900 font-bengali">{resource.title}</h4>
              <div className="flex items-center space-x-3 mt-1">
                <p className="text-sm text-gray-600">{resource.channel}</p>
                {resource.views && (
                  <>
                    <span className="text-gray-400">•</span>
                    <p className="text-sm text-gray-600">{resource.views} views</p>
                  </>
                )}
              </div>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>

        {resource.topics && (
          <div className="mt-3 text-sm text-gray-600 font-bengali bg-gray-50 p-3 rounded-lg">
            <p className="font-medium text-gray-700 mb-1">এই ভিডিওতে যা শিখবেন:</p>
            <p>{resource.topics}</p>
          </div>
        )}
      </button>

      {isExpanded && (
        <div className="relative pt-[56.25%] bg-black">
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full"
            title={resource.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}