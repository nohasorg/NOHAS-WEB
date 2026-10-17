# Hostinger Deployment

## Build

From the project root, run:

```powershell
corepack pnpm install --frozen-lockfile
corepack pnpm build
```

The production website is generated in `dist/`.

## Upload

1. In Hostinger hPanel, open **Websites → Manage → File Manager**.
2. Open the document root for the domain, usually `public_html/`.
3. Upload the **contents** of `dist/` into that directory. Do not upload the `dist` directory as a nested folder.
4. Make sure `.htaccess` is included. If hidden files are not shown, enable hidden-file visibility in File Manager.
5. Visit the domain and test a nested URL such as `/activities/camps` directly, not only through the home page.
6. Enable the domain's SSL certificate in hPanel if it is not already active.

The included `.htaccess` sends unknown paths to `index.html`, allowing React Router routes to load on Hostinger's Apache hosting. The NOHAS logo is included in the Vite build from `public/assets/`.

## Forms

The current forms post to `/api/contact`, `/api/volunteers`, and `/api/newsletter`. Those endpoints are implemented by the Vite development middleware and are **not included in the static `dist/` build**. The site can be uploaded and viewed without them, but form submissions require a production API or a hosted form provider before launch. Do not treat successful static hosting as confirmation that submissions are being received.