import React, { useState } from "react";

const FilterBased = ({ setFilters }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [bachelorsAllowed, setBachelorsAllowed] = useState("");

  const [showCategories, setShowCategories] = useState(true);
  const [showLocations, setShowLocations] = useState(true);

  // Handle Filter Change
  const applyFilters = () => {
    setFilters({
      category: selectedCategory,
      price: selectedPrice,
      location: selectedLocation,
      bachelorsAllowed: bachelorsAllowed,
    });
  };

  return (
    <div className="w-full md:w-64 bg-white border border-gray-200 p-4 rounded-lg shadow-md">
      {/* Categories Section */}
      <div className="mb-4">
        <h3
          className="text-lg font-bold text-gray-800 cursor-pointer flex justify-between items-center"
          onClick={() => setShowCategories(!showCategories)}
        >
          CATEGORIES
          <span>{showCategories ? "▲" : "▼"}</span>
        </h3>
        {showCategories && (
          <ul className="ml-3 mt-2 text-gray-700">
            <li
              className={`cursor-pointer py-1 px-2 rounded ${
                selectedCategory === "Rental Homes" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory("Rental Homes")}
            >
              Rental Homes (1,10,475)
            </li>
            <li
              className={`cursor-pointer py-1 px-2 rounded ${
                selectedCategory === "Home Appliances" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory("Home Appliances")}
            >
              Home Appliances (45,678)
            </li>
          </ul>
        )}
      </div>

      {/* Locations Section */}
      <div className="mb-4">
        <h3
          className="text-lg font-bold text-gray-800 cursor-pointer flex justify-between items-center"
          onClick={() => setShowLocations(!showLocations)}
        >
          LOCATIONS
          <span>{showLocations ? "▲" : "▼"}</span>
        </h3>
        {showLocations && (
          <ul className="ml-3 mt-2 text-gray-700">
            <li
              className={`cursor-pointer py-1 px-2 rounded ${
                selectedLocation === "New York" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedLocation("New York")}
            >
              New York (5,000)
            </li>
            <li
              className={`cursor-pointer py-1 px-2 rounded ${
                selectedLocation === "Brooklyn" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedLocation("Brooklyn")}
            >
              Brooklyn (3,000)
            </li>
          </ul>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800">PRICE</h3>
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="w-full p-2 border rounded-md mt-2"
        >
          <option value="">Any</option>
          <option value="Under $1000">Under $1000</option>
          <option value="$1000 - $2000">$1000 - $2000</option>
        </select>
      </div>

      {/* Bachelors Allowed */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800">BACHELORS ALLOWED</h3>
        <select
          value={bachelorsAllowed}
          onChange={(e) => setBachelorsAllowed(e.target.value)}
          className="w-full p-2 border rounded-md mt-2"
        >
          <option value="">Any</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={applyFilters}
        className="w-full bg-[#5B0E2D] text-white p-2 mt-3 rounded-lg hover:bg-[#FFD700] hover:text-[#5B0E2D] transition"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterBased;
