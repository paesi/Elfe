import React from 'react';
import { Star } from 'lucide-react';

export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
}

export function Testimonial({ name, role, content }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} className="text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}