import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Blog1 from './pages/blog/Blog1';
import Blog2 from './pages/blog/Blog2';
import GnnArticle from './pages/blog/GnnArticle';
import Project1 from './pages/projects/Project1';
import Project2 from './pages/projects/Project2';

/**
 * Top level application component.
 *
 * Renders the global navigation bar and routes to individual pages.  Each
 * page component is responsible for its own section layout and content.
 */
export default function App() {
  return (
    <div className="min-h-screen pt-16">{/* pt-16 offsets the fixed nav height */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        {/* Individual blog posts */}
        <Route path="/blog/blog1" element={<Blog1 />} />
        <Route path="/blog/blog2" element={<Blog2 />} />
        <Route path="/blog/gnn-article" element={<GnnArticle />} />
        {/* Projects */}
        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/project2" element={<Project2 />} />
        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}