# Deployment Instructions — Mins Constructions Website

## Step 1: Create a GitHub Repository

1. Go to github.com and sign in
2. Click the + icon (top right) → New repository
3. Repository name: `minscons` (or whatever you prefer)
4. Leave it Public (GitHub Pages requires public on free plans)
5. Do NOT check "Add a README" — you already have files locally
6. Click Create repository

## Step 2: Push Your Local Code to GitHub

After creating the repo, GitHub will show you a URL. Run these commands:

```bash
cd /Users/mohammadrezai/Personal/minscons
git add index.html about.html contact.html css/ js/ photos/ images/ PLAN.md note.txt DEPLOYMENT.md
git commit -m "Initial website build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/minscons.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Enable GitHub Pages

1. Go to your repo on GitHub: `https://github.com/YOUR_USERNAME/minscons`
2. Click Settings (tab at the top)
3. In the left sidebar, click Pages
4. Under Source, select "Deploy from a branch"
5. Under Branch, select `main` and folder `/ (root)`
6. Click Save

## Step 4: Wait for Deployment

- GitHub will take 1-2 minutes to build and deploy
- You can check progress under the Actions tab in your repo
- A green checkmark means it's live

## Step 5: Access Your Live Site

Your site will be live at:

```
https://YOUR_USERNAME.github.io/minscons/
```

## Step 6: Verify Everything Works

- Check all 3 pages load (Home, About Us, Contact)
- Check the gallery loads from manifest.json
- Test on your phone to confirm mobile layout
- Test the navbar hamburger menu on mobile
- Click the "Get a Free Quote" buttons — they should navigate to the contact page

## Ongoing: How to Update the Site

Every time you make changes:

```bash
git add .
git commit -m "describe your change"
git push
```

GitHub Pages will automatically redeploy within 1-2 minutes.

## Optional: Custom Domain (e.g. www.minsconstructions.com.au)

If you later purchase a domain:

1. In repo Settings → Pages → Custom domain, enter your domain
2. At your domain registrar, add a CNAME record pointing to `YOUR_USERNAME.github.io`
3. Check "Enforce HTTPS" once the DNS propagates (can take up to 24 hours)
