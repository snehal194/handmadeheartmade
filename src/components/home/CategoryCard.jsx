function CategoryCard({ category }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group cursor-pointer">

      <img
        src={category.image}
        alt={category.title}
        className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-center">
          {category.title}
        </h3>
      </div>

    </div>
  );
}

export default CategoryCard;