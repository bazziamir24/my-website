import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Blog listing page.
 *
 * Displays all blog posts in reverse chronological order.  Each post is
 * represented with its own card containing a title, date, summary and link.
 */
export default function Blog() {
  return (
    <>
      {/* Hero section */}
      <section
        className="relative pt-24 pb-32 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            My Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Insights, reflections, and notes on AI, research and beyond.
          </p>
        </div>
      </section>
      {/* Posts list */}
      <main className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
            All Posts
          </h2>
          <div className="space-y-12">
            {/* Post 1 */}
            <article className="flex flex-col sm:flex-row items-start">
              <div
                className="flex-shrink-0 w-full sm:w-64 h-40 bg-cover bg-center rounded-lg mb-4 sm:mb-0 sm:mr-6"
                style={{ backgroundImage: "url('assets/blog.png')" }}
              ></div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  <Link to="/blog/blog1" className="hover:text-indigo-600">
                    My First Blog Post
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mb-3">September 1, 2025</p>
                <p className="text-gray-700 mb-2">
                  An introduction to my blog, where I share the purpose of
                  this site and what to expect from future posts.
                </p>
                <Link to="/blog/blog1" className="text-indigo-600 font-semibold">
                  Read more →
                </Link>
              </div>
            </article>
            {/* Post 2 */}
            <article className="flex flex-col sm:flex-row items-start">
              <div
                className="flex-shrink-0 w-full sm:w-64 h-40 bg-cover bg-center rounded-lg mb-4 sm:mb-0 sm:mr-6"
                style={{ backgroundImage: "url('assets/hero.png')" }}
              ></div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  <Link to="/blog/blog2" className="hover:text-indigo-600">
                    Another Blog Post
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mb-3">August 20, 2025</p>
                <p className="text-gray-700 mb-2">
                  Sharing tips for staying productive and creative. Discover my
                  methods for keeping ideas flowing.
                </p>
                <Link to="/blog/blog2" className="text-indigo-600 font-semibold">
                  Read more →
                </Link>
              </div>
            </article>
            {/* Post 3 */}
            <article className="flex flex-col sm:flex-row items-start">
              <div
                className="flex-shrink-0 w-full sm:w-64 h-40 bg-cover bg-center rounded-lg mb-4 sm:mb-0 sm:mr-6"
                style={{ backgroundImage: "url('assets/medium/hero_gnn.webp')" }}
              ></div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  <Link to="/blog/gnn-article" className="hover:text-indigo-600">
                    Graphs, But Smarter: The Rise of Graph Neural Networks
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mb-3">April 24, 2025</p>
                <p className="text-gray-700 mb-2">
                  Exploring what graph neural networks are, how they work, and
                  why they matter for AI and physics simulations.
                </p>
                <Link to="/blog/gnn-article" className="text-indigo-600 font-semibold">
                  Read more →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}