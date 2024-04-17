import { Link, NavLink } from "react-router-dom";
import userPhoto from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("You have sign out successfully");
        console.log("LouOut");
      })
      .catch((error) => console.error(error));
  };
  const navLinks = [
    <>
      <li
        key="home"
        className="animate__animated animate__bounceInLeft animate__delay-2s"
      >
        <NavLink to="/">Home</NavLink>
      </li>
      <li
        key="properties"
        className="animate__animated animate__bounceInLeft animate__delay-1s"
      >
        <NavLink to="/properties">Properties</NavLink>
      </li>
      <li
        key="about"
        className="animate__animated animate__bounceInLeft animate__fast"
      >
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li
        key="contact"
        className="animate__animated animate__bounceInLeft animate__faster"
      >
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>,
  ];
  return (
    <div className="navbar bg-transparent absolute top-0 left-0 z-10 text-green-300 font-semibold animate__animated animate__fadeIn">
      <div className="navbar lg:max-w-6xl mx-auto px-3 md:px-5 flex flex-col lg:flex-row">
        <div className="lg:navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
            >
              {navLinks}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-3xl font-bebasNeue">
            <span className="text-green-400 animate__animated animate__pulse">
              Luxuria
            </span>{" "}
            Palace
          </a>
        </div>
        <div className="lg:navbar-end">
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 uppercase font-semibold">
              {navLinks}
            </ul>
          </div>
          {user && (
            <div className="dropdown dropdown-end mr-2">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={!user.photoURL ? userPhoto : user.photoURL}
                    alt="Logged user photo"
                    title={
                      !user.displayName
                        ? "User Name not found!"
                        : user.displayName
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-green-300"
              >
                <li>
                  <NavLink to="/user-profile" className="py-3">
                    User Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/update-profile" className="py-3">
                    Update Profile
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          {user ? (
            <Link
              to="/"
              onClick={handleSignOut}
              className="btn bg-green-400 px-6 border-none uppercase"
            >
              Sign Out
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn bg-green-400 px-6 border-none uppercase animate__animated animate__flash"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};
export default Navbar;
