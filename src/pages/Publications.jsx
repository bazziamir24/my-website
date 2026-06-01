import React from 'react';

/**
 * Publications page component.
 *
 * Lists research publications with summaries and links.
 */
export default function Publications() {
  return (
    <>
      {/* Hero section */}
      <section
        className="relative pt-24 pb-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Publications
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            A collection of my research publications.
          </p>
        </div>
      </section>
      {/* Publications list */}
      <main className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            Recent Publication
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Physics-Informed Coarsening for Multigrid Graph Neural Surrogates
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Amir Bazzi, Ramy Nemer, José Alves, Elie Hachem • ICML 2026
              </p>
              <p className="text-gray-700 mb-4">
                We introduce a multigrid graph neural network for solid mechanics that uses a physics-informed coarsening strategy to focus model capacity on regions of high strain or stress concentration. This approach preserves long-range interactions and improves accuracy and stability across linear, nonlinear, and transient regimes.
              </p>
              <a
                href="https://sites.google.com/view/physics-informed-coarsening"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-indigo-600 font-semibold hover:underline"
              >
                Read the full paper →
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
