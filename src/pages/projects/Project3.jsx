import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';

/**
 * Project page: MetaLore.
 */
export default function Project3() {
  return (
    <>
      {/* Hero banner */}
      <HeroSection
        image="assets/work.png"
        title="MetaLore"
      >
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Deep reinforcement learning for Metaverse resource allocation,
          digital twin synchronization, and wireless edge-computing systems.
        </p>
      </HeroSection>

      {/* Project details */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Project Overview
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          <strong>MetaLore</strong> is a reinforcement learning project
          developed during my internship, focused on dynamic communication and
          computation resource allocation for digital twin and Metaverse
          synchronization. The system models a wireless edge-computing
          environment where mobile users generate service requests and sensors
          send periodic updates to keep digital twins synchronized with the
          physical world.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I formulated the resource allocation task as a Markov Decision Process
          and trained a Deep Reinforcement Learning agent based on
          <strong> PPO</strong> to learn continuous allocation policies. The
          agent observes lightweight queue-based states and dynamically splits
          bandwidth and computation resources between users and sensors,
          balancing synchronization freshness, end-to-end latency, and
          throughput.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-6">
          Key Contributions
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            Built a custom Gymnasium-compatible simulation environment based on
            mobile-env.
          </li>
          <li>
            Modeled dynamic traffic, user mobility, sensor updates, queues, and
            digital twin synchronization.
          </li>
          <li>
            Formulated resource allocation as a continuous-action reinforcement
            learning problem.
          </li>
          <li>Trained PPO agents using Stable-Baselines3.</li>
          <li>
            Designed reward functions combining synchronization delay,
            end-to-end delay, and throughput.
          </li>
          <li>
            Compared learned policies against exhaustive static allocation
            baselines.
          </li>
          <li>
            Showed that the DRL policy learns near-optimal trade-offs without
            brute-force search.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-6">
          Technologies
        </h2>
        <p className="text-lg leading-relaxed">
          Python, Reinforcement Learning, PPO, Gymnasium, Stable-Baselines3,
          mobile-env, Digital Twins, Edge Computing, Wireless Networks.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/bazziamir24/mobile-env"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow hover:bg-gray-800 transition"
          >
            View repository
          </a>
          <Link
            to="/work"
            className="inline-block px-5 py-3 text-indigo-600 font-semibold hover:underline"
          >
            Back to Work
          </Link>
        </div>
      </main>
    </>
  );
}
