import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");
    const checkbox = form.get("checkbox");

    // Password validation
    if (password.length < 6) {
      toast.error("Password Length must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Must have an Uppercase letter in the password");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Must have a Lowercase letter in the password");
      return;
    } else if (!checkbox) {
      toast.error("Please accept the terms and conditions.");
      return;
    }

    // Create new user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(user, { displayName: name, photoURL: photoUrl });
        toast.success(
          `Welcome ${user.displayName ? user.displayName : user.email}`
        );
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Luxuria Palace | Register</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <div className="hero bg-base-200 my-36 rounded-xl">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left my-8">
              <h1 className="text-5xl font-bold">Register your account</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-6">
              <form onSubmit={handleRegister} className="card-body animate__animated animate__zoomInUp">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name<span className="text-red-400">*</span></span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your photo URL"
                    name="photoUrl"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email<span className="text-red-400">*</span></span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password<span className="text-red-400">*</span></span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <span
                    className="absolute right-2 bottom-4"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                    id="term"
                  />
                  <label className="label" htmlFor="term">
                    <a href="" target="_blank" className="label-text">
                      Accept Terms & Conditions<span className="text-red-400">*</span>
                    </a>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button className="btn bg-green-400">Register</button>
                </div>
              </form>
              <div className="mb-5 animate__animated animate__wobble">
                <label className="text-center">
                  <p className="label-text">
                    Already Have An Account?
                    <Link to="/login" className="text-green-400 font-bold">
                      {" "}
                      Login
                    </Link>
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Toast a message */}
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};
export default Register;
