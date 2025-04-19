'use client';

import ContactForm from '../components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="p-20 bg-white dark:bg-gray-600 px-4 text-center">
      <h2 className="text-3xl font-semibold text-pink-500 mb-4">Let’s Talk 💬</h2>
      <p className="text-gray-600 dark:text-white mb-6">
        Ready to build something dope together? Shoot me a message!
      </p>
      
      <ContactForm />
    </section>
  );
}