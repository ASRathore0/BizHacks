# BizHacks Media™ — Hosting & Deployment Guide

This project is fully configured for seamless deployment to both **GitHub** (and GitHub Pages) and **Hostinger**.

---

## 🚀 Quick Summary

| Target | Deployment Method | Target Directory / Artifact |
| :--- | :--- | :--- |
| **Hostinger (Shared / Cloud / WordPress Hosting)** | Drag & Drop / File Manager / FTP | Upload `hostinger_deploy.zip` or contents of `out/` into `public_html` |
| **GitHub Pages** | Automated via GitHub Actions | Push to `main` branch (workflow automatically builds and publishes) |
| **Hostinger (Node.js / VPS Hosting)** | Node.js Runtime | `npm install && npm run build && npm start` |

---

## 1. Hosting on GitHub & GitHub Pages

### A. Push Project to Your GitHub Repository
1. Open terminal in the project directory (`c:\Mamp\htdocs\BizHacks`).
2. Create a new repository on [GitHub](https://github.com/new) (e.g., `bizhacks-media`).
3. Run the following commands:
   ```bash
   git add .
   git commit -m "Initial commit: BizHacks Media website"
   git remote add origin https://github.com/YOUR_USERNAME/bizhacks-media.git
   git branch -M main
   git push -u origin main
   ```

### B. Enable GitHub Pages (Zero-Touch via Actions)
The repository includes an automated workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (under Code and automation).
3. Under **Build and deployment**:
   - Set **Source** to **GitHub Actions**.
4. Every time you push to the `main` branch, GitHub Actions will automatically compile and publish your site!

> **Note on Custom Domains**:
> If you have a custom domain (e.g. `bizhacksmedia.com`), go to **Settings → Pages → Custom domain**, enter your domain, and configure your DNS A records pointing to GitHub Pages.

---

## 2. Hosting on Hostinger (Recommended: Static Export to `public_html`)

Hostinger's standard web hosting (Single, Premium, Business, Cloud) serves static assets with ultra-fast LiteSpeed web servers.

### Step-by-Step Deployment:
1. **Generate the latest build package**:
   In your terminal, run:
   ```bash
   npm run build
   npm run package:hostinger
   ```
   This generates `hostinger_deploy.zip` (~11.5 MB) containing:
   - `index.html` (Complete pre-rendered landing page)
   - `.htaccess` (Configured for LiteSpeed/Apache with gzip compression, caching, and MP4 video streaming)
   - `.nojekyll`
   - `_next/` (JavaScript & CSS bundles)
   - `assets/` (Video, logos, campaign imagery)

2. **Upload to Hostinger**:
   - Log in to your [Hostinger hPanel](https://hpanel.hostinger.com/).
   - Click **Websites** → Select your domain → Click **Manage**.
   - Open **File Manager** (under Files).
   - Navigate into the **`public_html`** folder.
   - Click the **Upload** button (top right icon) → Select **File** → choose `hostinger_deploy.zip`.
   - Once uploaded, right-click `hostinger_deploy.zip` inside `public_html` and select **Extract**.
   - Make sure files are extracted directly into `public_html` (so `index.html` and `.htaccess` are directly under `public_html/`).
   - You can now delete `hostinger_deploy.zip` from File Manager.

3. **Verify Site**:
   - Visit your domain (e.g., `https://yourdomain.com`).
   - The hero background video, animations, interactive contact modal, and mobile responsive layout will be live!

---

## 3. Important Configuration Notes

- **Apache `.htaccess`**:
  Located in [`public/.htaccess`](public/.htaccess). It includes:
  - MIME types for MP4 video streaming (`video/mp4`), WebP, SVG, and modern fonts (`woff2`).
  - Gzip and Deflate compression for rapid loading times.
  - Browser caching rules (1-year cache on video and static assets).
  - Security headers (`X-Frame-Options`, `X-Content-Type-Options`).

- **Static Export**:
  [`next.config.mjs`](next.config.mjs) is configured with `output: 'export'` and `images: { unoptimized: true }`. This enables pure static output without needing a dedicated Node.js server daemon.

- **Local Development**:
  To preview or make edits locally:
  ```bash
  npm run dev
  ```
  Visit [http://localhost:3000](http://localhost:3000).
