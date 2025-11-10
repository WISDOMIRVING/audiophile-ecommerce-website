"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Headphones", href: "/headphones" },
  { name: "Speakers", href: "/speakers" },
  { name: "Earphones", href: "/earphones" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white relative z-50 p-6">
      <div className="flex justify-between items-center w-full max-w-[1110px] mx-auto">
        {/* Left side: Hamburger + Logo */}
        <div className="flex items-center gap-6">
          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <Image
              src="/hamburger_icon.svg"
              alt="Menu"
              width={24}
              height={20}
            />
          </button>

          {/* Logo */}
          <Link href="/">
            <Image
              src="/audiophile.svg"
              alt="Audiophile logo"
              width={143}
              height={25}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-8 text-sm tracking-[2px] uppercase">
            {navlinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Cart Icon */}
        <button aria-label="Cart">
          <Image src="/cart_icon.svg" alt="Cart" width={24} height={20} />
        </button>
      </div>

      {/* Mobile Sheet Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white text-black shadow-md overflow-hidden transition-all duration-300 ease-in-out lg:hidden z-50
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-6 py-8 px-6 uppercase tracking-[2px] font-medium">
          {navlinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-lg hover:text-orange-400 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
