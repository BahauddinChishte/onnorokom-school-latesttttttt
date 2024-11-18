import React, { useState } from 'react';
import { X } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  title: string;
  onClose: () => void;
}

// Helper function to get YouTube video ID
function getYouTubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export function VideoPlayer({ url, title, onClose }: VideoPlayerProps) {
  const videoId = getYouTubeId(url);
  const embedUrl = videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : url;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl">
        <div className="p-4 flex items-center justify-between border-b">
          <h3 className="text-lg font-semibold text-gray-900 font-bengali">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="relative pt-[56.25%]">
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full"
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}