import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mx-auto max-w-6xl px-8 py-20">
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
