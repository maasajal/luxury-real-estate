import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="font-poppins">
        <Outlet />
        {/* Toast a message */}
        <ToastContainer position="top-center" />
      </div>
      <Footer />
    </>
  );
};
export default Root;
