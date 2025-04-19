const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen py-16 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        <p className="mb-6">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-6">
          We may collect personal information such as your name, email address, and payment details when you make a purchase or fill out a form.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-6">
          We use your information to process transactions, send updates, respond to inquiries, and improve our website and services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
        <p className="mb-6">
          We do not sell, trade, or rent your personal information to others. We may share data with trusted third parties to help operate our website and business.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
        <p className="mb-6">
          Our site may use cookies to enhance your experience. You can choose to disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-6">
          You can request access to your personal data, ask for corrections, or request deletion at any time by contacting us.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
        <p className="mb-6">
          We may update this privacy policy as needed. Changes will be posted on this page with an updated revision date.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact us through our contact form or via email.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-12 text-center">
          &copy; {new Date().getFullYear()} CraftedByMonis. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
