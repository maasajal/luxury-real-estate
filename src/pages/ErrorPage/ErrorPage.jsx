import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="text-center my-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 | Page not found!</title>
      </Helmet>
      <h1 className="text-8xl text-red-800 font-extrabold">Oops!</h1>
      <h2 className="text-5xl py-12">404 - Page not found!</h2>
      <p className="mb-8">Sorry, we did not find this page...</p>
      <hr className="pt-8" />
      <Link to="/" className="btn bg-green-400 hover:bg-transparent">
        <FaArrowLeft />
        Back to Home
      </Link>
    </div>
  );
};
export default ErrorPage;
