'use client';

import Navbar from '../components/Navbar';

export default function About(): JSX.Element {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex items-center justify-center min-h-screen text-white px-4">
        <div className="w-full max-w-3xl -mt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-10 text-center">
            About StudyForge
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            StudyForge is an innovative educational tool designed to transform the way students revise and learn. 
            Our platform harnesses the power of AI to create personalized learning experiences. By streamlining the 
            revision process, we empower students to focus on what truly matters—understanding and mastering their subjects. 
            Whether you&apos;re preparing for exams or simply enhancing your knowledge, StudyForge is here to make learning 
            smarter and more efficient.
          </p>
        </div>
      </main>
    </div>
  );
}
