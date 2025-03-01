"use client";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Get in Touch</h1>
        <p className="text-gray-700 text-lg">We’re here to help! Contact us for any queries or support.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition flex items-center justify-center space-x-2"
            >
              <FiSend />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <FiMail className="text-red-500 text-xl" />
              <span>support@relocateease.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiPhone className="text-red-500 text-xl" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiMapPin className="text-red-500 text-xl" />
              <span>New Delhi, India</span>
            </li>
          </ul>

          {/* Google Maps Embed */}
          <div className="mt-6">
            <iframe
              title="Google Map"
              className="w-full h-48 rounded-lg border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8393745018!2d77.06889796288518!3d28.527280343444033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dabafdafb21%3A0xe0e4ab58a1b4f89e!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1637739290649!5m2!1sen!2sus"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
