// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    createdAt: v.number(),
  }),

  shipping_details: defineTable({
    userId: v.id("users"),
    address: v.string(),
    city: v.string(),
    country: v.string(),
    zip: v.string(),
    paymentMethod: v.string(),
    createdAt: v.number(),
  }),

  orders: defineTable({
    userId: v.id("users"),
    shippingId: v.id("shipping_details"),
    items: v.array(
      v.object({
        productId: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        total: v.number(),
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      vat: v.number(),
      grandTotal: v.number(),
    }),
    orderId: v.string(),
    status: v.string(),
    emailSent: v.boolean(),
    createdAt: v.number(),
  }),

  products: defineTable({
    slug: v.string(),
    name: v.string(),
    price: v.number(),
    category: v.string(),
    image: v.string(),
    inStock: v.boolean(),
    createdAt: v.number(),
  }),
});
