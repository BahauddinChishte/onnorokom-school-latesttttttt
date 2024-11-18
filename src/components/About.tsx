import { Github, Mail } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Why I Built This</h2>
      <p className="text-gray-600 mb-6">
        This platform was created to make quality educational resources accessible to students from all backgrounds, 
        especially those who cannot afford paid courses. By organizing and curating free educational content from 
        various sources, we aim to bridge the educational gap and provide equal learning opportunities for everyone.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
      <div className="space-y-4">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <Github className="w-5 h-5" />
          <span>Contribute on GitHub</span>
        </a>
        <a 
          href="mailto:your.email@example.com" 
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <Mail className="w-5 h-5" />
          <span>Submit Suggestions</span>
        </a>
      </div>
    </div>
  );
}