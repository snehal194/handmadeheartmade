import React from "react";
import SectionTitle from "../common/SectionTitle";
import features from "../../data/feature";

const FeatureCard = () => {
  return (
    <section className="bg-[#f3feff] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle title="Why Choose Handmade Heart Made" />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="rounded-2xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                  <Icon className="text-3xl text-pink-500" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;