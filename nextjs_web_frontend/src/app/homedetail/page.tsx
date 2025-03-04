// import FilterSidebar from '@/components/FilterSidebar'
"use client"
import RentalHomes from '@/components/Rentalhomes'
import React, { useState } from 'react'
import FilterBased from '@/components/FilterBased'

function page() {
    const [filters, setFilters] = useState({
        category: "",
        price: "",
        location: "",
      });
  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Left Side - Filters */}
      <FilterBased setFilters={setFilters} />

      {/* Right Side - Rental Homes */}
      <div className="md:col-span-3">
        <RentalHomes filters={filters} />
      </div>
    </div>
  )
}

export default page