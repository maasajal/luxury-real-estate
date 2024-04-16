import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="font-poppins">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Root;
