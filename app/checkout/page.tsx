"use client";

import { useCart } from "@/context/products";
import Image from "next/image";
import { useState } from "react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type CheckoutFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: "e-Money" | "Cash on Delivery";
  eMoneyNumber: string;
  eMoneyPin: string;
};

type FieldConfig = {
  key: keyof CheckoutFormData;
  label: string;
  placeholder: string;
  span?: string;
};

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-Money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Totals
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const shipping = 50;
  const vat = total * 0.2;
  const grandTotal = total + shipping;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Checkout successful!");
    clearCart();
  };

  // Billing fields
  const billingFields: FieldConfig[] = [
    { key: "name", label: "Name", placeholder: "Alexei Ward" },
    { key: "email", label: "Email Address", placeholder: "alexei@mail.com" },
    {
      key: "phone",
      label: "Phone Number",
      placeholder: "+1 202-555-0136",
      span: "md:col-span-2",
    },
  ];

  // Shipping fields
  const shippingFields: FieldConfig[] = [
    {
      key: "address",
      label: "Address",
      placeholder: "1137 Williams Avenue",
      span: "md:col-span-2",
    },
    { key: "zip", label: "ZIP Code", placeholder: "10001" },
    { key: "city", label: "City", placeholder: "New York" },
    {
      key: "country",
      label: "Country",
      placeholder: "United States",
      span: "md:col-span-2",
    },
  ];

  // e-Money fields
  const eMoneyFields: FieldConfig[] = [
    { key: "eMoneyNumber", label: "e-Money Number", placeholder: "238521993" },
    { key: "eMoneyPin", label: "e-Money PIN", placeholder: "6891" },
  ];

  return (
    <main className="bg-[#F1F1F1] min-h-screen px-4 md:px-12 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Checkout Form */}
        <form
          onSubmit={handleCheckout}
          className="bg-white rounded-lg p-8 flex-1 space-y-8"
        >
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-4">
            Checkout
          </h2>

          {/* Billing Details */}
          <section>
            <h3 className="text-[#D87D4A] font-bold tracking-widest text-sm mb-4 uppercase">
              Billing Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {billingFields.map((field) => (
                <Field key={field.key} className={field.span}>
                  <FieldLabel htmlFor={field.key}>{field.label}</FieldLabel>
                  <Input
                    id={field.key}
                    name={field.key}
                    value={formData[field.key]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                  />
                </Field>
              ))}
            </div>
          </section>

          {/* Shipping Info */}
          <section>
            <h3 className="text-[#D87D4A] font-bold tracking-widest text-sm mb-4 uppercase">
              Shipping Info
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shippingFields.map((field) => (
                <Field key={field.key} className={field.span}>
                  <FieldLabel htmlFor={field.key}>{field.label}</FieldLabel>
                  <Input
                    id={field.key}
                    name={field.key}
                    value={formData[field.key]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                  />
                </Field>
              ))}
            </div>
          </section>

          {/* Payment Details */}
          <section>
            <h3 className="text-[#D87D4A] font-bold tracking-widest text-sm mb-4 uppercase">
              Payment Details
            </h3>

            <Field>
              <FieldLabel>Payment Method</FieldLabel>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(val: CheckoutFormData["paymentMethod"]) =>
                  setFormData((prev) => ({ ...prev, paymentMethod: val }))
                }
                className="flex flex-col md:flex-row gap-4 mt-2"
              >
                {["e-Money", "Cash on Delivery"].map((method) => (
                  <Field
                    key={method}
                    className="flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer"
                  >
                    <RadioGroupItem value={method} id={method} />
                    <label htmlFor={method}>{method}</label>
                  </Field>
                ))}
              </RadioGroup>
            </Field>

            {formData.paymentMethod === "e-Money" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {eMoneyFields.map((field) => (
                  <Field key={field.key}>
                    <FieldLabel htmlFor={field.key}>{field.label}</FieldLabel>
                    <Input
                      id={field.key}
                      name={field.key}
                      value={formData[field.key]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                    />
                  </Field>
                ))}
              </div>
            )}
          </section>

          <button
            type="submit"
            className="w-full bg-[#D87D4A] text-white font-semibold uppercase py-4 tracking-widest rounded-md hover:bg-primary-light transition"
          >
            Continue & Pay
          </button>
        </form>

        {/* Summary */}
        <aside className="bg-white rounded-lg p-8 w-full lg:w-[380px] h-fit">
          <h3 className="uppercase font-bold text-lg mb-8">Summary</h3>
          <div className="space-y-6 mb-8">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={item.mainImage}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-gray-500 text-sm">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-gray-500 text-sm">
                  x{item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500 uppercase">Total</span>
              <span className="font-bold">$ {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 uppercase">Shipping</span>
              <span className="font-bold">$ {shipping}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 uppercase">VAT (included)</span>
              <span className="font-bold">$ {vat.toFixed(0)}</span>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <span className="text-gray-500 uppercase text-sm">Grand Total</span>
            <span className="text-[#D87D4A] font-bold text-lg">
              $ {grandTotal.toFixed(0)}
            </span>
          </div>
        </aside>
      </div>
    </main>
  );
}
