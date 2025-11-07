import DesignSystemPage from "@/components/ui/design-system";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/CartegoryCard";
import FeaturedProduct from "@/components/ui/FeaturedProduct";
import SecondaryProduct from "@/components/ui/SecondaryProduct";
import BestGear from "@/components/ui/BestGear";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[url('/hero_bg.png')] bg-cover bg-bottom-right bg-no-repeat text-white h-[600px] flex items-center justify-center ">
        <div className="flex flex-col items-center md:items-start md:justify-between">
          <div className="w-full max-w-[398px] text-left md:text-left lg:mr-170">
            <p className="text-sm tracking-[10px] text-gray-400">NEW PRODUCT</p>
            <h1 className="text-4xl md:text-5xl font-bold uppercase mt-4 mb-6 text-white">
              <span className="text-white">XX99 Mark II Headphones</span>
            </h1>
            <p className="text-gray-300 mb-8">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
          <Button variant="none" className="w-[180px] h-[50px] bg-[#D87D4A]">
            Shop Now
          </Button>
        </div>
      </section>
      <section className="px-6 md:px-10 lg:px-20 py-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Headphones"
            imageSrc="/headphones.png"
            href="/headphones"
          />
          <CategoryCard
            title="Speakers"
            imageSrc="/speaker.png"
            href="/speakers"
          />
          <CategoryCard
            title="Earphones"
            imageSrc="/pods.png"
            href="/earphones"
          />
        </div>
      </section>
      <FeaturedProduct />
      <SecondaryProduct />

      {/* YX1 Earphones Section */}
      <section className="grid md:grid-cols-2 gap-0 my-24">
        {/* Left Image Card */}
        <div className="bg-[url('/doublepods.png')] bg-cover bg-center rounded-lg min-h-80"></div>

        {/* Right Content Card */}
        <div className="bg-[#F1F1F1] flex flex-col justify-center rounded-lg p-10">
          <h2 className="text-[28px] font-bold uppercase mb-6">
            YX1 Earphones
          </h2>
          <Button variant="outline" className="w-40 h-12">
            See Product
          </Button>
        </div>

        {/* Best Gear Section */}
      </section>
      <BestGear/>

      <Footer />

    </main>
  );
}
