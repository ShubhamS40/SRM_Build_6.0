"use client";
import { FiHome, FiShoppingCart, FiUserCheck, FiTruck, FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

type Offer = {
  title: string;
  description: string;
  price: string;
  image: string;
  link: string;
};

const offers: Offer[] = [
  {
    title: "Rental Homes",
    description: "Spacious 2BHK apartments available for rent.",
    price: "Starts from ₹8,000/month",
    image: "https://imgs.search.brave.com/g3pj_OkZyb__Ost233JOOi-cYxfzsjVmhfCWYA31t8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXZhaWwuY28vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDYv/SG93LXRvLVRha2Ut/UmVudGFsLVBob3Rv/cy1UaGF0LVJlbnQt/WW91ci1Vbml0LUZh/c3QtMTAyNHg2ODMu/anBn", // Replace with actual image path
    link: "/rental-homes",
  },
  {
    title: "Appliances for Rent",
    description: "Rent refrigerators, washing machines, and more.",
    price: "Starts from ₹499/month",
    image: "https://imgs.search.brave.com/wUP79V5Xetp0rqUK60iEqtqvHvlPjnpKY77ccywHp0c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9raXRjaGVuLWFw/cGxpYW5jZXMtaXNv/bGF0ZWQtd2hpdGUt/YmFja2dyb3VuZF82/MjE5NTUtNDE1NTEu/anBnP3NlbXQ9YWlz/X2h5YnJpZA", // Replace with actual image path
    link: "/appliances",
  },
  {
    title: "Domestic Help",
    description: "Hire trusted and verified maids, cooks, and cleaners.",
    price: "Starts from ₹2,000/month",
    image: "https://imgs.search.brave.com/FZAcyahlqQs_fC1-WkwTIo4AwFVDeC77fM11v9klq68/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yaXZl/dGVyY29uc3VsdGlu/Zy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDYvNi1z/aWducy15b3UtbWF5/LW5lZWQtdG8taGly/ZS1kb21lc3RpYy1z/dGFmZi5qcGc", // Replace with actual image path
    link: "/domestic-help",
  },
  {
    title: "Laundry Services",
    description: "Affordable laundry & ironing services near you.",
    price: "Starts from ₹50/load",
    image: "https://imgs.search.brave.com/H5wuTtDINQ1-nsYiY-nLR5wKGN4e827g_XLfb3agmcI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzUwLzAwLzQ5/LzM2MF9GXzM1MDAw/NDk0MV9WRzV4THpz/YllSTnM4cW9ZMXBp/S2djUEJtRkt0aGE3/Mi5qcGc", // Replace with actual image path
    link: "/laundry",
  },
  {
    title: "Grocery Marketplace",
    description: "Get fresh groceries delivered at discounted prices.",
    price: "Up to 20% OFF",
    image: "https://imgs.search.brave.com/HisQmC-1B1PCrD5dzyl6WUltVKsZQj4AgVBg5irZX2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/NS8xNy8xNC8xNi9m/cnVpdC0zNDA4Njgz/XzY0MC5qcGc", // Replace with actual image path
    link: "/grocery-marketplace",
  },
];

const TopOffers = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-8">🔥 Top Offers 🔥</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <OfferCard key={index} offer={offer} />
        ))}
      </div>
    </div>
  );
};

const OfferCard = ({ offer }: { offer: Offer }) => {
  return (
    <Link href={offer.link}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center border border-gray-200 hover:border-red-500 transition transform hover:scale-105">
        {/* Offer Image */}
        <div className="relative w-full h-48">
          <Image
            src={offer.image}
            alt={offer.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Offer Details */}
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">{offer.title}</h3>
          <p className="text-gray-600 mt-1">{offer.description}</p>
          <p className="text-lg font-bold text-red-500 mt-2">{offer.price}</p>

          {/* Book Now Button */}
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default TopOffers;
