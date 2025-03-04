import React from "react";

const HomeInfo = ({ home }) => {
  return (
    <div>
      {/* Home Image */}
      <img src={"https://imgs.search.brave.com/-YDmEm_Sp7kPPM9PxMbHIWpbHT7lCxEFWsHip0U5KJ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/Mzc2Mjc0MS9waG90/by9tb2Rlcm4tbGl2/aW5nLXJvb20taW50/ZXJpb3ItM2QtcmVu/ZGVyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1pWjU2MVpJ/WE90UFlHU3pxbEtV/bkxybGlvcnJlT1lW/ejFwenU4V0ptcm5j/PQ"} alt={home.title} className="w-full h-64 object-cover rounded-lg shadow-md" />

      {/* Home Title & Description */}
      <h2 className="text-2xl font-bold mt-4">{home.title}</h2>
      <p className="text-gray-600 mt-2">{home.description}</p>

      {/* Pricing Details */}
      <div className="bg-gray-100 p-4 mt-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Pricing Details</h3>
        <p>Base Price: ${home.price}/night</p>
        <p>Service Fee: ${home.serviceFee}</p>
        <p className="font-bold">Total: ${home.total}/night</p>
      </div>
    </div>
  );
};

export default HomeInfo;
