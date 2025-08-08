import React from "react";

const Gallery = () => {
  const images = [
    "https://thangjamagro.com/wp-content/uploads/2023/01/world-environtmentd-day-tree-plantation.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaxS9s4nFBjmVfqe2watvF7dX-dXHwLSmmA&s",
    "https://ddc514qh7t05d.cloudfront.net/dA/48fc25904e335eb07b2a21b1dd949349/2400w/80q",
    "https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1x19719/uploads/media/2024/05/03/Trees-fc699f25bb6b9bb28b5aaa445ad9db7f.jpg?watermark=media%2F2024%2F05%2F03%2FbKash-eef1b5297ae2c382c864f27d6f039d00.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREU5kJfc3ZdNcjyR3u6oibDKflv4RjuPxFoA&s",
    "https://static.vecteezy.com/system/resources/thumbnails/035/312/964/small/ai-generated-people-planting-a-tree-in-the-ground-generative-ai-photo.jpg",
  ];

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-12">
          Event Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={src}
                alt={`Event`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
