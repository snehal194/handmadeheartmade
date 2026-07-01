import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">

          <p className="text-pink-600 font-semibold uppercase tracking-widest">
            Handmade With Love
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mt-4">
            Handcrafted Embroidery
            <span className="text-pink-600"> Made with Love</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Personalized hoops, blouses, jackets, baby shower gifts,
            wedding keepsakes, and custom embroidery designed to make
            every special moment unforgettable.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <Link
              to="/gallery"
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
            >
              View Collection
            </Link>

            <Link
              to="/contact"
              className="border border-pink-600 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-600 hover:text-white transition"
            >
              Contact Me
            </Link>

          </div>

        </div>

        {/* Right Image */}

        <div className="flex-1">
          <img
            src="./hero.png"
            alt="Hand Embroidery"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;