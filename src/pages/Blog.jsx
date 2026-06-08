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
      <main className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
            All Posts
          </h2>
          <div className="space-y-12">
            {/* Post 1 */}
            <article className="flex flex-col sm:flex-row items-start">
              <img
                src={assetPath('assets/medium/hero_gnn.webp')}
                alt=""
                loading="lazy"
                className="flex-shrink-0 w-full sm:w-64 h-40 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  <Link to="/blog/gnn-article" className="hover:text-indigo-600">
                    Graphs, But Smarter: The Rise of Graph Neural Networks
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mb-3">April 24, 2025</p>
                <p className="text-gray-700 mb-2">
                  Exploring what graph neural networks are, how they work, and
                  why they matter for AI and physics simulations.
                </p>
                <Link to="/blog/gnn-article" className="text-indigo-600 font-semibold">
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
