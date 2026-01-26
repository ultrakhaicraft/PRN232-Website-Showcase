import { lazy } from "react";

// Lazy load features
const Home = lazy(() => import("@/features/HomePage/HomePage.jsx"));



export const routes = [
  { path: "/", element: <Home /> },

];
