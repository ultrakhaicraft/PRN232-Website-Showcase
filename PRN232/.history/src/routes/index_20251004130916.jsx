import { lazy } from "react";

// Lazy load features (fallback to existing ones if present)
const Home = lazy(() => import("@/features/HomePage").then(m => ({ default: m.default || m })));
const About = lazy(() => import("@/features/About").then(m => ({ default: m.default || m })));
const AIUsage = lazy(() => import("@/features/AIUsage").then(m => ({ default: m.default || m })));
const Post = lazy(() => import("@/features/Post").then(m => ({ default: m.default || m })));
const Post2 = lazy(() => import("@/features/Post2").then(m => ({ default: m.default || m })));
const PostTonGiao = lazy(() => import("@/features/PostTonGiao/PostTonGiao.jsx").then(m => ({ default: m.default || m })));
const PostBaoCaoTonGiao = lazy(() => import("@/features/PostBaoCaoTonGiao/PostBaoCaoTonGiao.jsx").then(m => ({ default: m.default || m })));
const ShowAllPostPage= lazy(() => import("@/features/ShowAllPostPage/ShowAllPostPage.jsx").then(m => ({ default: m.default || m })));

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/ai-usage", element: <AIUsage /> },
  { path: "/show-all-posts", element: <ShowAllPostPage /> },
  { path: "/post/1", element: <Post /> },
  { path: "/post/2", element: <Post2 /> },
  { path: "/post/3", element: <PostTonGiao /> },
  { path: "/post/4", element: <PostBaoCaoTonGiao /> }
];
