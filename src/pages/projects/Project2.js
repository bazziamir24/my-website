import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Project page: Associate Researcher.
 *
 * Mirrors the structure of the original static `project2.html` file.  This
 * component describes the internship performed at Pierre and Marie Curie
 * University, focusing on reinforcement learning using the Gymnasium library.
 */
export default function Project2() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="relative pt-24 pb-32 bg-cover bg-center"
        style={{ backgroundImage: "url('../assets/work.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Associate Researcher</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Internship at Pierre and Marie Curie University focused on
            reinforcement learning using the Gymnasium library.
          </p>
        </div>
      </section>
      {/* Project details */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Internship Overview</h2>
        <p className="text-lg leading-relaxed mb-4">
          During my internship at <strong>Pierre and Marie Curie University</strong> (Apr&nbsp;2024 – Oct&nbsp;2024), I
          worked as an associate researcher on projects involving <em>reinforcement
          learning</em>. My primary focus was on implementing and experimenting with
          algorithms using the Gymnasium library.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The role allowed me to deepen my understanding of RL theory and practice,
          collaborate with academic researchers, and contribute to proof‑of‑concept
          implementations. I also gained experience deploying experiments in a real
          research environment and presenting findings to peers.
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-6">Key Contributions</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Implemented RL algorithms with the Gymnasium library in Python.</li>
          <li>Ran experiments to benchmark different approaches and tune hyperparameters.</li>
          <li>Collaborated with faculty to explore novel applications of reinforcement learning.</li>
        </ul>
        <div className="mt-10">
          <Link to="/work" className="text-indigo-600 font-semibold hover:underline">
            ← Back to Work
          </Link>
        </div>
      </main>
    </>
  );
}