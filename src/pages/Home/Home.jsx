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
