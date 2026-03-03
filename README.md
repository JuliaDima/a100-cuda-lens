# a100-cuda-lens
Interactive visualisation of the A100+CUDA internals.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## CI/CD to GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml`:

- builds this React page from `cuda_diagrams.jsx` with Vite
- uploads `dist/` as the Pages artifact
- deploys on push to `main` or `master` (and manual dispatch)
