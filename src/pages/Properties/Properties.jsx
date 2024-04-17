import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

import Banner from "../../components/Banner/Banner";
import EstateCard from "../../components/EstateCard/EstateCard";

const Properties = () => {
  const featuredProperties = useLoaderData();
  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Luxuria Palace | Featured Properties</title>
      </Helmet>
      <Banner realEstate={featuredProperties} />
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <div className="text-center py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bebasNeue">Featured Properties</h2>
          <p className="py-5 leading-8">
            Discover our curated selection of exquisite properties showcasing
            the epitome of luxury living. From oceanfront penthouses to mountain
            chalets, explore our handpicked collection of featured properties,
            each offering unparalleled elegance and sophistication.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
          {featuredProperties.map((property) => (
            <EstateCard key={property.id} estate={property} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Properties;
