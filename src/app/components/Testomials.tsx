"use client";
import { useEffect } from "react";
import "../globals.css";
 

export default function Testomonials() {

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
        <section id="testimonials" className="py-12 bg-gray-50 dark:bg-gray-900 px-4">
  <h2 className="text-3xl fade-up opacity-0 font-bold text-center text-gray-800 dark:text-white mb-8">What My Clients Say</h2>

  <div className="grid fade-up opacity-0 gap-8 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-3">
    
    {/* Testimonial 1 */}
    <div className="bg-white fade-up opacity-0 dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        “I needed a clean, fast eCommerce site for my clothing brand. Monis totally nailed it! My customers love the smooth UX.”
      </p>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        — <span className="font-semibold text-gray-800 dark:text-gray-200">Alex M.</span>, Fashion Brand Owner
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white fade-up opacity-0 dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        “The filters and search features work perfectly. Exactly what I needed for my skincare product launch site.”
      </p>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        — <span className="font-semibold text-gray-800 dark:text-gray-200">Sarah L.</span>, Skincare Entrepreneur
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white fade-up opacity-0 dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        “Dark mode, mobile responsiveness, and speed? This guy knows how to make a modern website that *sells*.”
      </p>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        — <span className="font-semibold text-gray-800 dark:text-gray-200">Daniel K.</span>, Digital Product Seller
      </div>
    </div>

    {/* Testimonial 4 */}
    <div className="bg-white fade-up opacity-0 dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        “I didn’t know anything about web design. Monis handled everything and delivered a site that looks like a top agency did it.”
      </p>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        — <span className="font-semibold text-gray-800 dark:text-gray-200">Nora J.</span>, Local Business Owner
      </div>
    </div>

    {/* Testimonial 5 */}
    <div className="bg-white fade-up opacity-0 dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        “I asked for a professional store that loads fast and ranks well on Google. Monis delivered — simple as that.”
      </p>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        — <span className="font-semibold text-gray-800 dark:text-gray-200">Kevin R.</span>, Shopify Dropshipper
      </div>
    </div>

  </div>
</section>

    )
}