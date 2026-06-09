import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { assetPath } from '../lib/assets';

/**
 * Blog listing page.
 *
 * Displays all blog posts in reverse chronological order. Each post is
 * represented with its own card containing a title, date, summary and link.
 */
export default function Blog() {
  return (
    <>
      {/* Hero section */}
      <HeroSection image="assets/hero.png" title="My Blog">
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          Insights, reflections, and notes on AI, research and beyond.
        </p>
      </HeroSection>

      {/* Posts list */}
      <main className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12">
            All Posts
          </h2>
          <div className="space-y-14">
            {/* Post 1 */}
            <article className="flex flex-col sm:flex-row items-start gap-6">
              <img
                src={assetPath('assets/medium/hero_gnn.webp')}
                alt=""
                loading="lazy"
                className="flex-shrink-0 w-full sm:w-72 h-44 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 mb-3">
                  <Link to="/blog/gnn-article" className="hover:text-indigo-600">
                    Graphs, But Smarter: The Rise of Graph Neural Networks
                  </Link>
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-4">April 24, 2025</p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Exploring what graph neural networks are, how they work, and
                  why they matter for AI and physics simulations.
                </p>
                <Link to="/blog/gnn-article" className="text-indigo-600 font-semibold">
                  Read more -&gt;
                </Link>
              </div>
            </article>
            {/* Post 2 */}
            <article className="flex flex-col sm:flex-row items-start gap-6">
              <img
                src={assetPath('assets/tamir_paper.png')}
                alt=""
                loading="lazy"
                className="flex-shrink-0 w-full sm:w-72 h-44 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 mb-3">
                  <Link to="/blog/information-theory-project" className="hover:text-indigo-600">
                    Correlation Detection and Alignment Recovery in Gaussian Databases
                  </Link>
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-4">April 4, 2024</p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  A school project with Sarah Sayed implementing ideas from Ran
                  Tamir's work on detecting correlation and recovering hidden
                  alignments between Gaussian databases.
                </p>
                <Link to="/blog/information-theory-project" className="text-indigo-600 font-semibold">
                  Read more -&gt;
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
