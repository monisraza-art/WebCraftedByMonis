'use client';

import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa'; // Example Instagram icon
import { SiGmail } from 'react-icons/si'; // Example Gmail icon

export default function Footer() {
  return (
    <footer className="bg-gray-600 dark:bg-black py-8 w-full text-gray-300 text-sm text-center md:text-left px-4">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
        {/* Contact & Social */}
        <div className="flex items-center space-x-6">
          <a
            href="mailto:monisrazadev@gmail.com"
            className="hover:text-orange-400 transition-colors duration-200 flex items-center space-x-2"
          >
            <SiGmail size={20} /> <span className="font-semibold">Email</span>
          </a>
          <a
            href="https://www.instagram.com/web.craftedbymonis" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors duration-200"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Legal & Copyright */}
        <div className="flex items-center space-x-6">
          <Link href="/policy" className="hover:text-orange-400 transition-colors duration-200">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-orange-400 transition-colors duration-200">
            Terms
          </Link>
          <span className="text-gray-400">© 2025 CraftedByMonis</span>
        </div>
      </div>
    </footer>
  );
}