"use client"; // This ensures `usePathname` works

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const NavbarWrapper = () => {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/splashscreen"]; // Add any routes where navbar should be hidden

  if (hideNavbarRoutes.includes(pathname)) return null; // Don't render Navbar

  return <Navbar />;
};

export default NavbarWrapper;
