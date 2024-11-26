'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md border-b border-white/10 fixed w-full top-0 z-50 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                <svg 
                  className="relative w-8 h-8 text-white transform group-hover:scale-105 transition duration-200" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="ml-2 text-white font-semibold text-lg tracking-tight">StudyForge</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link 
                href="/" 
                className="text-white relative group px-3 py-2 text-sm font-medium transition-colors"
              >
                <span>Home</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link 
                href="/upload" 
                className="text-white/70 relative group px-3 py-2 text-sm font-medium transition-colors hover:text-white"
              >
                <span>Upload</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link 
                href="/about" 
                className="text-white/70 relative group px-3 py-2 text-sm font-medium transition-colors hover:text-white"
              >
                <span>About</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity transform hover:scale-105 duration-200 shadow-md shadow-purple-500/20">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-t border-white/5">
            <Link href="/" className="text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-white/10 transition-colors">
              Home
            </Link>
            <Link href="/upload" className="text-white/70 block px-3 py-2 rounded-lg text-base font-medium hover:bg-white/10 hover:text-white transition-colors">
              Upload
            </Link>
            <Link href="/about" className="text-white/70 block px-3 py-2 rounded-lg text-base font-medium hover:bg-white/10 hover:text-white transition-colors">
              About
            </Link>
            <button className="w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
