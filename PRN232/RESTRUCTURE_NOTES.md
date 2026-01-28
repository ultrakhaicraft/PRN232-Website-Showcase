# Project Restructure & UI Animation (2025-09-27)
- Moved `src/pages` into `src/features/*` (feature-based).
- Added animated route transitions with **Framer Motion**.
- Central routing in `src/routes/index.jsx` (lazy loaded).
- New layout: `src/layouts/DefaultLayout.jsx`.
- Vite alias `@` -> `src/`.
- Dependencies updated in `package.json` (react-router-dom, framer-motion).
## How to run
npm install
npm run dev

- Navbar và Footer đã được tách ra thành component riêng trong `src/components`.
- Tất cả import ảnh đã chuyển sang dùng alias `@/assets/...`.
