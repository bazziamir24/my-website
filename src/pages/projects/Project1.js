import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Project page: PhD Student (CIFRE).
 */
export default function Project1() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="relative pt-24 pb-32 bg-cover bg-center"
        style={{ backgroundImage: "url('../assets/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            PhD Student (CIFRE)
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Doctoral research at Aubert&nbsp;&amp;&nbsp;Duval and
            Mines&nbsp;Paris&nbsp;–&nbsp;PSL focused on coupling Graph Neural
            Networks with time‑dependent PDEs.
          </p>
        </div>
      </section>
      {/* Project details */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Research Overview
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          As a CIFRE PhD student, I am exploring how <strong>Graph Neural
          Networks</strong> can be integrated with time‑dependent partial
          differential equations to model complex physical phenomena. This
          interdisciplinary research aims to improve the simulation of dynamic
          systems by leveraging the expressive power of graph‑based deep
          learning.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The project is a collaboration between the industrial partner
          Aubert&nbsp;&amp;&nbsp;Duval and <em>Mines&nbsp;Paris&nbsp;–&nbsp;PSL</em>.
          By combining domain expertise with machine learning techniques, we hope
          to develop more accurate and efficient computational tools for
          engineering applications.
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-6">
          Key Focus Areas
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Designing Graph Neural Network architectures suited for temporal data.</li>
          <li>Formulating hybrid models that couple neural networks with PDE solvers.</li>
          <li>Validating models on real-world engineering problems.</li>
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