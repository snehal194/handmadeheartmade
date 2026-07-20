import { useState,useEffect } from 'react';
import { useParams ,Link} from 'react-router-dom'
import products from '../data/products';
import { FaWhatsapp, FaInstagram  } from "react-icons/fa";

const ProductDetails = () => {
    const{id} = useParams();
    const product = products.find(
        (item) => item.id === Number(id)
    ); 
    const [selectedImage, setSelectedImage] = useState( product?.images?.[0] || null);
    useEffect(() => {
      if (product?.images?.length) {
        setSelectedImage(product.images[0]);
      }
    }, [product]);

    if (!product) {
      return (
        <h2 className="text-center py-20">
          Product not found.
        </h2>
      );
    }

    const relatedProducts = products.filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    );

  return (
    <div>


      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <img src={selectedImage} alt={product.name} className="h-[550px] w-full rounded-3xl object-cover shadow-xl"/>
          <div className="mt-4 flex gap-3">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name}-${index}`}
                onClick={() => setSelectedImage(image)}
                className="h-20 w-20 cursor-pointer rounded-lg border object-cover"
              />
            ))}
          </div>
        </div>
        <div>
          <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
            {product.category}
          </span>

          <h1 className="mt-3 text-4xl font-bold text-gray-800">
            {product.name}
          </h1>
          <p className="mt-2 text-pink-500 font-medium">✨ Handmade with Love</p>
          <p className="mt-2 text-gray-600">
            {product.description}
          </p>
          <p className="mt-5 text-3xl font-bold text-pink-600">
            ₹ {product.price}
          </p>
          <div className="mt-6 rounded-xl bg-pink-50 p-4">
            <h3 className="font-semibold">
                Delivery
            </h3>

            <p className="text-gray-600">
                {product.delivery}
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold">
                Materials Used
            </h3>

            <ul className="mt-3 space-y-2">
                {product.materials.map((item,index)=>(
                    <li
                        key={index}
                        className="flex items-center gap-2 text-gray-600"
                    >
                        ✓ {item}
                    </li>
                ))}
            </ul>
        </div>
            <p>{product.featured}</p>
            <a
              href={`https://wa.me/919930499054?text=${encodeURIComponent(
                `Hi! I'm interested in ${product.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
            >
              <FaWhatsapp className="text-xl" />
              Order on WhatsApp
            </a>
            &nbsp;
            <a
              href="https://www.instagram.com/handmade_heart_made"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-3 text-white font-semibold hover:opacity-90"
            >
              <FaInstagram className="text-xl" />
              Visit Our Instagram
            </a>
        </div>
      </div>

      <h2 className="mt-20 text-center text-3xl font-bold">Related Creations</h2>

      <div className="mx-auto mt-10 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-4 ">
        {relatedProducts.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={item.images[0]}
              alt={item.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-4">
              <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
                {item.category}
              </span>

              <h3 className="mt-3 text-xl font-semibold">
                {item.name}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                {item.description}
              </p>

              <Link
                to={`/product/${item.id}`}
                className="mt-4 inline-block font-medium text-pink-600 hover:text-pink-700"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductDetails
