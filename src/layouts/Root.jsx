import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <Outlet />
      </div>
    </>
  );
};
export default Root;
