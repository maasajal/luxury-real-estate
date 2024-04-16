import { useLoaderData } from "react-router-dom";
import EstateCard from "../../components/EstateCard/EstateCard";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const realEstate = useLoaderData();
  console.log(realEstate);
  return (
    <>
      <div>
        <Banner realEstate={realEstate} />
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <div className="mt-24 text-center max-w-xl mx-auto">
          <h2 className="text-5xl font-bold font-bebasNeue">
            Property for sale
          </h2>
          <p className="mt-5 leading-8">
            Discover an exclusive collection of properties meticulously curated
            for discerning buyers seeking unparalleled luxury and
            sophistication. From opulent beachfront mansions to secluded
            mountain chalets, each residence offers breathtaking views and
            world-class amenities tailored to elevate your lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
          {realEstate.map((estate) => (
            <EstateCard key={estate.id} estate={estate} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
