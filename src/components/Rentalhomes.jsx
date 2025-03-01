import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const rentalHomes = [
  {
    title: "Luxury 2BHK Apartment",
    location: "New York",
    price: "$1200/month",
    image: "https://imgs.search.brave.com/bRiQCpCipRij4y34J9a8nVAukZkXQqeBx2HzJLi85rY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/NTkxMTY1L3Bob3Rv/L25ldy1raXRjaGVu/LWluLW1vZGVybi1s/dXh1cnktaG9tZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZVJKWkhDRHhBUkwx/ald0bGtzSXZyUTNv/cHJNLVc2N3FTLTNh/alZoOVBKUT0",
    category: "Rental Homes",
  },
  {
    title: "Cozy Studio Apartment",
    location: "Brooklyn",
    price: "$800/month",
    image: "https://imgs.search.brave.com/bRiQCpCipRij4y34J9a8nVAukZkXQqeBx2HzJLi85rY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/NTkxMTY1L3Bob3Rv/L25ldy1raXRjaGVu/LWluLW1vZGVybi1s/dXh1cnktaG9tZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZVJKWkhDRHhBUkwx/ald0bGtzSXZyUTNv/cHJNLVc2N3FTLTNh/alZoOVBKUT0",
    category: "Rental Homes",
  },
  {
    title: "Spacious Family Home",
    location: "Los Angeles",
    price: "$2000/month",
    image: "https://imgs.search.brave.com/bRiQCpCipRij4y34J9a8nVAukZkXQqeBx2HzJLi85rY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/NTkxMTY1L3Bob3Rv/L25ldy1raXRjaGVu/LWluLW1vZGVybi1s/dXh1cnktaG9tZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZVJKWkhDRHhBUkwx/ald0bGtzSXZyUTNv/cHJNLVc2N3FTLTNh/alZoOVBKUT0",
    category: "Rental Homes",
  },
  {
    title: "Spacious Family Home",
    location: "Los Angeles",
    price: "$2000/month",
    image: "https://imgs.search.brave.com/bRiQCpCipRij4y34J9a8nVAukZkXQqeBx2HzJLi85rY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/NTkxMTY1L3Bob3Rv/L25ldy1raXRjaGVu/LWluLW1vZGVybi1s/dXh1cnktaG9tZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZVJKWkhDRHhBUkwx/ald0bGtzSXZyUTNv/cHJNLVc2N3FTLTNh/alZoOVBKUT0",
    category: "Rental Homes",
  },
  {
    title: "Spacious Family Home",
    location: "Los Angeles",
    price: "$2000/month",
    image: "https://imgs.search.brave.com/bRiQCpCipRij4y34J9a8nVAukZkXQqeBx2HzJLi85rY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/NTkxMTY1L3Bob3Rv/L25ldy1raXRjaGVu/LWluLW1vZGVybi1s/dXh1cnktaG9tZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZVJKWkhDRHhBUkwx/ald0bGtzSXZyUTNv/cHJNLVc2N3FTLTNh/alZoOVBKUT0",
    category: "Rental Homes",
  },
  {
    title: "Spacious Family Home",
    location: "Los Angeles",
    price: "$2000/month",
    image: "https://imgs.search.brave.com/bRiQCpCipRij4y34J9a8nVAukZkXQqeBx2HzJLi85rY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/NTkxMTY1L3Bob3Rv/L25ldy1raXRjaGVu/LWluLW1vZGVybi1s/dXh1cnktaG9tZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZVJKWkhDRHhBUkwx/ald0bGtzSXZyUTNv/cHJNLVc2N3FTLTNh/alZoOVBKUT0",
    category: "Rental Homes",
  },
  {
    title: "Spacious Family Home",
    location: "Los Angeles",
    price: "$2000/month",
    image: "https://imgs.search.brave.com/bRiQCpCipRij4y34J9a8nVAukZkXQqeBx2HzJLi85rY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/NTkxMTY1L3Bob3Rv/L25ldy1raXRjaGVu/LWluLW1vZGVybi1s/dXh1cnktaG9tZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZVJKWkhDRHhBUkwx/ald0bGtzSXZyUTNv/cHJNLVc2N3FTLTNh/alZoOVBKUT0",
    category: "Rental Homes",
  },
  {
    title: "Spacious Family Home",
    location: "Los Angeles",
    price: "$2000/month",
    image: "https://imgs.search.brave.com/bRiQCpCipRij4y34J9a8nVAukZkXQqeBx2HzJLi85rY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/NTkxMTY1L3Bob3Rv/L25ldy1raXRjaGVu/LWluLW1vZGVybi1s/dXh1cnktaG9tZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZVJKWkhDRHhBUkwx/ald0bGtzSXZyUTNv/cHJNLVc2N3FTLTNh/alZoOVBKUT0",
    category: "Rental Homes",
  },
  
  

];

const RentalHomes = ({ filters }) => {
  const router = useRouter(); // Initialize router for navigation

  const handleViewDetails = (home) => {
    router.push(`/homedetail?title=${encodeURIComponent(home.title)}`);
  };

  const filteredHomes = rentalHomes.filter((home) => {
    return (
      (!filters.category || home.category === filters.category) &&
      (!filters.price || home.price.includes(filters.price)) &&
      (!filters.location || home.location === filters.location)
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredHomes.length > 0 ? (
        filteredHomes.map((home, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition transform hover:scale-105"
          >
            {/* Image Section */}
            <div className="w-full h-56 relative">
              <Image src={home.image} alt={home.title} layout="fill" objectFit="cover" />
            </div>

            {/* Details Section */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900">{home.title}</h3>
              <p className="text-sm text-gray-500">{home.location}</p>
              <p className="text-lg font-semibold text-[#5B0E2D]">{home.price}</p>

              {/* View More Details Button */}
              <button
                onClick={() => handleViewDetails(home)}
                className="mt-4 w-full bg-[#FFD700] text-[#5B0E2D] px-4 py-2 rounded-lg font-semibold hover:bg-[#5B0E2D] hover:text-white transition"
              >
                View More Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-700 col-span-full text-center text-lg">
          No homes found matching your criteria.
        </p>
      )}
    </div>
  );
};

export default RentalHomes;
