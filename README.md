# National Videsh Vidya Foundation — Website

Admissions advisory website built with Next.js (App Router), including the
public marketing pages, the multi-step **Apply** flow with Razorpay payments,
and a **Contact** enquiry form that emails admissions via SMTP.

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example` for the full list (Razorpay keys, SMTP credentials, payment
mode). `.env.local` is git-ignored and must be configured separately in each
environment (local machine, hosting panel).

## Production build

```bash
npm run build
npm start
```

This is a standard Node.js server deployment (not a static export) — the
`/api/*` routes require it. See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for
step-by-step instructions to deploy on Hostinger's Node.js App hosting.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
