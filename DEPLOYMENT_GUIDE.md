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

## 2. ⚡ Automated Auto-Deployment: GitHub ➔ Hostinger

We have configured an automated GitHub Actions workflow in [`.github/workflows/hostinger-deploy.yml`](.github/workflows/hostinger-deploy.yml).

Every time you run `git push origin main`:
1. GitHub automatically spins up a virtual environment.
2. Installs dependencies and runs `npm run build` (compiles Next.js into `out/`).
3. Securely uploads only changed files into Hostinger's **`public_html/`** folder via FTP.
4. Your website updates automatically in ~30 seconds without logging into Hostinger!

### Setup Instructions (One-time, takes ~2 minutes):

#### Step 1: Get Your Hostinger FTP Details
1. Log in to [Hostinger hPanel](https://hpanel.hostinger.com/).
2. Go to **Websites** → Click **Manage** next to your domain.
3. In the search bar or left sidebar, open **FTP Accounts** (under **Files**).
4. You will see:
   - **FTP IP / Hostname**: (e.g., `ftp.yourdomain.com` or `185.xxx.xxx.xxx`)
   - **FTP Username**: (e.g., `u123456789`)
   - **FTP Password**: (Click change password if you don't remember it)
   - **Port**: `21`

#### Step 2: Add Secrets to Your GitHub Repository
1. Open your repository on GitHub: [https://github.com/ASRathore0/BizHacks](https://github.com/ASRathore0/BizHacks)
2. Go to **Settings** (top tab of the repository).
3. In the left sidebar, click **Secrets and variables** → **Actions**.
4. Click the green button: **New repository secret**.
5. Add these 3 secrets:

| Secret Name | Secret Value | Example |
| :--- | :--- | :--- |
| `FTP_SERVER` | Your Hostinger FTP IP or Hostname | `ftp.yourdomain.com` or `185.224.138.xxx` |
| `FTP_USERNAME` | Your Hostinger FTP Username | `u123456789` |
| `FTP_PASSWORD` | Your Hostinger FTP Password | `YourSecurePassword123!` |

#### Step 3: Trigger Auto-Deployment
Once you add these 3 secrets:
- Every future `git push origin main` will automatically build and publish to your Hostinger website!
- You can monitor real-time build and deploy progress under the **Actions** tab on your GitHub repository.

---

## 3. Manual Deployment to Hostinger (Alternative)

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
