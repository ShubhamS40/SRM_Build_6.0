import React from "react";

const relatedHomes = [
  {
    title: "Modern Downtown Loft",
    price: "$180/night",
    image: "https://source.unsplash.com/300x200/?loft",
  },
  {
    title: "Beachfront Villa",
    price: "$300/night",
    image: "https://source.unsplash.com/300x200/?villa",
  },
];

const RelatedListings = () => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold">Related Listings</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
        {relatedHomes.map((home, index) => (
          <div key={index} className="bg-white p-3 shadow-lg rounded-lg">
            <img src={"https://imgs.search.brave.com/-YDmEm_Sp7kPPM9PxMbHIWpbHT7lCxEFWsHip0U5KJ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/Mzc2Mjc0MS9waG90/by9tb2Rlcm4tbGl2/aW5nLXJvb20taW50/ZXJpb3ItM2QtcmVu/ZGVyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pWjU2MVpJ/WE90UFlHU3pxbEtV/bkxybGlvcnJlT1lW/ejFwenU4V0ptcm5j/PQ"} alt={home.title} className="w-full h-40 object-cover rounded" />
            <h4 className="text-lg font-semibold mt-2">{home.title}</h4>
            <p className="text-gray-700">{home.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedListings;
