import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';
import { assetPath } from '../../lib/assets';

/**
 * Project page: Information theory school project.
 */
export default function Project4() {
  return (
    <>
      <HeroSection
        image="assets/tamir_paper.png"
        title="Gaussian Database Alignment"
      >
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Information theory school project on correlation detection and
          alignment recovery for Gaussian databases.
        </p>
      </HeroSection>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Project Overview
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          This school project, completed with my colleague Sarah Sayed,
          implemented and studied algorithms from Ran Tamir's paper on
          correlation detection and alignment recovery of Gaussian databases.
          The problem combines hypothesis testing, information theory,
          probability, and algorithmic recovery under an unknown row
          permutation.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I explored how to generate independent and correlated Gaussian
          databases, test whether correlation is present, and reason about when
          partial alignment recovery becomes possible.
        </p>

        <figure className="my-10">
          <img
            src={assetPath('assets/tamir_paper.png')}
            alt="Two Gaussian databases connected by a hidden permutation"
            loading="lazy"
            className="w-full rounded-xl shadow-sm ring-1 ring-gray-200"
          />
          <figcaption className="mt-3 text-center text-sm text-gray-500">
            Gaussian database alignment with a hidden row correspondence.
          </figcaption>
        </figure>

        <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-6">
          Key Focus Areas
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Implemented experiments in a Jupyter notebook.</li>
          <li>Simulated independent and correlated Gaussian databases.</li>
          <li>Studied correlation detection as a hypothesis testing problem.</li>
          <li>Explored partial alignment recovery under hidden permutations.</li>
          <li>Connected implementation results to information-theoretic limits.</li>
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/bazziamir24/On-Correlation-Detection-and-Alignment-Recovery-of-Gaussian-Databases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow hover:bg-gray-800 transition"
          >
            View repository
          </a>
          <a
            href="https://arxiv.org/abs/2211.01069"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Read paper
          </a>
          <Link
            to="/blog/information-theory-project"
            className="inline-block px-5 py-3 text-indigo-600 font-semibold hover:underline"
          >
            Read blog post
          </Link>
        </div>
      </main>
    </>
  );
}
