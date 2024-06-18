import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    <div className="font-vietnam sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto   flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-grow p-4 md:p-6 lg:p-8">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
