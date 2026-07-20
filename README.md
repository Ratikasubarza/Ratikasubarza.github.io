# Ratika Subarza | QA Portfolio

A dependency-free static QA portfolio for `https://ratikasubarza.github.io`.

## Local preview

From the repository root:

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## Publish with GitHub Pages

This site belongs in the public repository [`Ratikasubarza/Ratikasubarza.github.io`](https://github.com/Ratikasubarza/Ratikasubarza.github.io).

1. Commit the files to the repository's default branch.
2. Open **Settings → Pages** in GitHub.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the default branch and `/ (root)`, then save.
5. Verify the live site at `https://ratikasubarza.github.io`.

All asset paths are relative, so the site also works during local preview.

## Content controls

- Publish only claims and metrics that can be defended in an interview.
- Keep company screenshots, credentials, internal URLs, ticket IDs, customer data, private API routes, database schemas, production data, and unreleased requirements out of this repository.
- Treat the QA artifacts as anonymized portfolio samples, not real release records.
- Disclose AI assistance accurately. Do not claim AI/ML model validation or production AI ownership without evidence.

## Structure

- `index.html`: portfolio landing page
- `styles.css` and supporting CSS files: visual system and responsive layout
- `script.js`: theme, mobile navigation, filters, and dynamic year
- `artifacts/`: anonymized QA document samples
- `favicon.svg`, `site.webmanifest`, `robots.txt`, and `sitemap.xml`: browser and search metadata
