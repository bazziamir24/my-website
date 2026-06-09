  import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Publications from './pages/Publications.jsx';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import GnnArticle from './pages/blog/GnnArticle';
import InformationTheoryProject from './pages/blog/InformationTheoryProject';
import SmallRlProject from './pages/blog/SmallRlProject';
import Project1 from './pages/projects/Project1';
import Project2 from './pages/projects/Project2';
import Project3 from './pages/projects/Project3';
import Project4 from './pages/projects/Project4';

/**
 * Top level application component.
 *
 * Renders the global navigation bar and routes to individual pages. Each
 * page component is responsible for its own section layout and content.
 */
export default function App() {
  return (
    <div className="min-h-screen pt-16">
      {/* pt-16 offsets the fixed nav height */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/blog" element={<Blog />} />
        {/* Individual blog posts */}
        <Route path="/blog/small-rl-project" element={<SmallRlProject />} />
        <Route path="/blog/information-theory-project" element={<InformationTheoryProject />} />
        <Route path="/blog/gnn-article" element={<GnnArticle />} />
        {/* Projects */}
        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/project2" element={<Project2 />} />
        <Route path="/projects/metalore" element={<Project3 />} />
        <Route path="/projects/gaussian-database-alignment" element={<Project4 />} />
        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
