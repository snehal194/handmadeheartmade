import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import gallery from '../data/gallery';

const GalleryPreview = () => {
    const PreviewImage = gallery.slice (0,8);
    return (
    <section className='py-20'>
        <div  className="mx-auto max-w-7xl px-6">
            <SectionTitle title="Our Latest Creations" subtitle="Beautiful unique handmade products" />
            <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
                {PreviewImage.map((item) => (
                  <div
                    key={item.id}
                    className="group overflow-hidden rounded-2xl"
                    >
                    <img
                        src={item.image}
                        alt={item.category}
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>  
                ))}

            </div>

            <div className="mt-10 text-center">
                <Link
                 to="/gallery"
                className="rounded-full bg-pink-500 px-8 py-3 text-white transition hover:bg-pink-600"
                >
                View Full Gallery →
                </Link>
            </div>
        </div>
      
    </section>
  )
}

export default GalleryPreview
