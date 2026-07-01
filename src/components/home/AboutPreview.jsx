import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'

const AboutPreview = () => {
  return (
    <section className="bg-[#fffdf3] py-20">
      <SectionTitle title=" About Handmade Heart Made" subtitle=" Crafted With Love"/>
        
      <div className='max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12'>
        <div className="flex-1">
            <img
            src="./abt.jfif"
            alt="Hand Embroidery"
            className="rounded-3xl shadow-xl w-full object-cover transition duration-500 hover:scale-105"
            />
        </div>
        <div className="flex-1">
            <p className="mt-4 text-base md:text-lg leading-8 text-gray-600">
                Born from a heartfelt gift during the COVID-19 lockdown, our journey began with one embroidery hoop and a dream. 
                Today, we handcraft personalized embroidery and crochet creations that turn memories into timeless keepsakes.

            </p>
            <div className="mt-8 space-y-3">
                <div>❤️ Handmade with Love</div>
                <div>🎁 Personalized Designs</div>
                <div>🌿 Premium Materials</div>
                <div>✨ Crafted for Every Occasion</div>
            </div>
            <Link to="/about" className="inline-block mt-8 rounded-full bg-pink-500 px-6 py-3 text-white font-medium hover:bg-pink-600 transition">
                Learn More
                </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
