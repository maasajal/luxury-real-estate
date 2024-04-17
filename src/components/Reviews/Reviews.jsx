import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Reviews = ({ feedback }) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {feedback.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="card card-compact bg-base-100 shadow-xl animate__animated animate__zoomInUp">
              <figure>
                <img
                  src={review.image}
                  alt={review.name}
                  className="rounded-full w-1/2 p-5"
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-3xl">{review.name}</h2>
                <div className="flex justify-between">
                  <p className="leading-8">{review.location}</p>
                  <p className="leading-8">{review.date}</p>
                </div>
                <div className="font-semibold flex items-center flex-col gap-3">
                  <p>Rating: {review.rating}</p>
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-green-500"
                      checked
                    />
                  </div>
                </div>
                <q className="mb-4 leading-8">{review.comment}</q>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Reviews;
