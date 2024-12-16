import React from 'react';
import { Testimonial } from './references/Testimonial';
import { ProjectReference } from './references/ProjectReference';
import { testimonials, projects } from './references/data';

export default function References() {
  return (
    <section className="py-16" id="references">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Referenzen
        </h2>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectReference
              key={project.title}
              {...project}
            />
          ))}
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl font-bold text-center mb-8 text-blue-900">
          Was unsere Kunden sagen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}