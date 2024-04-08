import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2 font-poppins">
        <Outlet />
      </div>
    </>
  );
};
export default Root;
