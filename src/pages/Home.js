import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home page component.
 *
 * This page mirrors the original static index.html, containing a hero
 * section, an about overview with photo and social links, a work section
 * summarizing featured projects, and a blog preview showing the latest
 * posts with a link to view all.
 */
export default function Home() {
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
            Welcome to My World
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            A space to share my projects, passions, and musings on technology and
            creativity.
          </p>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <img
                src="assets/profile.png"
                alt="Portrait of Amir Bazzi"
                loading="lazy"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-indigo-600 shadow-md"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <p className="text-lg leading-relaxed mb-4">
                I am a hard‑working and highly organized individual looking to
                expand my learning, knowledge, and skills. Currently, I am
                pursuing a CIFRE PhD at <strong>Aubert&nbsp;&amp;&nbsp;Duval</strong>{' '}
                and <strong>Mines&nbsp;Paris&nbsp;–&nbsp;PSL</strong>, where my
                research focuses on the advanced coupling of{' '}
                <em>Graph Neural Networks</em> (GNNs) with time‑dependent
                partial differential equations. My work bridges machine
                learning with computational mechanics to tackle complex
                real‑world problems.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Prior to my doctoral studies, I served as an Associate
                Researcher at Pierre and Marie Curie University, working on
                reinforcement learning using the Gymnasium library. I am
                passionate about artificial intelligence, deep learning, and
                exploring how these technologies can drive innovation across
                industries. On this site you’ll find highlights from my
                research, past positions, and written reflections.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/bazziamir24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/amir-bazzi-404247193/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#0A66C2] text-white rounded-lg shadow hover:brightness-110 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:bazziamir@outlook.com?subject=Hello%20Amir"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                >
                  Email (Outlook)
                </a>
                <a
                  href="mailto:bazziamir@minesparis.psl.eu?subject=Hello%20Amir"
                  className="px-4 py-2 bg-violet-600 text-white rounded-lg shadow hover:bg-violet-700 transition"
                >
                  Email (School)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work section */}
      <section id="work" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            My Work
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 card */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <Link to="/projects/project1" className="block">
                <img
                  src="assets/hero.png"
                  alt="PhD Student (CIFRE)"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    PhD Student (CIFRE)
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Doctoral research at Aubert&nbsp;&amp;&nbsp;Duval and
                    Mines&nbsp;Paris&nbsp;–&nbsp;PSL, coupling Graph Neural
                    Networks with time‑dependent PDEs.
                  </p>
                  <span className="text-indigo-600 font-semibold">Read more →</span>
                </div>
              </Link>
            </div>
            {/* Project 2 card */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <Link to="/projects/project2" className="block">
                <img
                  src="assets/work.png"
                  alt="Associate Researcher"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Associate Researcher
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Internship at Pierre and Marie Curie University investigating
                    reinforcement learning with the Gymnasium library.
                  </p>
                  <span className="text-indigo-600 font-semibold">Read more →</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section id="blog" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            Latest Posts
          </h2>
          <div className="space-y-12">
            {/* Newest blog post */}
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
                <p className="text-sm text-gray-500 mb-3">
                  September 1, 2025
                </p>
                <p className="text-gray-700 mb-2">
                  An introduction to my blog, where I share the purpose of this
                  site and what to expect from future posts.
                </p>
                <Link to="/blog/blog1" className="text-indigo-600 font-semibold">
                  Read more →
                </Link>
              </div>
            </article>
            {/* Second blog post */}
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
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/blog"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
            >
              View all posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}