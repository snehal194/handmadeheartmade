import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className="mt-3 text-xl font-semibold text-gray-800">
          {product.name}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Button */}
        <Link
          to={`/product/${product.id}`}
          className="mt-5 inline-flex items-center font-medium text-pink-600 transition hover:text-pink-700"
        >
          View Details
          <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;