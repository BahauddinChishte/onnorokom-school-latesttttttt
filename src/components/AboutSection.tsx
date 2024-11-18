import React from 'react';
import { Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto mt-16 space-y-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <img
              src="https://avatars.githubusercontent.com/u/91181868?v=4"
              alt="Profile"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Heart className="w-6 h-6 text-rose-500 mr-2" />
              Why I Built This
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I created this platform with a simple mission: to make quality
              education accessible to everyone, regardless of their financial
              background. As someone who believes in the power of education to
              transform lives, I wanted to create a centralized hub where
              students can easily find and access free, high-quality educational
              resources. This project is my contribution to breaking down the
              barriers that often prevent talented students from accessing the
              learning materials they need to succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}