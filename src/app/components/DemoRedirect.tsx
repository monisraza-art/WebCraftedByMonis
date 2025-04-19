const DemoRedirect = () => {
    return (
      <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Check Out My Live eCommerce Demo
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Experience the power of a custom-built Next.js + Wix Studio store, designed for speed, conversion, and mobile excellence.
          </p>
          <a
            href="https://nextjs-wix-ecommerce-demo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-xl transition duration-300"
          >
            View Demo Website
          </a>
        </div>
      </section>
    );
  };
  
  export default DemoRedirect;
  