import React from "react";
import SectionTitle from "../common/SectionTitle";
import testimonials from "../../data/testimonials";

const TestimonialsCard = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle title="❤️ What Our Customers Say" />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-white p-6 shadow-md"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto h-20 w-20 rounded-full object-cover"
              />

              <h3 className="mt-4 text-xl font-semibold text-center">
                {testimonial.name}
              </h3>

              <p className="mt-3 text-center text-gray-600">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsCard;