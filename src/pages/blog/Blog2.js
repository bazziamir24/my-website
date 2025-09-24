import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Blog post: Another Blog Post.
 */
export default function Blog2() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-24 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('../assets/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Another Blog Post
          </h1>
          <p className="text-sm text-gray-200 mt-3">Published August 20, 2025</p>
        </div>
      </section>
      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white prose prose-indigo prose-lg">
        <p>
          Staying productive and creative can be challenging, especially when
          juggling multiple projects and responsibilities. Over time, I've
          developed a few strategies that help me maintain momentum and continue
          generating new ideas.
        </p>
        <p>
          First, I set aside dedicated time for creative exploration—whether
          it's sketching out concepts, experimenting with a new library, or
          simply daydreaming about possibilities. These moments are crucial for
          nurturing innovation and preventing burnout.
        </p>
        <p>
          Second, I organize my tasks using simple tools like to‑do lists and
          calendars. Breaking bigger goals into smaller tasks makes them less
          daunting and easier to track. I also allow flexibility; if inspiration
          strikes, I'm not afraid to shift priorities to capture an idea before
          it fades.
        </p>
        <p>
          Finally, I believe in taking breaks. Sometimes stepping away from the
          screen and going for a walk is the best way to solve a problem or
          spark a new thought. Productivity isn't about constant motion—it's
          about making thoughtful progress and enjoying the process along the
          way.
        </p>
        <div className="mt-10">
          <Link to="/blog" className="text-indigo-600 font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </>
  );
}