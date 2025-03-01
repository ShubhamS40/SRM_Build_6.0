"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-[#5B0E2D] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          RelocateEase
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#5B0E2D] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:relative bg-white md:bg-transparent left-0 w-full md:w-auto top-16 md:top-auto p-4 md:p-0`}
        >
          <li className="hover:text-red-500 transition">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-red-500 transition">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-red-500 transition">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-red-500 transition">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Signup & Login Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/signup">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
