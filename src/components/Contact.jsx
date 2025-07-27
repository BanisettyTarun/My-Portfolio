import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const EMAILJS_SERVICE_ID = 'service_9q9u1gp';
  const EMAILJS_TEMPLATE_ID = 'template_wxgfd97';
  const EMAILJS_PUBLIC_KEY = '-a6uN6cK6efiV57CB';

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current,
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      setSent(true);
      setLoading(false);
      form.current.reset();

      // Hide message after 4 seconds
      setTimeout(() => setSent(false), 4000);
    }, () => {
      setLoading(false);
      alert('Failed to send message.');
    });
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-16 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 text-center">Contact Me</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-xl p-8 flex flex-col gap-6 bg-gray-900/60 backdrop-blur-md border border-gray-700 shadow-lg"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Name"
            required
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-900 text-white"
          />
          <input
            name="user_email"
            type="email"
            placeholder="Email"
            required
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-900 text-white"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-900 text-white"
            rows={5}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="relative px-8 py-3 rounded-lg font-semibold border-2 border-blue-400 text-white overflow-hidden group transition-all duration-700 bg-transparent hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                {loading ? 'Sending...' : 'Send Message'}
                <div className="relative">
                  <FaEnvelope className="text-lg transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                </div>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-700 transform scale-y-0 group-hover:scale-y-100 group-hover:opacity-100 opacity-0 origin-bottom z-0 rounded-lg"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></span>
            </button>
          </div>

          {sent && (
            <p className="text-green-400 font-medium text-center">Message sent! Thank you.</p>
          )}
        </form>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 text-lg text-blue-400">
            <FaEnvelope /> banisettytarun@gmail.com
          </div>
          <div className="flex items-center gap-2 text-lg text-green-400">
            <FaPhone /> +91 9550436947
          </div>
        </div>
      </motion.div>
    </section>
  );
}
