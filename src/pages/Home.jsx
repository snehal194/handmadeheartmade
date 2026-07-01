import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import AboutPreview from "../components/home/AboutPreview";
import FeatureCard from "../components/home/Whychooseus";
import TestimonialsCard from "../components/home/TestimonialsCard";
import GalleryPreview from "./GalleryPreview";

function Home() {
  return (
    <>
      <Hero />
      <Categories/>
      <FeaturedProducts/>
      <AboutPreview/>
      <FeatureCard/>
      <TestimonialsCard/>
      <GalleryPreview/>
    </>
  );
}

export default Home;