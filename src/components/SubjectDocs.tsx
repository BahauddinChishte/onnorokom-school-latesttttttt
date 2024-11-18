import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, BookOpen, Menu, X } from 'lucide-react';
import { Subject } from '../types';
import { subjects } from '../data/subjects';
import { ResourceCard } from './ResourceCard';

interface SubjectDocsProps {
  subject: Subject;
  onBack: () => void;
}

interface SidebarItemProps {
  title: string;
  isOpen?: boolean;
  hasChildren?: boolean;
  onClick?: () => void;
  depth?: number;
  isActive?: boolean;
}

function SidebarItem({ title, isOpen, hasChildren, onClick, depth = 0, isActive }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-between group ${
        depth ? 'pl-8' : ''
      } ${isActive ? 'bg-primary-50 text-primary-600' : ''}`}
    >
      <span className={`${isActive ? 'text-primary-600' : 'text-gray-700'} group-hover:text-gray-900 font-bengali`}>
        {title}
      </span>
      {hasChildren && (
        <span className="text-gray-400">
          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </span>
      )}
    </button>
  );
}

export function SubjectDocs({ subject, onBack }: SubjectDocsProps) {
  const [currentSubject, setCurrentSubject] = useState(subject);
  const [openSubject, setOpenSubject] = useState(subject.name);
  const [selectedChapter, setSelectedChapter] = useState(subject.chapters[0]);
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSubjectClick = (subj: Subject) => {
    setCurrentSubject(subj);
    setOpenSubject(subj.name);
    setSelectedChapter(subj.chapters[0]);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    setCurrentSubject(subject);
    setOpenSubject(subject.name);
    setSelectedChapter(subject.chapters[0]);
  }, [subject]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const menuButton = document.getElementById('menu-button');
      
      if (sidebar && 
          !sidebar.contains(event.target as Node) && 
          menuButton && 
          !menuButton.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex h-screen bg-white relative">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 border-b shadow-sm">
        <div className="flex items-center justify-between p-4">
          <button
            id="menu-button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="font-bold text-lg text-gray-900 font-bengali">{currentSubject.name}</h1>
          <button
            onClick={onBack}
            className="text-primary-600 font-medium font-bengali"
          >
            ফিরে যান
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`fixed lg:static inset-0 z-40 w-72 bg-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } border-r flex flex-col h-full lg:h-screen`}
        style={{ top: 0 }}
      >
        <div className="p-4 border-b flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary-600" />
            <h1 className="font-bold text-xl text-gray-900 font-bengali">শিক্ষা সামগ্রী</h1>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <button
            onClick={onBack}
            className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 font-medium text-gray-900 border-b font-bengali lg:block hidden"
          >
            ← বিষয়সমূহে ফিরে যান
          </button>

          <div className="py-2">
            {subjects.map((subj) => (
              <div key={subj.name}>
                <SidebarItem
                  title={subj.name}
                  hasChildren
                  isOpen={subj.name === openSubject}
                  isActive={subj.name === currentSubject.name}
                  onClick={() => {
                    if (subj.name === openSubject) {
                      setOpenSubject('');
                    } else {
                      handleSubjectClick(subj);
                    }
                  }}
                />
                {subj.name === openSubject && subj.chapters.map((chapter) => (
                  <SidebarItem
                    key={chapter.number}
                    title={`অধ্যায় ${chapter.number}: ${chapter.title}`}
                    depth={1}
                    isActive={selectedChapter.number === chapter.number && currentSubject.name === subj.name}
                    onClick={() => {
                      setSelectedChapter(chapter);
                      setIsSidebarOpen(false);
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 overflow-y-auto pt-16 lg:pt-0">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 py-6 lg:py-12">
          <div className="mb-8 hidden lg:block">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-bengali">{currentSubject.name}</h1>
            <p className="text-gray-600 font-bengali">
              {currentSubject.description}
            </p>
          </div>

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 font-bengali">
              অধ্যায় {selectedChapter.number}: {selectedChapter.title}
            </h2>
            
            {selectedChapter.description && (
              <p className="text-gray-600 mb-8 font-bengali">{selectedChapter.description}</p>
            )}

            <div className="space-y-6 lg:space-y-8">
              {selectedChapter.categories.map((category, index) => (
                <div key={index}>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 font-bengali">{category.title}</h3>
                  <div className="space-y-4 lg:space-y-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <ResourceCard
                        key={resourceIndex}
                        resource={resource}
                        isExpanded={expandedVideo === `${category.title}-${resourceIndex}`}
                        onToggle={() => {
                          if (expandedVideo === `${category.title}-${resourceIndex}`) {
                            setExpandedVideo(null);
                          } else {
                            setExpandedVideo(`${category.title}-${resourceIndex}`);
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}