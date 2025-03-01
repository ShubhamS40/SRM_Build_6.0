import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

function HeroSection() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center text-center px-6 py-20 bg-white">
        {/* Hero Title */}
        <h1 className="text-6xl font-bold text-[#201F1C] mb-6">
          Hassle-Free Relocation Starts Here
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          Find <strong>affordable rental homes</strong>, <strong>home appliances for rent</strong>,{" "}
          <strong>trusted domestic services</strong>, <strong>ironing & laundry solutions</strong>, and{" "}
          <strong>grocery marketplaces</strong> — all in one platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-red-600 transition">
            Get Started
          </button>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-red-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default HeroSection;
