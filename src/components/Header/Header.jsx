import { Link, NavLink } from "react-router-dom";
import userPhoto from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => console.log("LouOut"))
      .catch((error) => console.error(error));
  };
  const navLinks = [
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/properties">Properties</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>,
  ];
  return (
    <div className="navbar bg-transparent absolute top-0 left-0">
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
            <span className="text-green-400 hover:text-black">Luxuria</span>{" "}
            Palace
          </a>
        </div>
        <div className="lg:navbar-end">
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 uppercase font-semibold">
              {navLinks}
            </ul>
          </div>
          <div className="dropdown dropdown-end mr-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user ? (
                  <img
                    src={!user.photoURL ? userPhoto : user.photoURL}
                    alt="Logged user photo"
                    title={
                      !user.displayName
                        ? "User Name not found!"
                        : user.displayName
                    }
                  />
                ) : (
                  <img
                    src={userPhoto}
                    alt="Logged user photo"
                    title="Not logged in..."
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/user-profile">
                  User Profile <span className="badge">New</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/update-profile">Update Profile</NavLink>
              </li>
            </ul>
          </div>
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
              className="btn bg-green-400 px-6 border-none uppercase"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
