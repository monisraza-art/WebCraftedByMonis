const TermsPage = () => {
    return (
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen py-16 px-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>
  
          <p className="mb-6">
            Welcome to our website. By accessing or using this site, you agree to be bound by these terms and conditions. Please read them carefully.
          </p>
  
          <h2 className="text-2xl font-semibold mb-4">1. Use of Site</h2>
          <p className="mb-6">
            You may use our website for lawful purposes only. You agree not to use it in any way that violates any laws or regulations.
          </p>
  
          <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
          <p className="mb-6">
            All content on this website, including text, images, and code, is the property of this site owner unless otherwise stated. Unauthorized use is strictly prohibited.
          </p>
  
          <h2 className="text-2xl font-semibold mb-4">3. Purchases</h2>
          <p className="mb-6">
            All sales are final. Please review your order carefully before completing a purchase. Digital products are non-refundable unless otherwise stated.
          </p>
  
          <h2 className="text-2xl font-semibold mb-4">4. Changes to Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these terms at any time. Your continued use of the site after changes means you accept the updated terms.
          </p>
  
          <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
          <p className="mb-6">
            For any questions or concerns about these terms, feel free to contact us through our contact form or email.
          </p>
  
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-12 text-center">
            &copy; {new Date().getFullYear()} Craftedbymonis. All rights reserved.
          </p>
        </div>
      </div>
    );
  };
  
  export default TermsPage;
  