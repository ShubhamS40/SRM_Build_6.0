"use client";
import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">RelocateEase</h2>
          <p className="mt-3 text-sm">
            Your trusted platform for hassle-free relocation, rental homes, appliances, domestic help, and more.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com">
              <FiFacebook className="text-xl hover:text-red-500 transition" />
            </Link>
            <Link href="https://twitter.com">
              <FiTwitter className="text-xl hover:text-red-500 transition" />
            </Link>
            <Link href="https://instagram.com">
              <FiInstagram className="text-xl hover:text-red-500 transition" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <FiMail />
              <span>support@relocateease.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiPhone />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiMapPin />
              <span>New Delhi, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} RelocateEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
