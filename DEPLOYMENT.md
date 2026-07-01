# Deploying to Hostinger (Business plan → Node.js App)

This app is a full Next.js server (not a static export) — it has API routes for
Razorpay payments and email delivery that need Node.js to run. Hostinger's
Business hosting plan supports this via **hPanel → Advanced → Node.js**.

## 1. Push to GitHub

```bash
git init
git add .
git commit -m "Production-ready NVVF site"
git branch -M main
git remote add origin https://github.com/joeldominic-kevnit/nvvfoundation.git
git push -u origin main
```

## 2. Create the Node.js app in hPanel

1. Log in to **hPanel** → go to your hosting plan → **Advanced → Node.js**.
2. Click **Create Application**.
   - **Node.js version:** 20.x or newer (this project requires `>=20.9.0`, set in `package.json` → `engines`)
   - **Application root:** the folder you deploy into (e.g. `nvvfoundation`)
   - **Application URL:** your domain, e.g. `nvvfoundation.com`
   - **Application startup file:** `node_modules/next/dist/bin/next` — see step 4 for the exact startup command, some Hostinger panels instead ask you to set the **Start Command** to `npm start`.
3. Save. Hostinger provisions an isolated Node environment and a `.htaccess`/reverse-proxy rule that forwards your domain traffic to the Node process.

## 3. Get the code onto the server

Either:
- **Git deploy**: hPanel's Node.js app screen has a "Git" tab — point it at
  `https://github.com/joeldominic-kevnit/nvvfoundation.git`, branch `main`, and it will pull + install automatically on each deploy, or
- **File Manager / SFTP**: zip the repo (excluding `node_modules`, `.next`, `out`) and upload, then extract into the application root.

## 4. Install, build, and set the run command

In hPanel's Node.js app screen there's a built-in terminal / "Run NPM Install" button. Run, in order:

```bash
npm install
npm run build
```

Then set the app's **start command** to:

```bash
npm start
```

(`npm start` runs `next start`, which serves the production build on the port Hostinger assigns via the `PORT` env variable — Next.js reads this automatically.)

## 5. Set environment variables

In the same Node.js app screen, open **Environment Variables** and add every key
from `.env.example`:

| Key | Notes |
|---|---|
| `NEXT_PUBLIC_PAYMENT_MODE` | Set to `live` only once real Razorpay keys below are in place. Leave as `demo` to keep the current test-mode checkout working. |
| `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` | From https://dashboard.razorpay.com/app/keys |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Same as `RAZORPAY_KEY_ID`, exposed to the browser widget |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` / `SMTP_FROM` | Your real mailbox (e.g. Gmail with an App Password), not the Mailtrap sandbox used in local dev |
| `ENQUIRY_TO_EMAIL` | Inbox that receives contact-form enquiries (defaults to `ganeshcm9@gmail.com`) |

`.env.local` is git-ignored and never gets pushed — these values must be entered
directly in hPanel, not committed to the repo.

Restart the app after saving env vars so Next.js picks them up.

## 6. Point the domain

If the domain is already on Hostinger, hPanel's Node.js app wizard binds it for
you. If it's registered elsewhere, update its DNS to Hostinger's nameservers
(or an A/CNAME record) per Hostinger's domain-connection guide, then re-run
step 2's app URL binding.

## 7. Verify after deploy

- Visit `/` and a few inner pages to confirm they render.
- Visit `/sitemap.xml` and `/robots.txt` — both should return content, not 404.
- Submit the **Contact** form and confirm an email lands at `ENQUIRY_TO_EMAIL`.
- Run the **Apply** flow with `NEXT_PUBLIC_PAYMENT_MODE=demo` first; only flip to
  `live` after confirming real Razorpay keys work in a controlled test payment.

## Notes on image optimization

`next.config.ts` currently sets `images.unoptimized: true` — this avoids
needing the native `sharp` package on shared hosting. If you want Next.js's
automatic image optimization/resizing, add `sharp` as a dependency and remove
that flag; test the build on Hostinger before relying on it in production.
