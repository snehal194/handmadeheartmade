import {
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" bg-[#ffd7e2] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 p-10" >
          <div>
            <img src="/logo.png" alt="Handmade Heart Made" className="w-32"/>
            <p  className="text-xs font-light">Crafting memories through handmade creations.</p>
          </div>

          <div>
            <h2  className="text-sm font-bold mb-2 text-[#db6687]">Our Story</h2>
            <p className="text-gray-600 text-sm">Born from a heartfelt gift...</p>
          </div>
          <div>
            <h2 className="text-sm font-bold mb-2 text-[#db6687]">Quick Links</h2>
            <ul>
              <li className="text-sm text-gray-600 hover:text-pink-500 transition"><Link to="/">Home</Link></li>
              <li className="text-sm text-gray-600 hover:text-pink-500 transition"><Link to="/gallery">Gallery</Link></li>
              <li className="text-sm text-gray-600 hover:text-pink-500 transition"><Link to="/about">About</Link></li>
              <li className="text-sm text-gray-600 hover:text-pink-500 transition"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold mb-2 text-[#db6687]">Categories</h2>
            <ul>
              <li className="text-sm text-gray-600 hover:text-pink-500 transition"><Link to="home">Wedding Embroidery</Link></li>
              <li className="text-sm text-gray-600 hover:text-pink-500 transition"><Link to="">Crochet</Link></li>
              <li className="text-sm text-gray-600 hover:text-pink-500 transition"><Link to=""> Cloth Embroidery</Link></li>
              <li className="text-sm text-gray-600 hover:text-pink-500 transition"><Link to="">Wooden Work</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold mb-2 text-[#db6687]">Contact</h2>
            <p className="text-sm font-thin">Follow us on social media to find out the latest updates.</p>
            <div className="flex gap-4 mt-4 text-2xl">
              <a href="https://www.instagram.com/handmade_heart_made" aria-label="Instagram ">
                <FaInstagram className="text-pink-500 text-2xl"/>
              </a>

              <a href="#" aria-label="Pinterest">
                <FaPinterest className="text-pink-500 text-2xl"/>
              </a>

              <a href="https://www.youtube.com/@handmade_heart_made/shorts" aria-label="YouTube" target="_blank">
                <FaYoutube className="text-pink-500 text-2xl"/>
              </a>
            </div>
          </div>
      </div>
      <div className="mt-8 border-t border-[#adadad] pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Handmade Heart Made. Crafted with ❤️ and creativity.
      </div>
    </footer>
  );
}

export default Footer;