import Hero from "@/components/home/Hero";
import Destinations from "@/components/home/Destinations";
import Packages from "@/components/home/Packages";
import Experience from "@/components/home/Experience";
import VideoSection from "@/components/home/VideoSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata = {
  title: "WanderLux Travels — Luxury Travel & Holiday Packages",
  description:
    "Explore the world with WanderLux Travels. Luxury trips to Dubai, Bali, Maldives, Switzerland, and more. Personalized itineraries crafted by expert travel consultants.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Destinations />
      <Packages />
      <Experience />
      <VideoSection />
      <GalleryPreview />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
