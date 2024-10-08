"use client";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative text-gray-700">
      {/* Navigation Bar */}
      <nav className="relative flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 z-10 border-b shadow">
        <div>
          <img src="./logos/LogoWithText.png" className="w-40" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden focus:outline-none z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Desktop & Mobile Navigation */}
        <ul
          className={`${
            isMenuOpen ? "block shadow-lg rounded-lg m-4" : "hidden"
          } absolute top-16 left-0 right-0 bg-gray-200 sm:bg-transparent sm:flex sm:relative sm:top-auto sm:left-auto sm:right-auto sm:space-x-6 sm:py-0 py-6 text-center sm:text-left`}
        >
          <li className="sm:py-0 py-3">
            <Link href="#services">
              <p className="hover:text-gray-300 transition duration-300 cursor-pointer">
                Services
              </p>
            </Link>
          </li>
          <li className="sm:py-0 py-3">
            <Link href="#process">
              <p className="hover:text-gray-300 transition duration-300 cursor-pointer">
                Our Process
              </p>
            </Link>
          </li>
          <li className="sm:py-0 py-3">
            <Link href="#contact">
              <p className="hover:text-gray-300 transition duration-300 cursor-pointer">
                Contact
              </p>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="relative container mx-auto text-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight drop-shadow-lg tracking-tight max-w-4xl mx-auto">
          Building Cutting-Edge Software for Tomorrow&apos;s Solutions
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-gray-500 max-w-2xl mx-auto">
          From mobile apps to AI-powered platforms, we create tech solutions
          that drive innovation and growth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="#services">
            <p className="bg-blue-500 text-white w-full sm:w-auto px-8 py-4 rounded-full text-lg sm:text-xl font-semibold shadow transition-transform transform hover:scale-105 inline-block text-center">
              Explore Services
            </p>
          </Link>
          <Link href="#contact">
            <p className="bg-white text-blue-600 border border-blue-500 w-full sm:w-auto px-8 py-4 rounded-full text-lg sm:text-xl font-semibold shadow transition-transform transform hover:scale-105 inline-block text-center">
              Get in Touch
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
}
