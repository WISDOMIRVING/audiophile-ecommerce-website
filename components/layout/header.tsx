"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/products";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Headphones", href: "/headphones" },
  { name: "Speakers", href: "/speakers" },
  { name: "Earphones", href: "/earphones" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  );

  return (
    <header className="bg-black text-white relative z-50 p-6">
      <div className="flex justify-between items-center w-full max-w-[1110px] mx-auto">
        {/* Left side: Hamburger + Logo */}
        <div className="flex items-center gap-6">
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

        {/* Cart Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              aria-label="Cart"
              className="relative flex items-center justify-center"
            >
              <Image src="/cart_icon.svg" alt="Cart" width={24} height={20} />
              {totalItems > 0 && (
                <span
                  className="absolute -top-2 -right-3 flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {totalItems}
                </span>
              )}
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-96 p-6 rounded-lg bg-white text-black shadow-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-bold text-lg uppercase">
                Cart ({totalItems})
              </h4>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-sm text-gray-500 hover:text-orange-500"
                >
                  Remove all
                </button>
              )}
            </div>

            {/* Cart Items */}
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Your cart is empty
              </p>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.mainImage}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="rounded-lg object-cover bg-gray-100"
                      />
                      <div>
                        <p className="font-bold text-sm">{item.name}</p>
                        <p className="text-gray-500 text-sm">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center bg-gray-100 rounded-md">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-2 py-1 text-gray-600 hover:text-orange-500"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 font-semibold">
                        {item.quantity ?? 1}
                      </span>
                      <button
                        onClick={() =>
                          addToCart({
                            ...item,
                            quantity: (item.quantity ?? 1) + 1,
                          })
                        }
                        className="px-2 py-1 text-gray-600 hover:text-orange-500"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Total + Checkout */}
            {cart.length > 0 && (
              <div className="mt-6">
                <div className="flex justify-between items-center mb-6">
                  <p className="uppercase text-gray-500 text-sm">Total</p>
                  <p className="text-lg font-bold">
                    ${totalPrice.toLocaleString()}
                  </p>
                </div>
                <Link href="/checkout" className="block">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 uppercase tracking-wide rounded-lg">
                    Checkout
                  </Button>
                </Link>
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Menu */}
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
