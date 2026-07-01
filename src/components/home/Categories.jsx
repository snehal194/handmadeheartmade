import CategoryCard from "./CategoryCard";
import categories from "../../data/categories";
import SectionTitle from "../common/SectionTitle";

function Categories() {
  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Shop By Category" subtitle="Discover handmade embroidery crafted for every special occasion." />
      

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;