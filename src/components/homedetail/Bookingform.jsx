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
    <div>
      <h3 className="text-xl font-bold mb-4">Book Your Stay</h3>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={bookingDetails.fullName}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={bookingDetails.email}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
      />
      <input
        type="date"
        name="checkIn"
        value={bookingDetails.checkIn}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
      />
      <input
        type="date"
        name="checkOut"
        value={bookingDetails.checkOut}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
      />

      <button
        onClick={handleBooking}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Secure Booking
      </button>
    </div>
  );
};

export default BookingForm;
