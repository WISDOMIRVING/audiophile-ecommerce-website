// convex/createOrder.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
  args: {
    user: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    shipping: v.object({
      address: v.string(),
      city: v.string(),
      country: v.string(),
      zip: v.string(),
      paymentMethod: v.string(),
    }),
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
  },

  handler: async (ctx, args) => {
    const { user, shipping, items, totals } = args;

    // --- 1. Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", user.email))
      .unique();

    const userId = existingUser
      ? existingUser._id
      : await ctx.db.insert("users", {
          ...user,
          createdAt: Date.now(),
        });

    // --- 2. Store shipping details
    const shippingId = await ctx.db.insert("shipping_details", {
      ...shipping,
      userId,
      createdAt: Date.now(),
    });

    // --- 3. Generate a readable orderId
    const orderId = `#AUDIO${Math.floor(Math.random() * 100000)}`;

    // --- 4. Create order
    const order = await ctx.db.insert("orders", {
      userId,
      shippingId,
      items,
      totals,
      orderId,
      status: "pending",
      emailSent: false,
      createdAt: Date.now(),
    });

    // --- 5. Optionally call a Next.js API route to send email
    // await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ orderId, user, shipping, items, totals }),
    // });

    return { success: true, orderId };
  },
});
