# minghanzhu.com

Astro personal profile site for Minghan (Max) Zhu, using the resume PDF as the source content.

## Local development

Astro 7 requires Node `>=22.12.0`.

```bash
npm install
npm run dev
```

This repo also includes Deno tasks because Deno is available in the current workspace:

```bash
deno install --allow-scripts
deno task dev
```

## Deployment

The site is configured for GitHub Pages with:

- `site: "https://minghanzhu.com"` in `astro.config.mjs`
- `public/CNAME` containing `minghanzhu.com`
- `.github/workflows/deploy.yml` using `withastro/action@v6` and `actions/deploy-pages@v5`

In GitHub, set **Settings -> Pages -> Source** to **GitHub Actions**. In Namecheap, point the apex domain to GitHub Pages A records and set `www` as a CNAME to the GitHub Pages host.
