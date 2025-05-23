"use client";

import { useState, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("https://formspree.io/f/mvgaydwn", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target as HTMLFormElement),
    });

    const data = await res.json();

    if (data.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send. Please try again.");
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="max-w-7xl mx-auto px-4 py-20 " id="contact"
    >
      <h2 className="text-4xl font-bold text-center text-green-600 mb-14">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700 font-medium dark:text-gray-300">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <ul className="text-gray-600 dark:text-gray-400 space-y-4 text-base">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-600" />
              <span>kamrul.ruet.171@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-600" />
              <span>+8801764199847</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5 w-full">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-green-500 cursor-pointer hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition duration-200"
          >
            Send Message
          </motion.button>
          {status && <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{status}</p>}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
