import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  href: string;
}

export default function CategoryCard({
  title,
  imageSrc,
  href,
}: CategoryCardProps) {
  return (
    <div className="relative flex flex-col items-center bg-neutral-100 rounded-lg py-8">
      <div className="absolute -top-12">
        <Image src={imageSrc} alt={title} width={120} height={120} />
      </div>
      <div className="mt-20 text-center">
        <h3 className="text-sm tracking-[1px] font-bold uppercase">{title}</h3>
        <Link
          href={href}
          className="mt-3 inline-flex items-center gap-2 text-xs tracking-[1px] text-black/50 hover:text-primary transition"
        >
          SHOP <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}
