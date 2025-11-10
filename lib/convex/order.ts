import { mutation } from "./_generated/server";

export const createOrder = mutation(async ({ db }, orderData) => {
  const orderId = await db.insert("orders", {
    ...orderData,
    status: "pending",
    emailSent: false,
    createdAt: Date.now(),
  });
  return orderId;
});

export const markEmailSent = mutation(async ({ db }, { orderId }) => {
  await db.patch(orderId, { emailSent: true });
});