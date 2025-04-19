'use client';
import { useEffect, useState } from 'react';
import "../globals.css";

export default function Services() {
  const services = [
    {
      title: "Custom Store Builds",
      desc: "From scratch or platform — I design stores that feel smooth & sell fast.",
      more: [
        `
  I build custom-styled eCommerce stores for business owners and entrepreneurs who are ready to take their shop from the street to the screen.
  Imagine your store being open 24/7/365—no closing hours, no missed sales, just happy customers browsing and buying whenever they want, from wherever they are.`,
  `Your products will shine with their own spotlight—no need for a salesperson! Each item tells its own story with photos, details, and even reviews from real customers.
  Got discounts? Low stock? Out of stock? No problem. Shoppers can see everything in real time, get notified when things are back, and filter through categories or prices so they can find exactly what they’re looking for—without wasting time scrolling forever.
  They can also leave reviews, compliments, and comments on the products to help others get inspired and feel confident about buying.`,
 `Whether your business is all about fashion, beauty, electronics, furniture, pets, skincare, tech, handmade items—or anything in between—if you sell physical products, I can build a store that fits your vibe and helps your business grow online.
  Let’s turn your store into something that works for you 24/7 and makes your customers say, "Wow, I need this!"
`,

        
      ],
      emoji: "🛒",
    },
    {
      title: "Wix & Next.js Magic",
      desc: "Blending simplicity and power — I make beautiful hybrid eComm sites.",
      more: [
        '✨ Combining visual design freedom of Wix with the scalability of Next.js — best of both worlds.',
        `Most Wix and Shopify websites look nice—but when it comes to speed, scalability, and advanced functionality, they often fall short. They’re built for simplicity, not performance. Pages load slower, SEO can struggle, and custom features are limited to what plugins allow. That’s where the magic of combining Wix + Next.js comes in. With Wix, you still get the user-friendly, drag-and-drop editing your clients love—but Next.js supercharges the frontend with lightning-fast speed, better SEO, dynamic features, and full control over every pixel and interaction. You’re not stuck with cookie-cutter limitations anymore—you get the flexibility of code with the ease of design. It’s the best of both worlds: the simplicity of Wix, powered by the performance and freedom of Next.js.`,
     
      ],
      emoji: "✨",
    },
    {
      title: "Conversion Optimization",
      desc: "Turn clicks into sales with chill UX + clever strategy.",
      more: [
        '🛒 Custom store builds from scratch or on a platform of your choice.',
        '✅ Custom layout design — no boring templates, fully branded and unique.',
        '🚀 Built with Wix Studio or Next.js — depending on your goals and scale.',
        '📱 Mobile-first responsive design — smooth experience on any device.',
        '⚡ Fast load times and SEO-friendly structure for better Google ranking.',
        '🎯 Built-in product filtering, search, dark mode, and smooth transitions.',
        '📝 Easy content management — update images, prices, and text without dev help.',
        '💡 Conversion-optimized layouts and CTA placement for more sales.',
        '📩 Optional blog, contact form, or booking system — whatever you need.',
        '🔓 100% ownership — your site, your brand, no monthly platform lock-in.',
        '🔓 100% ownership — your site, your brand, no monthly platform lock-in.',
      ],
      emoji: "📈",
    },
  ];

  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggleOpen = (index: number) => {
    setOpenIndices((prevIndices) => {
      const newIndices = new Set(prevIndices);
      if (newIndices.has(index)) {
        newIndices.delete(index);
      } else {
        newIndices.add(index);
      }
      return newIndices;
    });
  };

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

    document.querySelectorAll('.service-card.open .fade-up-item').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [openIndices]);

  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-gray-800 w-full flex flex-col items-center justify-center px-4"
    >
      <h2 className="text-4xl fade-up font-semibold text-center text-amber-500 mb-8">
        What I Do 🎯
      </h2>

      <div className="flex  fade-up flex-col gap-4 w-full max-w-screen-md">
        {services.map((item, i) => (
          <div
            key={i}
            className={`bg-white fade-up dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl hover:shadow-2xl px-6 py-4 transition-all duration-300 overflow-hidden ${openIndices.has(i) ? 'service-card open' : 'service-card'}`}
          >
            <div className="text-5xl fade-up">{item.emoji}</div>
            <h3 className="text-2xl fade-up font-bold text-black dark:text-white  mt-2">{item.title}</h3>
            <p className="font-semibold fade-up text-lg text-black dark:text-white mt-1">
              {item.desc}
            </p>

            <button
              className="text-blue-600 fade-up hover:underline mt-2 text-lg"
              onClick={() => toggleOpen(i)}
            >
              {openIndices.has(i) ? 'Less' : 'More'}
            </button>

            <div
              className={`transition-all fade-up duration-500 ease-in-out mt-2 text-black dark:text-white text-md ${
                openIndices.has(i) ? 'max-h-[2020px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <ul className="space-y-4 mt-4 text-md text-black dark:text-white">
                {Array.isArray(item.more) &&
                  item.more.map((point, idx) => (
                    <li
                      key={idx}
                      className="fade-up-item text-lg opacity-0 translate-y-6 transition-all duration-700"
                    >
                      {point}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}