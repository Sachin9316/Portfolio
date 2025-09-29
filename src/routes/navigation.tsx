import { lazy, Suspense } from "react";

const About = lazy(() => import("@/pages/About/About"));
const Contact = lazy(() => import("@/pages/Contactus/Contact"));
const Portfolio = lazy(() => import("@/pages/Portfolio/Portfolio"));
const Skills = lazy(() => import("@/pages/Skills/Skills"));

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

export const navigation = [
  {
    path: "portfolio",
    element: withSuspense(Portfolio),
  },
  { path: "skills", element: withSuspense(Skills) },
  { path: "about", element: withSuspense(About) },
  { path: "contact", element: withSuspense(Contact) },
];
