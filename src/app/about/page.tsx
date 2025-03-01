"use client";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-red-500 mb-4">About RelocateEase</h1>
          <p className="text-gray-700 text-lg">
            Moving to a new city can be overwhelming, from **finding a home** to **managing daily essentials**. 
            <strong> RelocateEase</strong> simplifies this process by offering a one-stop platform for **rental homes, home appliances, domestic help, ironing & laundry services, and groceries**.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            src="https://imgs.search.brave.com/3eHdA5IAKGbsFaMkYp5y4ikWYDNM7ZTPYDPjMkh9I-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWxv/LmNhL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzA1L2ltZ19p/bmZvLXZpc3VhbC1z/ZWN0aW9uXzAxLnBu/Zw" 
            alt="About Us" 
            width={500} 
            height={350} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-red-500 mb-6">How It Works?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">🔍 Search & Compare</h3>
            <p className="text-gray-600 mt-2">Browse rental homes, service providers, and groceries based on your location & budget.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">📅 Book Instantly</h3>
            <p className="text-gray-600 mt-2">Easily book homes, services, or appliances through our secure platform.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">🚀 Hassle-Free Moving</h3>
            <p className="text-gray-600 mt-2">Get trusted services, automated scheduling, and AI-powered recommendations.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">🏠 Verified Rental Listings</h3>
            <p className="text-gray-600 mt-2">Every home listed on our platform is verified and secure for tenants.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">🔧 Home Services</h3>
            <p className="text-gray-600 mt-2">Get rental appliances, maids, cooks, and cleaners at your convenience.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">💰 Affordable & Transparent</h3>
            <p className="text-gray-600 mt-2">We provide clear pricing with no hidden costs, making relocation easy.</p>
          </div>
        </div>
      </div>

      {/* Advanced Features Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">🤖 AI-Based Recommendations</h3>
            <p className="text-gray-600 mt-2">Personalized rental & service recommendations based on user preferences.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">📍 Location-Based Services</h3>
            <p className="text-gray-600 mt-2">Find the nearest and most affordable groceries, rentals, and services.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">🔐 Secure Transactions</h3>
            <p className="text-gray-600 mt-2">All payments are secure and handled through trusted gateways.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
