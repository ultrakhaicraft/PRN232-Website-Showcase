import { lazy } from "react";

// Lazy load features
const Home = lazy(() => import("@/features/HomePage/HomePage.jsx"));
const About = lazy(() => import("@/features/About/About.jsx"));
const AIUsage = lazy(() => import("@/features/AIUsage/AIUsage.jsx"));
const Post = lazy(() => import("@/features/Post/Post.jsx"));
const Post2 = lazy(() => import("@/features/Post2/Post2.jsx"));
const PostTonGiao = lazy(() => import("@/features/PostTonGiao/PostTonGiao.jsx"));
const PostBaoCaoTonGiao = lazy(() => import("@/features/PostBaoCaoTonGiao/PostBaoCaoTonGiao.jsx"));
const ShowAllPostPage = lazy(() => import("@/features/ShowAllPostPage/ShowAllPostPage.jsx"));

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
