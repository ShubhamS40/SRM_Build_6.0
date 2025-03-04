import React from "react";
import HomeInfo from "./HomeInfo";
import BookingForm from "./BookingForm";
import RelatedListings from "./RelatedListings";

const HomeDetail = () => {
  const home = {
    title: "Luxurious City Apartment",
    description:
      "Experience the ultimate city living in this modern apartment located in the heart of downtown. Equipped with state-of-the-art amenities, this space offers comfort and convenience with stunning city views.",
    image:
      "https://source.unsplash.com/800x400/?luxury-apartment",
    price: 200,
    serviceFee: 50,
    total: 250,
  };

  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Side - Home Details */}
      <div className="md:col-span-2">
        <HomeInfo home={home} />
        <RelatedListings />
      </div>

      {/* Right Side - Booking Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <BookingForm home={home} />
      </div>
    </div>
  );
};

export default HomeDetail;
