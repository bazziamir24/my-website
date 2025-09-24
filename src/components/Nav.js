import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * Responsive navigation bar.  
 *
 * The navbar sticks to the top of the viewport and provides links to each
 * section of the site.  On medium screens and up it displays all links,
 * while on smaller screens you can add a mobile menu if desired.
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
            Amir&nbsp;Bazzi
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