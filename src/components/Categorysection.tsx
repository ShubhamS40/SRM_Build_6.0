import Link from 'next/link';
import React from 'react'

function Categorysection() {
    const categories = [
        {
          title: 'Rental Homes',
          link: '/rental-homes',
          icon: '🏠',
        },
        {
          title: 'Appliances',
          link: '/appliances',
          icon: '🛒',
        },
        {
          title: 'Domestic Help',
          link: '/domestic-help',
          icon: '🤝',
        },
        {
          title: 'Laundry',
          link: '/laundry',
          icon: '👕',
        },
        {
          title: 'Grocery Marketplace',
          link: '/grocery-marketplace',
          icon: '🛍️',
        },
      ];
  return (
    
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#5B0E2D] mb-6">
            Explore Our Categories
          </h2>
          <p className="text-gray-700 mb-8">
            Find the perfect service for your relocation needs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link href={category.link} key={category.title}>
                <div className="p-6 bg-white shadow-lg rounded-lg text-center cursor-pointer hover:bg-red-500 hover:text-white transition">
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

     

// Category List with Icons
        )}
  

export default Categorysection