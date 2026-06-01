import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * Updated navigation bar.
 *
 * Includes a Publications link in addition to existing About, Work, Blog, and Contact links.
 */
export default function Nav() {
  // CSS classes for nav links; uses active state styling
  const linkClasses =
    'text-gray-600 hover:text-indigo-600 transition-colors duration-150';
  const activeClasses = 'text-indigo-600 font-semibold';

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            Amir\u00a0Bazzi
          </Link>
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ''}`
              }
            >
              Work
            </NavLink>
            <NavLink
              to="/publications"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ''}`
              }
            >
              Publications
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ''}`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? activeClasses : ''}`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
