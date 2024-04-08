import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="hero bg-base-200 my-36">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left my-8">
            <h1 className="text-5xl font-bold">Register your account</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-6">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
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
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
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
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="term"
                  required
                />
                <label className="label" htmlFor="term">
                  <a className="label-text">Accept Terms & Conditions</a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn bg-green-400">Register</button>
              </div>
            </form>
            <div className="mb-5">
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
    </>
  );
};
export default Register;
