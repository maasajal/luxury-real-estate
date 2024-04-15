import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { estate_title } = useParams();
  const estate = useLoaderData();
  const propertyDetails = estate.find(
    (property) => property.estate_title === estate_title
  );
  console.log(estate, propertyDetails);
  const {
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = propertyDetails;

  return (
    <>
      <div className="card card-compact my-32">
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
        </div>
      </div>
    </>
  );
};
export default PropertyDetails;
