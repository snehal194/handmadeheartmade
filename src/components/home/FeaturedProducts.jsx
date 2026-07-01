import products from "../../data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(
  (product) => product.featured
).slice(0,4);

  return (
    <section className="bg-[#FFF8F3] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <SectionTitle
          title="Featured Creations"
          subtitle="Discover our most loved handmade creations crafted with passion,
            care, and attention to every little detail."
          />
     

        {/* Products Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All */}
        <div className="mt-14 text-center">
          <Link
            to="/gallery"
            className="rounded-full bg-pink-500 px-8 py-3 font-semibold text-white transition hover:bg-pink-600"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;