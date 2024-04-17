import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import EstateCard from "../../components/EstateCard/EstateCard";
import Banner from "../../components/Banner/Banner";
import { useEffect, useState } from "react";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  const realEstate = useLoaderData();
  const [reviews, setReviews] = useState([]);
  // console.log(realEstate);
  useEffect(() => {
    const reviewData = async () => {
      const res = await fetch("./reviews.json");
      const data = await res.json();
      setReviews(data);
      console.log(data, reviews);
    };
    reviewData();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Luxuria Palace | Home</title>
      </Helmet>
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

        <div className="mt-32 text-center max-w-xl mx-auto">
          <h2 className="text-5xl font-bold font-bebasNeue">
            What people say about us
          </h2>
          <p className="mt-5 leading-8">
            Discover what our guests have to say about their unforgettable
            experiences with Luxuria Palace - from stunning locations to
            impeccable service, read our testimonials and join the chorus of
            satisfied travelers.
          </p>
        </div>
        <div className="py-20">
          <Reviews feedback={reviews} />
        </div>
      </div>
    </>
  );
};
export default Home;
