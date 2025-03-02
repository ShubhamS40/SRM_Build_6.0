import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const rentalHomes = [
  {
    id: "luxury-apartment",
    title: "Luxury 2BHK Apartment",
    location: "New York",
    price: "$1200/month",
    image: "https://imgs.search.brave.com/_DgVglyhQhZJrhjMFZ_GxFKB0y2R0SdgcAVhlsMYtFY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/OTgyMjg0Ny9waG90/by9tb2Rlcm4tbGl2/aW5nLXJvb20tM2Qt/cmVuZGVyaW5nLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1v/VlhZVmMzSnNpeUxv/UGpnSkd3V25BODNU/cnBDaGZkc3JxWGhn/RmtDQkpRPQ",
    category: "Rental Homes",
  },
  {
    id: "luxury-apartment",
    title: "Cozy Studio Apartment",
    location: "Brooklyn",
    price: "$800/month",
    image: "https://imgs.search.brave.com/_DgVglyhQhZJrhjMFZ_GxFKB0y2R0SdgcAVhlsMYtFY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/OTgyMjg0Ny9waG90/by9tb2Rlcm4tbGl2/aW5nLXJvb20tM2Qt/cmVuZGVyaW5nLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1v/VlhZVmMzSnNpeUxv/UGpnSkd3V25BODNU/cnBDaGZkc3JxWGhn/RmtDQkpRPQ",
    category: "Rental Homes",
  },
  {
    id: "luxury-apartment",
    title: "Cozy Studio Apartment",
    location: "Brooklyn",
    price: "$800/month",
    image: "https://imgs.search.brave.com/_DgVglyhQhZJrhjMFZ_GxFKB0y2R0SdgcAVhlsMYtFY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/OTgyMjg0Ny9waG90/by9tb2Rlcm4tbGl2/aW5nLXJvb20tM2Qt/cmVuZGVyaW5nLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1v/VlhZVmMzSnNpeUxv/UGpnSkd3V25BODNU/cnBDaGZkc3JxWGhn/RmtDQkpRPQ",
    category: "Rental Homes",
  },
  {
    id: "luxury-apartment",
    title: "Cozy Studio Apartment",
    location: "Brooklyn",
    price: "$800/month",
    image: "https://imgs.search.brave.com/_DgVglyhQhZJrhjMFZ_GxFKB0y2R0SdgcAVhlsMYtFY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/OTgyMjg0Ny9waG90/by9tb2Rlcm4tbGl2/aW5nLXJvb20tM2Qt/cmVuZGVyaW5nLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1v/VlhZVmMzSnNpeUxv/UGpnSkd3V25BODNU/cnBDaGZkc3JxWGhn/RmtDQkpRPQ",
    category: "Rental Homes",
  }, {
    id: "luxury-apartment",
    title: "Cozy Studio Apartment",
    location: "Brooklyn",
    price: "$800/month",
    image: "https://imgs.search.brave.com/_DgVglyhQhZJrhjMFZ_GxFKB0y2R0SdgcAVhlsMYtFY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/OTgyMjg0Ny9waG90/by9tb2Rlcm4tbGl2/aW5nLXJvb20tM2Qt/cmVuZGVyaW5nLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1v/VlhZVmMzSnNpeUxv/UGpnSkd3V25BODNU/cnBDaGZkc3JxWGhn/RmtDQkpRPQ",
    category: "Rental Homes",
  }, {
    id: "luxury-apartment",
    title: "Cozy Studio Apartment",
    location: "Brooklyn",
    price: "$800/month",
    image: "https://imgs.search.brave.com/_DgVglyhQhZJrhjMFZ_GxFKB0y2R0SdgcAVhlsMYtFY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/OTgyMjg0Ny9waG90/by9tb2Rlcm4tbGl2/aW5nLXJvb20tM2Qt/cmVuZGVyaW5nLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1v/VlhZVmMzSnNpeUxv/UGpnSkd3V25BODNU/cnBDaGZkc3JxWGhn/RmtDQkpRPQ",
    category: "Rental Homes",
  }, {
    id: "luxury-apartment",
    title: "Cozy Studio Apartment",
    location: "Brooklyn",
    price: "$800/month",
    image: "https://imgs.search.brave.com/_DgVglyhQhZJrhjMFZ_GxFKB0y2R0SdgcAVhlsMYtFY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/OTgyMjg0Ny9waG90/by9tb2Rlcm4tbGl2/aW5nLXJvb20tM2Qt/cmVuZGVyaW5nLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1v/VlhZVmMzSnNpeUxv/UGpnSkd3V25BODNU/cnBDaGZkc3JxWGhn/RmtDQkpRPQ",
    category: "Rental Homes",
  }
];

const RentalHomes = ({ filters }) => {
  const router = useRouter();

  const handleViewDetails = (home) => {
    router.push(`/homedetail/${home.id}`);
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
        filteredHomes.map((home) => (
          <div
            key={home.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-red-300 hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="w-full h-56 relative">
              <Image src={home.image} alt={home.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-red-900">{home.title}</h3>
              <p className="text-sm text-gray-500">{home.location}</p>
              <p className="text-lg font-semibold text-red-700">{home.price}</p>
              <button
                onClick={() => handleViewDetails(home)}
                className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-800 transition"
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