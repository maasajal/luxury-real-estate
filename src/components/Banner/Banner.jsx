import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = ({ realEstate }) => {
  const { estate_title } = realEstate;
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1} // Display one slide per page
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {realEstate.map((property) => (
          <SwiperSlide key={property.id}>
            <div
              className="hero"
              style={{
                backgroundImage: `url(${property.image})`,
              }}
            >
              <div className="hero-overlay bg-opacity-30"></div>
              <div className="hero-content text-center text-white py-48">
                <div className="max-w-3xl">
                  <h1 className="mb-5 text-5xl font-bold font-bebasNeue">
                    {property.estate_title}{" "}
                  </h1>
                  <p className="mb-5">{property.description}</p>
                  <Link
                    to={`/property/${estate_title}`}
                    className="btn bg-green-400 px-6 border-none uppercase"
                  >
                    View Property
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;
