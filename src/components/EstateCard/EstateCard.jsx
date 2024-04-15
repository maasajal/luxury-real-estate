import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const {
    id,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = estate;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={estate_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title} </h2>
        <h3 className="text-lg">{segment_name} </h3>
        <div className="flex flex-wrap gap-3">
          <p>
            <strong>Price: </strong> $ {price}{" "}
          </p>
          <p>
            <strong>Area: </strong> {area}{" "}
          </p>
          <p>
            <strong>Location: </strong> {location}{" "}
          </p>
        </div>
        <div className="card-actions">
          <Link
            to={`/property/${estate_title}`}
            className="btn bg-green-400 px-6 border-none uppercase"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EstateCard;
