import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2 font-poppins">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Root;
