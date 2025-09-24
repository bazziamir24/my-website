import React from 'react';

/**
 * About page component.
 *
 * Provides a more detailed introduction, reusing much of the content from
 * the home page but with its own hero section and more space for text.
 */
export default function About() {
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
            About Me
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Learn more about my background, passions and interests.
          </p>
        </div>
      </section>
      {/* About content */}
      <main className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <img
                src="assets/profile.png"
                alt="Portrait of Amir Bazzi"
                loading="lazy"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover ring-2 ring-white border-4 border-indigo-600 shadow-md"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Hello, I'm Amir
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                I am a hard-working and highly organized individual looking to
                expand my learning, knowledge and skills. Currently, I am
                pursuing a CIFRE PhD at{' '}
                <strong>Aubert&nbsp;&amp;&nbsp;Duval</strong> and{' '}
                <strong>Mines&nbsp;Paris&nbsp;–&nbsp;PSL</strong>, where my
                research focuses on coupling <em>Graph Neural Networks</em>
                (GNNs) with time-dependent partial differential equations.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Previously, I was an Associate Researcher at Pierre &amp; Marie
                Curie University working on reinforcement learning with
                Gymnasium. I’m passionate about AI, deep learning, and
                bringing machine learning into real-world engineering.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                On this page you'll find more details about my background,
                research interests and the journey that has shaped my career so
                far.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/bazziamir24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/amir-bazzi-404247193/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] text-white hover:brightness-110"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:bazziamir@outlook.com?subject=Hello%20Amir"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  Email (Outlook)
                </a>
                <a
                  href="mailto:bazziamir@minesparis.psl.eu?subject=Hello%20Amir"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-500"
                >
                  Email (School)
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}