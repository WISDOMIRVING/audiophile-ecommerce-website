"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import BestGear from "@/components/ui/BestGear";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useProducts } from "@/context/products";
import CategoryCard from "@/components/shared/category-card";

export default function CategoryPage() {
  const pathname = usePathname();
  const categorySlug = pathname?.split("/").pop()?.toLowerCase() || "";

  const { products, loading, error } = useProducts();

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-20">{error}</p>;

  // Filter products by category
  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === categorySlug
  );

  if (categoryProducts.length === 0)
    return <p className="text-center py-20">No products found</p>;

  return (
    <div>
      {/* Category Header */}
      <div className="bg-[black] p-20 font-bold w-full">
        <h1 className="text-[white] font-10 text-center">
          {categorySlug.toUpperCase()}
        </h1>
      </div>

      {/* Products Sections */}
      {categoryProducts.map((product, index) => {
        const isEven = index % 2 === 0;
        return (
          <main
            key={product.id}
            className={`flex flex-col md:flex-row justify-center items-center p-19 gap-10 ${
              !isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full max-w-[400px]">
              <Image
                src={product.mainImage}
                width={400}
                height={400}
                alt={product.name}
                className="mx-auto"
              />
            </div>
            <div className="w-full max-w-[450px]">
              {product.isNew && (
                <p className="text-sm tracking-[10px] text-orange-400">
                  NEW PRODUCT
                </p>
              )}
              <h1 className="text-4xl md:text-5xl font-bold uppercase mt-4 mb-6 text-white">
                <span className="text-black">
                  {product.name} {product.category}
                </span>
              </h1>
              <p className="text-gray-600 mb-8">{product.description}</p>
              <Link href={`/${product.category.toLowerCase()}/${product.slug}`}>
                <Button
                  variant="outline"
                  className="w-[180px] h-[50px] bg-[#D87D4A]"
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </main>
        );
      })}

      {/* Categories Section */}
      <section className="px-6 md:px-10 lg:px-20 py-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...new Set(products.map((p) => p.category))].map((cat) => {
            const catSlug = cat.toLowerCase();
            return (
              <CategoryCard
                key={catSlug}
                title={cat}
                imageSrc={`/${catSlug}.png`}
                href={`/${catSlug}`}
              />
            );
          })}
        </div>
      </section>

      <BestGear />
    </div>
  );
}
