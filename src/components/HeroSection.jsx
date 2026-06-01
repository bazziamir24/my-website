import React from 'react';
import { assetPath } from '../lib/assets';

export default function HeroSection({ image, title, children, compact = false }) {
  return (
    <section className={`relative overflow-hidden ${compact ? 'pt-24 pb-20' : 'pt-24 pb-32'}`}>
      <img
        src={assetPath(image)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className={compact ? 'text-4xl sm:text-5xl font-extrabold leading-tight' : 'text-4xl sm:text-5xl md:text-6xl font-bold mb-4'}>
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
