import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { logInUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero bg-base-200 my-36">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left my-8">
          <h1 className="text-5xl font-bold">Login your property!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-12">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-400">Login</button>
            </div>
          </form>
          <div className="px-8 mb-6 flex flex-col justify-between gap-4">
            <h2 className="text-3xl font-semibold">Login with: </h2>
            <button onClick={handleGoogleSignIn} className="btn btn-outline">
              <FcGoogle className="text-2xl" /> Google
            </button>
            <button onClick={handleGithubSignIn} className="btn btn-outline">
              <FaGithub className="text-2xl" /> Github
            </button>
          </div>
          <div className="mb-5">
            <label className="text-center">
              <p className="label-text">
                Don't Have An Account?
                <Link to="/register" className="text-green-400 font-bold">
                  {" "}
                  Register
                </Link>
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
