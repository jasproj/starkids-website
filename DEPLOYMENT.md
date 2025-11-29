# Star Kids Website - GitHub Pages Deployment Guide

## Your Setup
- **Domain**: starkids.team (purchased on Porkbun)
- **Hosting**: GitHub Pages (FREE)
- **GitHub Account**: You already have one ✓

## Quick Deploy (15 minutes)

### Step 1: Upload to GitHub

1. Go to https://github.com
2. Log into your account
3. Click the **+** icon (top right) → **New repository**
4. Repository settings:
   - Name: `starkids-website`
   - Make it **Public**
   - Don't add README (we already have files)
5. Click **Create repository**

### Step 2: Upload Your Files

1. In your new empty repository, click **"uploading an existing file"**
2. Drag ALL files from the `starkids-site` folder:
   - `index.html`
   - `CNAME`
   - `css/style.css`
   - `js/script.js`
   - `images/logo-main.jpg`
   - `images/logo-badge.jpg`
3. Add message: "Initial Star Kids website"
4. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. In your repository, click **Settings** (gear icon)
2. In left sidebar, click **Pages**
3. Under **Source**:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. Wait 1 minute
6. Your site is live at: `https://YOUR-USERNAME.github.io/starkids-website/`

### Step 4: Connect Your Porkbun Domain

#### In GitHub:
1. Still in Settings → Pages
2. Under **Custom domain**, type: `starkids.team`
3. Click **Save**
4. Wait for DNS check...

#### In Porkbun:
1. Log into https://porkbun.com
2. Go to your **Domain Management**
3. Click **DNS** next to starkids.team
4. **DELETE** any existing A or CNAME records for @ or www

5. **ADD these A records** (add all 4):

```
Type: A
Host: (leave blank or use @)
Answer: 185.199.108.153
TTL: 600
```

```
Type: A
Host: (leave blank or use @)
Answer: 185.199.109.153
TTL: 600
```

```
Type: A
Host: (leave blank or use @)
Answer: 185.199.110.153
TTL: 600
```

```
Type: A
Host: (leave blank or use @)
Answer: 185.199.111.153
TTL: 600
```

6. **ADD this CNAME record**:

```
Type: CNAME
Host: www
Answer: YOUR-GITHUB-USERNAME.github.io
TTL: 600
```

*Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username!*

7. Click **Save** or **Add** for each record

### Step 5: Wait for DNS Propagation

- DNS changes take **1-24 hours** (usually 2-4 hours)
- Check status at: https://www.whatsmydns.net/#A/starkids.team
- When you see the GitHub IPs worldwide, you're good!

### Step 6: Enable HTTPS

1. Go back to GitHub → Settings → Pages
2. Check the box **"Enforce HTTPS"**
3. Done!

## Your Website Will Be Live At:

- **https://starkids.team**
- **https://www.starkids.team**

---

## Troubleshooting

### "DNS not working"
- Make sure you deleted old records in Porkbun
- Double-check all 4 A record IPs are correct
- DNS can take up to 24 hours - be patient!

### "HTTPS certificate error"
- This is normal for first 24 hours after DNS setup
- GitHub needs time to provision SSL certificate
- Check back in a few hours

### "Page not found"
- Make sure GitHub Pages is enabled (Settings → Pages)
- Verify branch is set to "main"
- Check that index.html is in the root folder

---

## Making Updates

To update your website:

1. Go to your GitHub repository
2. Click on the file you want to edit
3. Click the pencil icon (✏️)
4. Make changes
5. Click **Commit changes**
6. Changes go live in 1-2 minutes!

Or upload new files the same way you did initially.

---

## Contact

If you need help:
- Lucas: Lucas@starkids.team / +55 31 98371-9846
- Jason: jason@starkids.team / +1 727-623-2652

---

**Your website is ready to help you expand Star Kids throughout Brazil! 🌟⚽**
