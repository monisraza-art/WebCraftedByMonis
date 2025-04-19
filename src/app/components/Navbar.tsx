"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/theme/theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-600 dark:bg-black text-white shadow-lg rounded-lg px-4 py-2 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <Image
            src="/my profile pic.jfif"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-orange-400 cursor-pointer hover:text-orange-300">
            CraftedByMonis
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-8">
          
          <li>
            <Link href="/" className="text-lg hover:text-orange-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="services"
              className="text-lg hover:text-orange-200 transition"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="portfolio"
              className="text-lg hover:text-orange-200 transition"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="contact"
              className="text-lg hover:text-orange-200 transition"
            >
              Contact
            </Link>
          </li>
          <li>
          <ThemeToggle />
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden flex gap-3">
        <div className=" ">
        <ThemeToggle />
        </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 hover:text-orange-400 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-700/80 backdrop-blur-sm text-white z-50 flex flex-col items-center justify-center gap-6 
             animate-slideIn  ease-in-out transition-all duration-500"
        >
          <ul className="flex  flex-col items-center gap-6 text-2xl font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="services"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="portfolio"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-300"
              >
                Contact
              </Link>
            </li>
          </ul>
          
          <button
            className="absolute top-6 right-6 text-white hover:text-orange-400 text-4xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
