import { useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content: "This platform has been invaluable for my studies. The organized content and quality resources helped me excel in my exams.",
    type: "student"
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    role: "Physics Teacher",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    content: "As an educator, I'm impressed by the quality of content curation. It's a fantastic resource for both teachers and students.",
    type: "teacher"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    content: "The video resources are particularly helpful. Being able to replay complex concepts has improved my understanding significantly.",
    type: "student"
  },
  {
    id: 4,
    name: "Prof. Lisa Zhang",
    role: "Mathematics Teacher",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    content: "I recommend this platform to all my students. The structured approach to learning makes teaching more effective.",
    type: "teacher"
  }
];

export function Testimonials() {
  const [filter, setFilter] = useState<'all' | 'student' | 'teacher'>('all');

  const filteredTestimonials = testimonials.filter(t => 
    filter === 'all' ? true : t.type === filter
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          What Our Community Says
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          {[
            { label: 'All', value: 'all' },
            { label: 'Students', value: 'student' },
            { label: 'Teachers', value: 'teacher' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value as any)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === option.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}