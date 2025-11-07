// convex/getOrderById.ts
import { query } from "./_generated/server";
import { v } from "convex/values";

export const getOrderById = query({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_orderId", (q) => q.eq("orderId", args.orderId))
      .unique();

    if (!order) return null;

    const user = await ctx.db.get(order.userId);
    const shipping = await ctx.db.get(order.shippingId);

    return { order, user, shipping };
  },
});
