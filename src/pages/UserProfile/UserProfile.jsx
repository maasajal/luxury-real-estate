import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getAuth } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user !== null) {
      setName(user.displayName);
      setPhotoURL(user.photoURL);
      setEmail(user.email);
    }
  }, [user]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Luxuria Palace | User Profile</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <div className="hero bg-base-200 my-36 rounded-xl">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left my-8">
              <h1 className="text-5xl font-bold">Your profile</h1>
            </div>
            <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mb-6 animate__animated animate__zoomIn">
              <h2 className="text-3xl text-center font-semibold font-bebasNeue py-8 animate__animated animate__heartBeat">
                Hello, {name}
              </h2>
              <img src={photoURL} alt={name} />
              <div className="card-body animate__animated animate__zoomInUp">
                <div className="bg-green-100 p-8 rounded-xl">
                  <h2 className="text-3xl">Name: {name}</h2>
                  <p className="py-4">Photo URL: {photoURL}</p>
                  <p>Email: {email ? email : "Email access does't allow!"}</p>
                </div>
                <form className="card-body animate__animated animate__zoomInUp">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name:</span>
                    </label>
                    <input
                      type="text"
                      placeholder={name}
                      name="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL:</span>
                    </label>
                    <input
                      type="text"
                      placeholder={photoURL}
                      name="photoUrl"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email:</span>
                    </label>
                    <input
                      type="text"
                      placeholder={email}
                      name="email"
                      className="input input-bordered"
                    />
                  </div>
                </form>
                <Link to="/update-profile">
                  <button className="btn bg-green-400 w-full">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
