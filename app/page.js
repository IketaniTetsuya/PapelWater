import About from "@/components/Home/About";
import HeroBanner from "@/components/Home/HeroBanner";
import Products from "@/components/Home/Products";
import Slogan from "@/components/Home/Slogan";
import Subscription from "@/components/Home/Subscription";
import Testimonial from "@/components/Home/Testimonial";
import Videos from "@/components/Home/Videos";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Videos />
      <Products />
      <Slogan />
      <About />
      <Testimonial />
      <Subscription />
    </div>
  );
}
