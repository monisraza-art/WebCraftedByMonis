'use client';

import Testomonials from "../components/Testomials";
import TopSales from "../components/TopSales";

export default function PortfolioSection() {
  return (
    <section
  id="portfolio"
  className="py-12 px-4 bg-white dark:bg-gray-900 transition-colors duration-500"
>
  <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
    My Work
  </h2>
  <p className="text-center text-gray-600 dark:text-white max-w-2xl mx-auto">
    Here’s my custom-built eCommerce store template created using Next.js, Tailwind CSS, TypeScript, and Wix Studio. It&apos;s fully responsive, blazing fast, and designed with modern features to boost conversions.
  </p>


  <TopSales/>
       
    <Testomonials/>
  </section>
  

  
  );
}