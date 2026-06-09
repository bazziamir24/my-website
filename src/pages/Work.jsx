import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { assetPath } from '../lib/assets';

/**
 * Work page component.
 *
 * Lists featured projects/positions. Each card links to its own page with
 * more details.
 */
export default function Work() {
  return (
    <>
      {/* Hero section */}
      <HeroSection image="assets/hero.png" title="My Work">
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          A collection of my current and past projects and positions.
        </p>
      </HeroSection>

      {/* Projects list */}
      <main className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            Featured Projects
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <Link to="/projects/project1" className="block">
                <img
                  src={assetPath('assets/hero.png')}
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
            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <Link to="/projects/project2" className="block">
                <img
                  src={assetPath('assets/work.png')}
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
            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <Link to="/projects/metalore" className="block">
                <img
                  src={assetPath('assets/projects/metalore-demo.gif')}
                  alt="MetaLore reinforcement learning project"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    MetaLore
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Deep reinforcement learning with PPO for dynamic resource
                    allocation in mobile edge networks and digital twin
                    synchronization.
                  </p>
                  <span className="text-indigo-600 font-semibold">Read more -&gt;</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
