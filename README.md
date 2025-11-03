# 🎧 Audiophile E-Commerce Website

A **pixel-perfect, fully functional e-commerce web app** built with **Next.js 14**, **Convex**, and **Tailwind CSS**, implementing the official **Audiophile** design system across all screen sizes.
This project was developed for **Stage 3a: Frontend Wizards Challenge**.

---

## 🚀 Overview

This build brings the **Audiophile Figma design** to life with production-ready UI, responsive layouts, and a complete checkout flow.
Users can browse products, fill out validated checkout forms, and receive a responsive HTML confirmation email after successful order placement.

---

## 🧱 Tech Stack

| Layer                  | Technology                                                                     |
| :--------------------- | :----------------------------------------------------------------------------- |
| **Frontend**           | [Next.js 16 (App Router)](https://nextjs.org/docs)                             |
| **Styling**            | [Tailwind CSS](https://tailwindcss.com) + Audiophile Design System             |
| **Fonts**              | [Manrope (Google Fonts)](https://fonts.google.com/specimen/Manrope)            |
| **Backend / Database** | [Convex](https://docs.convex.dev)                                              |
| **Email Service**      | [Resend API](https://resend.com) / [Nodemailer](https://nodemailer.com/about/) |
| **Validation**         | Zod / React Hook Form                                                          |
| **Deployment**         | [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com)             |

---

## 🧩 Features

✅ **Pixel-perfect UI** – matches the Figma design across mobile, tablet, and desktop.
✅ **Responsive Layouts** – fluid grids and breakpoints following design specs.
✅ **Checkout Form** – collects & validates customer and shipping information.
✅ **Order Persistence** – saves orders to Convex (customer, shipping, totals, items, timestamp).
✅ **Transactional Emails** – sends confirmation email with order details and summary.
✅ **Accessibility** – semantic HTML, ARIA labels, and keyboard-friendly form interactions.
✅ **Clean Code** – modular components, consistent naming, documented utilities.

---

## 🗂️ Project Structure

```
audiophile-ecommerce/
│
├── app/                 # Next.js routes (Home, Checkout, Success)
├── components/          # Reusable UI + layout components
├── convex/              # Convex schema and server functions
├── lib/                 # Utilities (email, formatters, validation)
├── public/              # Static assets (images/icons)
├── styles/              # Global + design system styles
└── README.md
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/audiophile-ecommerce.git
cd audiophile-ecommerce
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Configure environment variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_CONVEX_URL=<your-convex-deployment-url>
RESEND_API_KEY=<your-resend-api-key>
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4️⃣ Run the Convex backend

```bash
npx convex dev
```

### 5️⃣ Start the Next.js development server

```bash
npm run dev
```

Open your browser at **[http://localhost:3000](http://localhost:3000)**

---

## 📦 Building for Production

```bash
npm run build
npm start
```

Deploy on **Vercel** or **Netlify** with environment variables set in their dashboards.

---

## 🧾 Order Flow Summary

1. User fills out and submits the checkout form.
2. Form validates all inputs (name, email, phone, address, etc.).
3. On success, the order is saved to Convex:

   * Customer details
   * Shipping info
   * Items (id, name, price, quantity)
   * Totals (subtotal, shipping, tax, grand total)
4. A responsive HTML confirmation email is sent to the user.
5. User is redirected to the **Order Confirmation** page displaying the summary.

---

## 🧪 Testing Checklist

* [x] Figma design reproduced pixel-perfectly
* [x] Checkout flow end-to-end (Convex + Email)
* [x] Validation & error states handled
* [x] Responsive email template
* [x] Accessible forms and navigation
* [x] Deployment verified

---

## 📨 Example Email Template

A fully responsive HTML confirmation email is generated using the order data.
It includes:

* Greeting with customer name
* Order ID + item summary
* Shipping details
* Support link + CTA button: “View Your Order”

(See `/lib/email.ts` or `/emails/confirmation.html` for source.)

---

## 💡 Acknowledgements

* **Frontend Wizards Stage 3a Challenge**
* Audiophile Design by Frontend Mentor
* Convex team for serverless database tools
* Resend / Nodemailer for email delivery

---

## 📜 License

This project is for educational purposes under the Frontend Wizards program.
All design rights belong to **Audiophile / Frontend Mentor**.
