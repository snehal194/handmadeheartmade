import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import { useState } from "react";
import { FaInstagram, FaWhatsapp, FaHeart } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const message = `Hello Handmade Heart Made ❤️
        Name: ${formData.name}
        Email: ${formData.email}
        Message:
        ${formData.message}`;

  const whatsappURL = `https://wa.me/919930499054?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};
  return (
    <section className="bg-[#FFF8F3] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <SectionTitle
          title="Get In Touch 💕"
          subtitle="Have a custom design in mind? We'd love to create something beautiful just for you."
        />

        {/* Main Section */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input type="text" name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-pink-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-pink-500"
              />

              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your custom order..."
                className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-pink-500"
              />

              <button type="submit" className="w-full rounded-full bg-pink-500 py-3 font-semibold text-white hover:bg-pink-600">
                Send Message
              </button>

            </form>

          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center rounded-3xl bg-white p-8 shadow-lg">

            <FaHeart className="mb-5 text-5xl text-pink-500" />

            <h2 className="text-3xl font-bold text-gray-800">
              Let's Create Something Beautiful ❤️
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Every handmade creation tells a unique story.
              Whether you're looking for a personalized wedding hoop,
              crochet flowers, custom embroidery, or a special gift,
              we're here to bring your ideas to life with love and care.
            </p>

            {/* Features */}

            <div className="mt-8 space-y-3 text-gray-700">

              <p>✨ Handmade with Love</p>

              <p>🎨 Fully Customized Designs</p>

              <p>📦 Secure Packaging</p>

              <p>🚚 Pan India Delivery</p>

            </div>

            {/* Social Buttons */}

            <div className="mt-10 flex gap-5">

              <a
                href="https://www.instagram.com/handmade_heart_made"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-pink-100 px-5 py-3 font-medium text-pink-600 transition hover:bg-pink-500 hover:text-white"
              >
                <FaInstagram />
                Instagram
              </a>

              <a
                href="https://wa.me/919930499054"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-green-100 px-5 py-3 font-medium text-green-600 transition hover:bg-green-500 hover:text-white"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-pink-100 px-8 py-14 text-center">

          <h2 className="text-4xl font-bold text-gray-800">
            Have a Custom Design in Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-700">
            We'd love to turn your ideas into a beautiful handmade creation.
            Click below and let's start designing together!
          </p>

          <a
            href="https://wa.me/919930499054"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;