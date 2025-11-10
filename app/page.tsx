import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/shared/category-card";
import FeaturedProduct from "@/components/ui/FeaturedProduct";
import SecondaryProduct from "@/components/ui/SecondaryProduct";
import BestGear from "@/components/ui/BestGear";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[url('/hero_bg.png')] bg-cover bg-bottom-right bg-no-repeat text-white h-[600px]">
        <div className="flex flex-col h-full justify-center max-w-[1110px] mx-auto">
          <div className="w-full max-w-[398px]">
            <p className="text-sm tracking-[10px] text-gray-400">NEW PRODUCT</p>
            <h1 className="text-4xl md:text-5xl font-bold uppercase mt-4 mb-6 text-white">
              <span className="text-white">XX99 Mark II Headphones</span>
            </h1>
            <p className="text-gray-300 mb-8">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href="/headphones/xx99-mark-two-headphones">
              <Button className="">See Product</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Different Categories */}
      <section className="px-6 py-24">
        <div className="w-full max-w-[1110px] mx-auto grid md:grid-cols-3 gap-6">
          <CategoryCard
            title="Headphones"
            imageSrc="/headphones.png"
            href="/headphones"
          />
          <CategoryCard
            title="Speakers"
            imageSrc="/speakers.png"
            href="/speakers"
          />
          <CategoryCard
            title="Earphones"
            imageSrc="/earphones.png"
            href="/earphones"
          />
        </div>
      </section>

      {/* Featured Products */}
      {/* <section className="px-6">
        <div className="w-full max-w-[1110px] mx-auto p-12 bg-primary rounded-md">
          <div></div>
        </div>
      </section> */}

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
          <Link href="/earphones/yx1-earphones">
            <Button variant="outline" className="text-black border-black">
              See Product
            </Button>
          </Link>
        </div>
      </section>

      {/* Best Gear Section */}
      <BestGear />
    </main>
  );
}
