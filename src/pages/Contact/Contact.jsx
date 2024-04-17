import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import contact from "../../assets/contact.jpg";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Luxuria Palace | Contact us</title>
      </Helmet>
      <ToastContainer position="top-center" />
      <div
        className="hero"
        style={{
          backgroundImage: `url(${contact})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content py-48">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold font-bebasNeue">Contact Us</h1>
            <p className="mb-5">
              If you're interested in buying or renting any of our exquisite
              properties, please don't hesitate to reach out to us. Our
              dedicated team is here to assist you every step of the way, from
              scheduling viewings to answering any questions you may have.
              Contact us today to start your journey towards finding your dream
              home or retreat.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2 my-24">
        <div className="hero bg-base-200 pb-12 rounded-xl">
          <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="my-12 bg-green-50 p-5 rounded-xl">
                <h3 className="text-2xl py-5">Another way to contact</h3>
                <p>
                  <strong>Email: </strong>{" "}
                  <a href="mailto:luxuria@palace.com">luxuria@palace.com</a>
                </p>
                <p>
                  <strong>Phone: </strong>{" "}
                  <a href="callto:9876543210">9876543210</a>
                </p>
                <h3 className="text-2xl py-5">Follow us on:</h3>
                <ul className="flex justify-between">
                  <li>
                    <a href="">
                      <FaFacebook className="text-2xl" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaInstagram className="text-2xl" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTwitter className="text-2xl" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-6">
                <form
                  className="card-body"
                  onSubmit={handleSubmit((data) => {
                    setData(JSON.stringify(data));
                    toast.success("Thank you for Contacting us!");
                  })}
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        First Name<span className="text-red-400">*</span>
                      </span>
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Last name<span className="text-red-400">*</span>
                      </span>
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Email<span className="text-red-400">*</span>
                      </span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone number</span>
                    </label>
                    <input
                      {...register("phoneNumber")}
                      type="text"
                      placeholder="Enter your contact number"
                      name="contact"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Message<span className="text-red-400">*</span>{" "}
                      </span>
                    </label>
                    <textarea
                      {...register("message")}
                      placeholder="Message..."
                      name="message"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Would you like to...</span>
                    </label>
                    <select
                      {...register("category", { required: true })}
                      className="input input-bordered"
                    >
                      <option value="">Select...</option>
                      <option value="buy">Buy</option>
                      <option value="rent">Rent</option>
                    </select>
                  </div>
                  <div className="form-control mt-3">
                    <button className="btn bg-green-400">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
