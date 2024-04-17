import { Link, useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const PropertyDetails = () => {
  const { estate_title } = useParams();
  const estate = useLoaderData();
  const propertyDetails = estate.find(
    (property) => property.estate_title === estate_title
  );
  console.log(estate, propertyDetails);
  const {
    segment_name,
    detail_property,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = propertyDetails;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Property | {estate_title}</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <div className="card card-compact my-32">
          <div className="text-center my-5">
            <h2 className="text-3xl font-bold">
              Details of Property{" "}
              <span className="text-green-400">{estate_title}</span>
            </h2>
            <h3 className="text-xl font-semibold my-4">
              {" "}
              Segment: {segment_name}
            </h3>
          </div>
          <figure>
            <img className="rounded-xl" src={image} alt={estate_title} />
          </figure>
          <div className="card-body">
            <p className="font-semibold text-lg">
              This property is for{" "}
              <span className="text-red-500">{status}</span>
            </p>
            <ul className="flex justify-between">
              <li>
                <p className="text-lg">
                  Price: ${" "}
                  <span className="bg-green-50 rounded-xl py-1 px-2 text-center">
                    {price}
                  </span>
                </p>
              </li>
              <li>
                <p className="text-lg">
                  Area:{" "}
                  <span className="bg-green-50 rounded-xl py-1 px-2 text-center">
                    {area}
                  </span>
                </p>
              </li>
              <li>
                <p className="text-lg">
                  Location:{" "}
                  <span className="bg-green-50 rounded-xl py-1 px-2 text-center">
                    {location}
                  </span>
                </p>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 my-4">
              <h3 className="text-lg">Facilities: </h3>
              {facilities.map((facility, idx) => (
                <p
                  key={idx}
                  className="text-green-400 bg-green-50 rounded-xl py-1 px-2 text-center"
                >
                  {facility}
                </p>
              ))}
            </div>
            <p className="leading-8">{detail_property}</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold my-5">
              Interested to buy this property? Please contact
            </h3>
            <Link
              to="/contact"
              className="btn bg-green-400 px-6 border-none uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default PropertyDetails;
