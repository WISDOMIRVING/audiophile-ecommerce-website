import Image from "next/image";
import Link from "next/link";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Headphones", href: "/headphones" },
  { name: "Speakers", href: "/speakers" },
  { name: "Earphones", href: "/earphones" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white px-6 md:px-10 lg:px-20 py-16 mt-24">
      <div className="max-w-[1110px] mx-auto flex flex-col items-center lg:items-start">
        {/* Top bar accent */}
        <div className="w-[101px] h-1 bg-[#D87D4A] mb-12"></div>

        {/* Logo + Navigation */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-0">
          <Link href="/">
            <Image
              src="/audiophile.svg"
              alt="Audiophile logo"
              width={143}
              height={25}
              priority
            />
          </Link>

          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-[13px] font-bold tracking-[2px] uppercase text-center lg:text-left">
            {navlinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[#D87D4A] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <p className="text-[#7D7D7D] text-[15px] leading-[25px] text-center lg:text-left max-w-[540px] mt-8 mb-12">
          Audiophile is an all-in-one stop to fulfill your audio needs. We’re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility — we’re open 7 days a week.
        </p>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
          <p className="text-[#7D7D7D] text-[15px] leading-[25px] text-center lg:text-left">
            Copyright 2025. All Rights Reserved
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <Link href="https://facebook.com" target="_blank">
              <Image src="/patt.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Image src="/Shape.svg" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Image src="/Path.svg" alt="Instagram" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
