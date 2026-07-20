import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import products from '../data/products'
import SectionTitle from '../components/common/SectionTitle';

const Products = () => {
  
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [priceRange, setPriceRange] = useState("");
        const categories = [
      "All",
      "Wedding",
      "Crochet",
      "Nature",
      "Cloth",
      "Wooden",
    ];
    const filteredProducts = selectedCategory === "All" ? products : products.filter(
        (product) => product.category === selectedCategory
      );
  return (
    <section className="bg-[#FFF8F3] py-20 mx-auto flex max-w-7xl gap-10 px-6">
      <div className="w-64 rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-bold">Categories</h2>

          {categories.map((category) => (
            <button
  key={category}
  onClick={() => setSelectedCategory(category)}
  className={`mb-3 block w-full rounded-lg px-4 py-2 text-left transition ${
    selectedCategory === category
      ? "bg-pink-500 text-white"
      : "bg-gray-100 hover:bg-pink-100"
  }`}
>
  {category}

  <span className="ml-2">
    (
    {category === "All"
      ? products.length
      : products.filter((product) => product.category === category).length}
    )
  </span>
</button>
          ))}
        </div>
  {/* Products */}
  <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

    {filteredProducts.map((product) => (

      <div
        key={product.id}
        className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
      >

        <img
          src={product.images[0]}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="p-5">

          <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
            {product.category}
          </span>

          <h3 className="mt-3 text-xl font-semibold">
            {product.name}
          </h3>

          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>

          <p className="mt-3 text-lg font-bold text-pink-600">
            ₹ {product.price}
          </p>

          <Link
            to={`/product/${product.id}`}
            className="mt-4 inline-block text-pink-600 font-medium"
          >
            View Details →
          </Link>

        </div>

      </div>

    ))}

  </div>
    </section>
  )
}

export default Products
