"use client"
import { useEffect, useState } from "react";
import "../globals.css";


const topSalesData = [
  {
    name: "Modern Fashion eCommerce Store",
    image: "./productdetails.JPG",
    description:
      "Built with Next.js, TypeScript, and Tailwind CSS. Fully responsive with modern UX, dynamic filtering, and a sleek mobile-first design for fashion brands.",
  },
  {
    name: "Minimal Skincare Product Store",
    image: "./self.JPG",
    description:
      "Clean, soothing design for a skincare line. Includes product filters, CMS-based content, smooth transitions, and dark mode toggle.",
  },
  {
    name: "Home Decor Template Store",
    image: "./home.JPG",
    description:
      "Visually rich layout using Wix + custom Next.js integration. Optimized for browsing product categories with style.",
  },
  {
    name: "Tech Gadget Marketplace",
    image: "./tech.JPG",
    description:
      "High-performance store designed to sell gadgets. Dark UI with performance-focused features and lazy loading of product images.",
  },
  {
    name: "Car show room Landing pafe",
    image: "./cars.JPG",
    description:
      "Built for hype — bold typography, bold visuals. Made to convert sneakerheads with smooth UX, fast load, and mobile speed.",
  },
];

const TopSales = () => {

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
  
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl fade-up opacity-0 sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Top Sales
        </h2>

        <div className="space-y-20">
          {topSalesData.map((item, index) => (
            <div key={index} className="text-center">
              {/* Site Name */}
              <h3 className="text-2xl fade-up opacity-0 font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {item.name}
              </h3>

              {/* Screenshot */}
              <div
                onClick={() => setZoomedImage(item.image)}
                className="cursor-zoom-in fade-up opacity-0 w-[70%] mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Description */}
              <p className="mt-6 text-gray-600 opacity-0 fade-up dark:text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Zoomed Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl border border-white dark:border-gray-600"
          />
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default TopSales;
