import React from 'react';


const About = () => {
  return (
    <section className="bg-[#fffdf3] py-20">
        
      <div className='max-w-7xl mx-auto px-6 gap-12'>
        <div className=" mb-6">
            <img
            src="./banner.png"
            alt="Hand Embroidery"
            className="rounded-3xl shadow-xl w-full object-cover transition duration-500 hover:scale-105"
            />
        </div>
        <div className="">
          <h2 className='text-4xl font-bold text-gray-800'>About Handmade Heart Made</h2>
          <h6  className="mx-auto mt-4 text-2xl text-gray-600">Crafted With Love</h6>
            <p className="mt-4 text-base md:text-lg leading-8 text-gray-600">
               Every handmade creation has a story, and ours began during the COVID-19 pandemic.I wanted to give my friend 
               something unique and meaningful for her wedding, so I designed my very first personalized embroidery couple hoop. 
               After sharing a photo of it on Instagram, I was overwhelmed by the response. People started asking about the price,
               requesting custom orders, and encouraging me to start a dedicated business page.With the support of friends and 
               family, my journey began through word-of-mouth recommendations.</p>
            <p className="mt-4 text-base md:text-lg leading-8 text-gray-600">
               Soon, I received my first orders, and after running my very first Instagram advertisement, I was thrilled to 
               receive an order from Puri—my first customer from another 
               city. That moment gave me the confidence to believe that my passion could become a business.As my journey grew, 
               so did my creativity. I expanded from personalized embroidery hoops to hand embroidery on tops, blouses, jackets, 
               baby shower hoops, wedding keepsakes, and many more custom creations. Wanting to learn something new, I also
               explored the beautiful art of crochet, adding handmade crochet flowers, bouquets, keychains, and gifts to my 
               collection.</p>

            <p className="mt-4 text-base md:text-lg leading-8 text-gray-600">
              Today, every product is thoughtfully handcrafted with patience, creativity, and attention to detail. Whether it's a 
              personalized wedding gift, home décor, or a custom handmade piece, my goal is to create something that brings joy 
              and becomes a cherished memory. Thank you for supporting handmade art and being a part of this beautiful journey. 
              Every order inspires me to keep creating with love.
            </p>
        </div>
      </div>
    </section>
  )
}

export default About
