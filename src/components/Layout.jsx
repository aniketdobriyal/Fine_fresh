import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}