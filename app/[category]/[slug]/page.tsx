"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useProducts, useCart } from "@/context/products";

const ProductPage: React.FC = () => {
  const { slug } = useParams();
  const router = useRouter();
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (loading) return <p className="text-center py-20">Loading product...</p>;
  if (error) return <p className="text-center text-red-500 py-20">{error}</p>;

  const product = products.find((p) => p.slug === slug);

  if (!product)
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button
          onClick={() => router.back()}
          className="text-orange-500 hover:underline"
        >
          Go Back
        </button>
      </div>
    );

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  // ✅ Related products: same category first, then fill from other categories
  let relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  if (relatedProducts.length < 3) {
    const remaining = 3 - relatedProducts.length;
    const others = products.filter(
      (p) => p.category !== product.category && p.id !== product.id
    );
    relatedProducts = relatedProducts.concat(others.slice(0, remaining));
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Go Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => router.back()}
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          Go Back
        </button>
      </div>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-lg p-12 flex items-center justify-center">
            <img
              src={product.mainImage}
              alt={product.name}
              className="w-full max-w-sm h-auto rounded-lg object-cover"
            />
          </div>
          <div>
            {product.isNew && (
              <p className="text-orange-500 text-sm tracking-widest mb-4">
                NEW PRODUCT
              </p>
            )}
            <h2 className="text-4xl font-bold mb-6">
              {product.name} {product.category}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>
            <p className="text-2xl font-bold mb-8">
              ${product.price.toLocaleString()}
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-gray-100">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-4 py-3 hover:text-orange-500"
                >
                  -
                </button>
                <span className="px-6 py-3 font-bold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-4 py-3 hover:text-orange-500"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-bold tracking-wider transition"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features & In The Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">FEATURES</h3>
            {product.features.map((feature, i) => (
              <p key={i} className="text-gray-600 mb-6 leading-relaxed">
                {feature}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-8">IN THE BOX</h3>
            <ul className="space-y-3">
              {product.in_the_box.map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-orange-500 font-bold mr-6">
                    {item.quantity}x
                  </span>
                  <span className="text-gray-600">{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-8">
            {product.galleryImages.slice(0, 2).map((img, i) => (
              <div key={i} className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.galleryImages[2]}
              alt="Gallery main"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">
          YOU MAY ALSO LIKE
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedProducts.map((item) => (
            <div key={item.id} className="text-center">
              <div className="bg-gray-100 rounded-lg p-8 mb-6">
                <img
                  src={item.mainImage}
                  alt={item.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h4 className="text-xl font-bold mb-4">{item.name}</h4>
              <a
                href={`/${item.category.toLowerCase()}/${item.slug}`}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-bold tracking-wider inline-block transition"
              >
                SEE PRODUCT
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">
              BRINGING YOU THE <span className="text-orange-500">BEST</span>{" "}
              AUDIO GEAR
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. Visit us to experience the best sound gear available.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop"
              alt="About"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
