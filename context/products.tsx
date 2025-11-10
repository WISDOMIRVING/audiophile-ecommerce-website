"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Full product interface matching your /products.json
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
  quantity?: number; // used for cart
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

// Create context
const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch and normalize products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/products.json");
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        // Optional safety normalization (if future products have missing fields)
        const normalized: Product[] = data.map((p: any) => ({
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
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Cart actions
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
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

// Custom hooks
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
