import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SecondaryProduct() {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-16">
      <div className="relative flex flex-col md:flex-row items-center justify-between bg-[url('/speaker-2.png')] bg-cover bg-center rounded-lg h-[320px] md:h-[400px] overflow-hidden">
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/10 rounded-lg"></div>

        {/* Text + CTA */}
        <div className="relative z-10 ml-10 md:ml-16 text-left">
          <h2 className="text-black text-3xl md:text-4xl font-bold tracking-tight">
            ZX7 SPEAKER
          </h2>
          <Link href="/speakers/zx7-speaker">
            <Button
              variant="outline"
              className="mt-6 border-black text-black hover:bg-black hover:text-white rounded-none px-8 py-3"
            >
              SEE PRODUCT
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
