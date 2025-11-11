"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IncludedItem {
  quantity: number;
  item: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  isNew: boolean;
  category: string;
  description: string;
  price: number;
  features: string[];
  in_the_box: IncludedItem[];
  mainImage: string;
  galleryImages: string[];
  quantity?: number;
}

interface ProductsContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Load cart from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("audiophile_cart");
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch {
        console.error("Invalid cart data in storage");
      }
    }
  }, []);

  // ✅ Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("audiophile_cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/products.json");
        if (!res.ok) throw new Error("Failed to fetch products");interface RawProduct {
  id: string | number;
  name?: string;
  slug?: string;
  isNew?: boolean;
  category?: string;
  description?: string;
  price?: string | number;
  features?: string[];
  in_the_box?: IncludedItem[];
  mainImage?: string;
  galleryImages?: string[];
}

// ... (keep existing code)

        const data: RawProduct[] = await res.json();

        const normalized: Product[] = data.map((p) => ({
          id: String(p.id),
          name: p.name || "",
          slug: p.slug || "",
          isNew: Boolean(p.isNew),
          category: p.category || "",
          description: p.description || "",
          price: Number(p.price) || 0,
          features: p.features || [],
          in_the_box: p.in_the_box || [],
          mainImage: p.mainImage || "",
          galleryImages: p.galleryImages || [],
        }));

        setProducts(normalized);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // ✅ Add product with correct quantity
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: (p.quantity || 1) + (product.quantity || 1) }
            : p
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  };

  // ✅ Reduce or remove
  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === productId);
      if (!existing) return prev;

      if ((existing.quantity || 1) > 1) {
        return prev.map((p) =>
          p.id === productId ? { ...p, quantity: (p.quantity || 1) - 1 } : p
        );
      }
      return prev.filter((p) => p.id !== productId);
    });
  };

  const clearCart = () => setCart([]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("useProducts must be used within a ProductsProvider");
  return context;
}

export function useCart() {
  const { cart, addToCart, removeFromCart, clearCart } = useProducts();
  return { cart, addToCart, removeFromCart, clearCart };
}
