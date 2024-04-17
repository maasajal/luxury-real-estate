import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    image,
  } = estate;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={estate_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title} </h2>
        <h3 className="text-lg font-semibold flex justify-between">
          <span>Segment: {segment_name}</span> <span>For: {status}</span>{" "}
        </h3>
        <ul>
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
        <p className="mb-4 leading-8">{description}</p>
        <div className="card-actions">
          <Link
            to={`/property/${estate_title}`}
            className="btn bg-green-400 px-6 border-none uppercase w-full"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EstateCard;
