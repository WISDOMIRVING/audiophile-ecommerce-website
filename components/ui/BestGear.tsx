import Image from "next/image";

export default function BestGear() {
  return (
    <div className="min-h-screen bg-white p-8 font-sans flex flex-col lg:flex-row items-center justify-center lg:justify-center lg:items-center gap-8 lg:gap-12">
      {/* Text Content */}
      <div className="max-w-2xl lg:max-w-4xl xl:max-w-2xl">
        <div className="text-left mb-8">
          <p className="text-4xl font-bold tracking-wider mb-4">
            BRINGING YOU THE
          </p>
          <p className="text-3xl font-bold tracking-widest mb-8">
            <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
          </p>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          Located at the heart of New York City, Australia is the prime service
          for type of smartphones, warehouses, speakers and audio accessories.
          We have a large community community demonstration across available for
          your business and organizations which depend on products. This будет
          stricken and ensures that the actual information no matter
          subscription back place to buy your portable audio equipment.
        </p>
      </div>
      
      <div className=" relative w-full lg:w-full lg:max-w-lg xl:max-w-xl">
        <Image
          src="/man.png"
          alt="Premium audio gear"
          height={600}
          width={800}
          className="w-full h-auto object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          priority
        />
      </div>
    </div>
  );
}