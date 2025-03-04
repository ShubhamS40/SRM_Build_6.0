import React, { useState } from "react";

const BookingForm = ({ home }) => {
  const [bookingDetails, setBookingDetails] = useState({
    fullName: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    alert(`Booking confirmed for ${bookingDetails.fullName}!`);
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-red-300">
      <h3 className="text-xl font-bold text-red-900 mb-4">Book Your Stay</h3>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={bookingDetails.fullName}
        onChange={handleChange}
        className="w-full p-2 border border-red-400 rounded mb-3 focus:ring-2 focus:ring-red-600"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={bookingDetails.email}
        onChange={handleChange}
        className="w-full p-2 border border-red-400 rounded mb-3 focus:ring-2 focus:ring-red-600"
      />
      <input
        type="date"
        name="checkIn"
        value={bookingDetails.checkIn}
        onChange={handleChange}
        className="w-full p-2 border border-red-400 rounded mb-3 focus:ring-2 focus:ring-red-600"
      />
      <input
        type="date"
        name="checkOut"
        value={bookingDetails.checkOut}
        onChange={handleChange}
        className="w-full p-2 border border-red-400 rounded mb-3 focus:ring-2 focus:ring-red-600"
      />

      <button
        onClick={handleBooking}
        className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-800 transition"
      >
        Secure Booking
      </button>
    </div>
  );
};

export default BookingForm;
