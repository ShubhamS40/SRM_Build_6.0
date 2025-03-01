"use client"
import { useParams } from "next/navigation";
import HomeInfo from "@/components/homedetail/Homeinfo";
import BookingForm from "@/components/homedetail/Bookingform";
import RelatedListings from "@/components/homedetail/Relatedlistning";

const homesData = [
  {
    id: "luxury-apartment",
    title: "Luxurious City Apartment",
    description:
      "Experience the ultimate city living in this modern apartment located in the heart of downtown. Equipped with state-of-the-art amenities, this space offers comfort and convenience with stunning city views.",
    image: "https://source.unsplash.com/800x400/?luxury-apartment",
    price: 200,
    serviceFee: 50,
    total: 250,
  },
  {
    id: "modern-loft",
    title: "Modern Downtown Loft",
    description:
      "A contemporary loft with open spaces, large windows, and stunning city skyline views.",
    image: "https://source.unsplash.com/800x400/?loft",
    price: 180,
    serviceFee: 40,
    total: 220,
  },
];

const HomeDetailPage = () => {
  const params = useParams(); // ✅ Use useParams() instead of useRouter()
  const { slug } = params; // Get the slug from the URL

  // Find the home based on the slug
  const home = homesData.find((h) => h.id === slug);

  if (!home) {
    return <h2 className="text-center text-2xl mt-10">Home Not Found</h2>;
  }

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

export default HomeDetailPage;
