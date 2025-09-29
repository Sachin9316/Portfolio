import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import { navigation } from "./navigation";
import Home from "@/pages/Home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, element: <Home /> }, ...navigation],
  },
]);
