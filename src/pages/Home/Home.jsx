import { useLoaderData } from "react-router-dom";
import EstateCard from "../../components/EstateCard/EstateCard";

const Home = () => {
  const realEstate = useLoaderData();
  console.log(realEstate);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
      {realEstate.map((estate) => (
        <EstateCard key={estate.id} estate={estate} />
      ))}
    </div>
  );
};
export default Home;
