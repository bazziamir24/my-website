import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Blog post: My First Blog Post.
 *
 * Contains the hero banner and the full article text.  At the bottom
 * a link allows returning to the blog index.
 */
export default function Blog1() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-24 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('../assets/blog.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            My First Blog Post
          </h1>
          <p className="text-sm text-gray-200 mt-3">Published September 1, 2025</p>
        </div>
      </section>
      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white prose prose-indigo prose-lg">
        <p>
          Welcome to my very first blog post! I'm thrilled to launch this new
          space where I can share thoughts, ideas, and experiences from my
          journey in technology and design. Creating a personal site has been on
          my to‑do list for a long time, and I'm excited to finally have a
          platform that reflects who I am and what I love doing.
        </p>
        <p>
          In this post, I'll talk about why I decided to build this website, the
          tools I used, and what you can expect in future posts. Building from
          scratch allowed me to tailor the site exactly to my needs, using
          Tailwind CSS for styling and focusing on a clean, responsive layout.
        </p>
        <p>
          Going forward, I'll be writing about projects I'm working on, lessons
          I've learned along the way, and topics that inspire me. Whether it's a
          deep dive into a new technology or a reflection on the creative
          process, I hope you'll find something here that resonates with you.
        </p>
        <p>
          Thank you for visiting, and feel free to explore the rest of the site
          to learn more about my work and interests. I look forward to sharing
          more soon!
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