import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center lg:px-40 sm:px-20 px-5">
      <Navbar />
      <Outlet />
    </div>
  );
}
