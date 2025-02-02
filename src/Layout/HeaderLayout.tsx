import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export default function HeaderLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
