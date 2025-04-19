'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image'; // Import the Image component
import "./globals.css";
import { useEffect } from 'react';


export default function HeroSection() {

 useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  return (
    <section className="flex  md:flex-row bg-white dark:bg-gray-800 flex-col  items-center  py-[11.3rem] w-full px-4 md:px-8 lg:px-16">
      {/* Image Placeholder */}
      <div className="relative opacity-0 fade-up w-60 h-60 rounded-full overflow-hidden shadow-md mb-8 md:mb-0 md:ml-39 order-first md:order-last">
        <Image
          src="/my-profile-pic.jpg" // Make sure this path is correct
          alt="Your Profile Picture"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content Area */}
      <div className="md:w-1/2 fade-up text-center md:text-left space-y-4">
        <h1 className="text-4xl opacity-0 fade-up md:text-5xl font-bold text-sky-600">
          Hey, I’m Monis 👋
        </h1>
        <p className=" opacity-0 text-2xl fade-up font-semibold dark:text-gray-100 text-gray-600">
        I craft bold, playful eCommerce stores that blend standout design, smart strategy, and a touch of shopping magic. 🚀
        </p>
        <p className='fade-up opacity-0 text-xl text-black dark:text-white pb-6'>
        I create high-performance eCommerce websites by combining Wix Studio and Next.js — giving you the best of both worlds. With Wix, you can easily update your content, products, and design without touching any code. Behind the scenes, Next.js powers the site with speed, SEO, and advanced features. This hybrid setup means your store is fast, secure, and scalable — while still being easy for you to manage anytime.
        </p>
        <Link
          href="portfolio"
          className="inline-flex opacity-0 fade-up items-center gap-2 bg-sky-500 text-white px-5 py-2 rounded-full shadow hover:bg-sky-600 transition"
        >
          See My Work <FaArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}