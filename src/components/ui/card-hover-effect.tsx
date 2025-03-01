"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiHome, FiShoppingCart, FiUserCheck, FiTruck, FiShoppingBag } from "react-icons/fi";

const items = [
    {
      title: "Rental Homes",
      description: "Find affordable and verified rental homes in prime locations.",
      link: "/rental-homes",
      icon: <FiHome className="text-red-500 text-5xl" />,
    },
    {
      title: "Appliances",
      description: "Rent essential home appliances at budget-friendly prices.",
      link: "/appliances",
      icon: <FiShoppingCart className="text-red-500 text-5xl" />,
    },
    {
      title: "Domestic Help",
      description: "Hire trusted and skilled domestic helpers for daily tasks.",
      link: "/domestic-help",
      icon: <FiUserCheck className="text-red-500 text-5xl" />,
    },
    {
      title: "Laundry",
      description: "Convenient laundry and ironing services at your doorstep.",
      link: "/laundry",
      icon: <FiTruck className="text-red-500 text-5xl" />,
    },
    {
      title: "Grocery Marketplace",
      description: "Get fresh groceries with discounts and doorstep delivery.",
      link: "/grocery-marketplace",
      icon: <FiShoppingBag className="text-red-500 text-5xl" />,
    },
    
  ];

export const HoverEffect = ({ className }: { className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-4 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#FFD700]/20 dark:bg-[#5B0E2D]/80 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex flex-col items-center text-center">
              {item.icon}
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div className="mt-6">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
                  {item.title === "Grocery Marketplace" ? "Shop Now" : "Book Now"}
                </button>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

// **Updated Card Component**
export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-white border border-gray-300 shadow-lg transition-transform transform group-hover:scale-105 relative z-20",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};

// **Updated Title & Description Colors**
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h4 className={cn("text-gray-900 font-bold text-lg tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <p className={cn("mt-2 text-gray-600 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};

export default HoverEffect;
