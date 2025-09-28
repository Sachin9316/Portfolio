// src/routes/route.tsx
import { createBrowserRouter } from "react-router-dom";
import About from "@/pages/About/About";
import Home from "@/pages/Home/home";
import Contact from "@/pages/Contactus/Contact";
import AppLayout from "@/layout/AppLayout";
import Portfolio from "@/pages/Portfolio/Portfolio";
import Skills from "@/pages/Skills/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "skills", element: <Skills /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
