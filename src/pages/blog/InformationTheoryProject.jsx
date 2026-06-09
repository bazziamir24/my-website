import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';
import BlogEngagement from '../../components/BlogEngagement';
import { assetPath } from '../../lib/assets';

/**
 * Blog post: Information theory school project.
 */
export default function InformationTheoryProject() {
  return (
    <>
      <HeroSection
        image="assets/tamir_paper.png"
        title="Correlation Detection and Alignment Recovery in Gaussian Databases"
        compact
      >
        <p className="text-sm text-gray-200 mt-3">Published April 4, 2024</p>
      </HeroSection>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white text-gray-800">
        <h2 className="mt-0 mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          Project Overview
        </h2>
        <p className="text-xl leading-9 mb-6">
          As part of a school project completed with my colleague Sarah Sayed,
          I studied the problem of correlation detection and alignment recovery
          for Gaussian databases. The work was based on Ran Tamir's paper,{' '}
          <em>On Correlation Detection and Alignment Recovery of Gaussian
          Databases</em>, and focused on understanding how information-theoretic
          ideas can be translated into implementable statistical procedures.
        </p>
        <p className="text-xl leading-9 mb-10">
          The central question is whether two databases are independent or
          correlated when the correspondence between their rows is hidden by an
          unknown permutation. If correlation is detected, the next challenge is
          to recover part, or all, of the alignment between entries.
        </p>

        <figure className="my-10">
          <img
            src={assetPath('assets/tamir_paper.png')}
            alt="Two Gaussian databases connected by a hidden permutation"
            loading="lazy"
            className="w-full rounded-xl shadow-sm ring-1 ring-gray-200"
          />
          <figcaption className="mt-4 text-center text-sm text-gray-500">
            Two Gaussian databases with a hidden row correspondence.
          </figcaption>
        </figure>

        <div className="my-10 rounded-lg bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The Statistical Setup
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
              <p className="text-sm font-semibold text-gray-500 mb-2">
                Null hypothesis
              </p>
              <p className="text-lg leading-8">
                The two Gaussian databases are independent, so no meaningful
                row correspondence should be recoverable.
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 ring-1 ring-gray-200">
              <p className="text-sm font-semibold text-gray-500 mb-2">
                Alternate hypothesis
              </p>
              <p className="text-lg leading-8">
                The databases are correlated, but one database has been
                permuted, hiding the row-level alignment.
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-16 mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          What I Implemented
        </h2>
        <p className="text-xl leading-9 mb-6">
          My implementation explores the algorithmic side of the paper in a
          Jupyter notebook. I worked through the simulation pipeline for
          Gaussian databases, generated correlated and independent samples, and
          reproduced the decision-making logic needed to test for correlation
          under an unknown alignment.
        </p>
        <p className="text-xl leading-9 mb-10">
          The project helped me connect theoretical concepts such as hypothesis
          testing, type-I and type-II error, row permutations, and recovery
          guarantees with practical numerical experiments.
        </p>

        <h2 className="mt-16 mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          Why It Matters
        </h2>
        <p className="text-xl leading-9 mb-6">
          Database alignment problems appear when related datasets have lost
          explicit identifiers or have been anonymized. From an information
          theory perspective, this raises two related questions: how much
          correlation is needed to detect that two datasets are related, and how
          much is needed to recover the hidden matching between entries?
        </p>
        <p className="text-xl leading-9 mb-10">
          This makes the project a useful bridge between information theory,
          probability, algorithms, and privacy. It shows how seemingly abstract
          bounds and detection thresholds influence whether recovery is
          possible in practice.
        </p>

        <h2 className="mt-16 mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          Takeaways
        </h2>
        <ul className="list-disc pl-6 text-lg leading-8 space-y-2">
          <li>
            Correlation detection can be framed as a hypothesis testing problem
            over two Gaussian databases.
          </li>
          <li>
            Unknown row permutations make the problem harder because the
            alignment is itself hidden.
          </li>
          <li>
            Partial alignment recovery can be performed after accepting that
            the databases are correlated.
          </li>
          <li>
            Simulations make the role of correlation strength, dimensionality,
            and error probability easier to understand.
          </li>
        </ul>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/bazziamir24/On-Correlation-Detection-and-Alignment-Recovery-of-Gaussian-Databases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow hover:bg-gray-800 transition"
          >
            View project repository
          </a>
          <a
            href="https://arxiv.org/abs/2211.01069"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Read original paper
          </a>
          <Link
            to="/blog"
            className="inline-block px-5 py-3 text-indigo-600 font-semibold hover:underline"
          >
            Back to Blog
          </Link>
        </div>

        <BlogEngagement postSlug="information-theory-project" />
      </article>
    </>
  );
}
