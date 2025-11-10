import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturedProduct() {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-24">
      <div className="relative flex flex-col lg:flex-row items-center justify-between bg-primary rounded-lg overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/')] bg-cover bg-center opacity-40"></div>

        {/* Speaker Image */}
        <div className="relative flex justify-center lg:justify-start w-full lg:w-1/2 py-12 lg:py-0">
          <Image
            src="/speaker.png"
            alt="ZX9 Speaker"
            width={350}
            height={485}
            className="relative z-10"
          />
        </div>

        {/* Text + CTA */}
        <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 px-6 lg:px-0 w-full lg:w-1/2 pb-20">
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight text-left">
            <span className="text-white">ZX9</span>
            <br /> <span className="text-white">SPEAKER</span>
          </h2>
          <p className="text-white/80 max-w-sm lg:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/speakers/zx9-speaker">
            <Button variant="dark" className="text-white">
              SEE PRODUCT
            </Button>{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
