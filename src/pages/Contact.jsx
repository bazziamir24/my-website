import React from 'react';
import HeroSection from '../components/HeroSection';

/**
 * Contact page component.
 *
 * Provides the user's contact information with links to email addresses,
 * LinkedIn and GitHub.  Keeps the styling consistent with the rest of
 * the site.
 */
export default function Contact() {
  return (
    <>
      {/* Hero section */}
      <HeroSection image="assets/hero.png" title="Get in Touch">
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          Reach out for collaborations, questions, or just to say hello.
        </p>
      </HeroSection>
      {/* Contact details */}
      <main className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Contact Information
          </h2>
          <p className="text-lg leading-relaxed mb-10">
            Feel free to contact me via email, connect with me on LinkedIn, or
            check out my projects on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-4">
            <a
              href="mailto:bazziamir@outlook.com?subject=Hello%20Amir"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Email (Outlook)
            </a>
            <a
              href="mailto:bazziamir@minesparis.psl.eu?subject=Hello%20Amir"
              className="px-6 py-3 bg-violet-600 text-white rounded-lg shadow hover:bg-violet-700 transition"
            >
              Email (School)
            </a>
            <a
              href="https://www.linkedin.com/in/amir-bazzi-404247193/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0A66C2] text-white rounded-lg shadow hover:brightness-110 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/bazziamir24"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition"
            >
              GitHub
            </a>
            <a
              href="https://scholar.google.com/citations?user=xizjTsgAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-700 text-white rounded-lg shadow hover:bg-emerald-800 transition"
            >
              Google Scholar
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
