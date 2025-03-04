"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ firstName: string; lastName: string } | null>(null);
  const [logoutTrigger, setLogoutTrigger] = useState(false);
  const router = useRouter();

  // Update user from localStorage
  const updateUser = () => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }
  };

  useEffect(() => {
    updateUser();
  }, [logoutTrigger]);

  useEffect(() => {
    window.addEventListener("storage", updateUser);
    return () => window.removeEventListener("storage", updateUser);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setLogoutTrigger((prev) => !prev);
  };

  return (
    <nav className="bg-white text-[#5B0E2D] p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold flex items-center gap-2">
          <img
            src="https://hscepnsxrecslvjofyjh.supabase.co/storage/v1/object/public/srmpyq_paper//L1go.png?width=80&height=80&quality=80"
            alt="Logo"
            width={250}
            height={250}
            className="object-contain"
            />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#5B0E2D] text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navbar Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-8 absolute md:relative bg-white md:bg-transparent left-0 w-full md:w-auto top-16 md:top-auto p-4 md:p-0 text-lg font-semibold`}
        >
          <li className="hover:text-red-500 transition duration-300 hover:scale-105">
            <Link href="/">🏠 Home</Link>
          </li>
          <li className="hover:text-red-500 transition duration-300 hover:scale-105">
            <Link href="/about">📖 About</Link>
          </li>
          <li className="hover:text-red-500 transition duration-300 hover:scale-105">
            <Link href="/contact">📞 Contact</Link>
          </li>
        </ul>

        {/* Right-side Icons & Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Cart Icon */}
          <Link href="/cart">
            <FiShoppingCart className="text-red-500 text-3xl cursor-pointer hover:scale-110 transition" />
          </Link>

          {user ? (
            <div className="flex items-center space-x-5">
              <span className="text-lg text-[#5B0E2D] font-bold">
                {user.firstName.toUpperCase()}
              </span>
              <button
                className="bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/signup">
                <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-red-600 transition">
                  Sign Up
                </button>
              </Link>
              <Link href="/login">
                <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-red-600 transition">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
