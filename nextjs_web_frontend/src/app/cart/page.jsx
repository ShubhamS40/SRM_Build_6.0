"use client";
import { useState } from "react";
import { FiTrash } from "react-icons/fi";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "The Temporary Roomie: A bestselling Romantic Comedy",
      price: 183,
      discount: 0,
      quantity: 1,
      image: "/images/book.jpg",
    },
  ]);

  const removeItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalMRP = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = cartItems.reduce((acc, item) => acc + item.discount, 0);
  const convenienceFee = 99;
  const totalAmount = totalMRP - discount + convenienceFee;

  const loadRazorpay = async () => {
    const res = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalAmount }),
    });

    const data = await res.json();
    if (!data.success) {
      alert("Payment failed. Please try again.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Add this in .env.local
      amount: data.order.amount,
      currency: "INR",
      name: "Your Store",
      description: "Order Payment",
      order_id: data.order.id,
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      theme: { color: "#ff0000" }, // Red theme
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
      {/* Cart Items Section */}
      <div className="flex-1 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
              <img src={item.image} alt={item.name} className="w-20 h-24 rounded-md object-cover" />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-red-500 font-semibold">₹{item.price}</p>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                <FiTrash size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Price Details Section */}
      <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold border-b pb-2">PRICE DETAILS ({cartItems.length} Items)</h2>
        <div className="flex justify-between mt-4">
          <p>Total MRP</p>
          <p>₹{totalMRP}</p>
        </div>
        <div className="flex justify-between text-green-600">
          <p>Discount on MRP</p>
          <p>-₹{discount || "0"}</p>
        </div>
        <div className="flex justify-between">
          <p>Convenience Fee</p>
          <p>₹{convenienceFee}</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-lg font-bold">
          <p>Total Amount</p>
          <p>₹{totalAmount}</p>
        </div>
        <button onClick={loadRazorpay} className="mt-4 w-full bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default Cart;
