import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth } from "firebase/auth";

const UpdateProfile = () => {
  const { userProfileUpdate } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (user !== null) {
      setName(user.displayName);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");

    // Update user profile
    userProfileUpdate(name, photoUrl)
      .then(() => {
        toast.success("Profile Updated successfully!");
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
        <title>Luxuria Palace | Update Profile</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <div className="hero bg-base-200 my-36 rounded-xl">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left my-8">
              <h1 className="text-5xl font-bold">Update your profile</h1>
            </div>
            <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mb-6 animate__animated animate__zoomIn">
              <h2 className="text-3xl text-center font-semibold font-bebasNeue py-8 animate__animated animate__heartBeat">
                Hello, {name}
              </h2>
              <img src={photoURL} alt={name} />
              <form onSubmit={handleUpdateProfile} className="card-body animate__animated animate__zoomInUp">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Name<span className="text-red-400">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder={name}
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Photo URL<span className="text-red-400">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder={photoURL}
                    name="photoUrl"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-3">
                  <button className="btn bg-green-400">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Toast a message */}
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};
export default UpdateProfile;
