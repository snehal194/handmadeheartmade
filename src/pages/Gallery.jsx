import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import gallery from '../data/gallery';

const Gallery = () => {
  const[filter, setFilter] = useState(gallery);
  const[activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Wedding",
    "Other Creation",
    "Earrings",
    "Crochet",
    "Wooden",
    "Cloth"
  ];

  const handleFilter = (category) => {
    setActiveCategory(category);
    if(category === "All"){
        setFilter(gallery);
    }else{
      const result = gallery.filter(
        (item) => item.category === category
      );
      setFilter(result);
    }
    
  }

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Our Gallery"
          subtitle="Explore our handmade embroidery, crochet creations, and personalized gifts."
        />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-4 mt-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => handleFilter(item)}
              className={`rounded-full px-6 py-2 transition duration-300 ${
                activeCategory === item
                  ? "bg-pink-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-pink-500 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {filter.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.category}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-sm">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Gallery
